export const caches = {
  default: {
    match: () => null,
    put: () => {}
  }
}

export const ENV = 'dev'
export const BRANCH = 'test'
export const VERSION = 'test'
export const COMMITHASH = 'test'
export const MAINTENANCE_MODE = 'rw'
export const SALT = 'test-salt'
export const MAGIC_SECRET_KEY = 'test-magic-secret-key'
export const CLUSTER_API_URL = 'http://localhost:9094'
export const CLUSTER_BASIC_AUTH_TOKEN = 'test'
export const S3_BUCKET_ENDPOINT = 'http://localhost:9096'
export const S3_BUCKET_NAME = 'bucket'
export const S3_BUCKET_REGION = 'eu-central-1'
export const S3_ACCESS_KEY_ID = 'access-key-id'
export const S3_SECRET_ACCESS_KEY_ID = 'secret-access-key'
export const DATABASE = 'postgres'
export const PG_REST_URL = 'http://localhost:3000'
export const PG_REST_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicG9zdGdyZXMifQ.oM0SXF31Vs1nfwCaDxjlczE237KcNKhTpKEYxMX-jEU'

// Can be removed once we get a test mode for admin magic sdk.
export const DANGEROUSLY_BYPASS_MAGIC_AUTH = true
