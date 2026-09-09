# ESFIRE INDIA — MERN website

A responsive multi-page recreation of the ESFIRE INDIA fire-product website.

## Run locally

1. Copy `.env.example` to `.env` and set `MONGODB_URI` if you want enquiries persisted in MongoDB.
2. Run `npm install`.
3. Run `npm run dev` to start the React client and Express API together.

The website runs at `http://localhost:5173` and the API at `http://localhost:5000`.

## Production

Run `npm run build`, then `npm start`. Express serves the generated client and the `/api/enquiries` endpoint.
