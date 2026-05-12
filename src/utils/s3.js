import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.REACT_APP_S3_BUCKET;

export async function getPresignedUrl(key, expiresIn = 3600) {
  const command = new GetObjectCommand({ Bucket: BUCKET, Key: key });
  return getSignedUrl(s3Client, command, { expiresIn });
}

export async function uploadFile(key, file) {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: file,
    ContentType: file.type,
  });
  return s3Client.send(command);
}

export async function listFiles(prefix = '') {
  const command = new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix });
  const response = await s3Client.send(command);
  return response.Contents ?? [];
}

export { s3Client, BUCKET };
