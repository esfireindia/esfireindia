const CLOUDINARY_DELIVERY_ROOT = 'https://res.cloudinary.com/lbfczpv5';
const CLOUDINARY_MEDIA_ROOT = 'esfireindia';
const VIDEO_EXTENSION = /\.(?:mov|mp4|webm)$/i;

export function mediaUrl(localPath) {
  if (typeof localPath !== 'string' || !localPath.startsWith('/')) return localPath;

  const resourceType = VIDEO_EXTENSION.test(localPath) ? 'video' : 'image';
  const transformation = resourceType === 'image' ? 'f_auto,q_auto/' : '';

  return `${CLOUDINARY_DELIVERY_ROOT}/${resourceType}/upload/${transformation}${CLOUDINARY_MEDIA_ROOT}${localPath}`;
}

export function resolveMediaPaths(value) {
  if (typeof value === 'string') {
    return value.startsWith('/assets/') || value.startsWith('/videos/') ? mediaUrl(value) : value;
  }

  if (Array.isArray(value)) return value.map(resolveMediaPaths);

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, resolveMediaPaths(nestedValue)]),
    );
  }

  return value;
}
