# Memories

This is a very simple example of a full stack application built using JavaScript. 
The backend is written in NodeJS + Express and the frontend is written in Angular. The database being used is the cloud MongoDB and some static data is being stored in AWS S3.

Backend and frontend run in separate Docker containers.

## Development

```
docker-compose -f docker-compose.dev.yml up -d --build
```

Backend runs on port 3000 and client runs on port 4200.


## Production

```
docker-compose up -d --build
```

In production, the Angular client is built and a Nginx docker image is used to serve the static content generated.

TODO: properly serve the backend in a production like environment.


## Environment

This app needs a .env file in it's root with the following configurations:

```
S3_BUCKET_URL=<s3 url>
MONGO_USER=<username>
MONGO_PASS=<password>
```

