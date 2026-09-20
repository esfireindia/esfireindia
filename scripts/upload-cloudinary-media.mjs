import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

dotenv.config({ path: '.env.cloudinary', quiet: true });

const cloudinaryUrl = process.env.CLOUDINARY_URL;

if (!cloudinaryUrl) {
  throw new Error('CLOUDINARY_URL is missing from .env.cloudinary');
}

const credentials = new URL(cloudinaryUrl);

cloudinary.config({
  cloud_name: credentials.hostname,
  api_key: decodeURIComponent(credentials.username),
  api_secret: decodeURIComponent(credentials.password),
  secure: true,
});

const publicDir = path.resolve('public');
const sourceDirs = [path.join(publicDir, 'assets'), path.join(publicDir, 'videos')];
const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp']);
const videoExtensions = new Set(['.mov', '.mp4', '.webm']);

async function walk(directory) {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  const files = await Promise.all(
    entries.map((entry) => {
      const location = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(location) : location;
    }),
  );

  return files.flat();
}

const allFiles = (await Promise.all(sourceDirs.map(walk)))
  .flat()
  .filter((file) => {
    const extension = path.extname(file).toLowerCase();
    return imageExtensions.has(extension) || videoExtensions.has(extension);
  })
  .sort();

console.log(`Uploading ${allFiles.length} media files to Cloudinary...`);

if (allFiles.length === 0) {
  console.log('No local image or video files were found.');
  process.exit(0);
}

let uploadedImages = 0;
let uploadedVideos = 0;

for (const [index, file] of allFiles.entries()) {
  const extension = path.extname(file).toLowerCase();
  const resourceType = videoExtensions.has(extension) ? 'video' : 'image';
  const relativePath = path.relative(publicDir, file).replaceAll('\\', '/');
  const publicId = `esfireindia/${relativePath.slice(0, -extension.length)}`;

  console.log(`[${index + 1}/${allFiles.length}] ${resourceType}: ${relativePath}`);

  const result = await cloudinary.uploader.upload(file, {
    resource_type: resourceType,
    public_id: publicId,
    overwrite: true,
    invalidate: true,
    unique_filename: false,
    use_filename: false,
  });

  if (!result.secure_url || result.public_id !== publicId) {
    throw new Error(`Cloudinary did not confirm upload for ${relativePath}`);
  }

  if (resourceType === 'video') uploadedVideos += 1;
  else uploadedImages += 1;
}

console.log(`Upload complete: ${uploadedImages} images and ${uploadedVideos} videos.`);
