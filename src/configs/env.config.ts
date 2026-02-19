const PORT = Number(process.env.PORT) || "8000";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
const DATABASE_URL = process.env.DATABASE_URL || "";
const DIRECT_URL =process.env.DIRECT_URL || "";
const SECRET_KEY = process.env.SECRET_KEY || "";
const GMAIL_EMAIL = process.env.GMAIL_EMAIL || "";
const GMAIL_APP_PASS = process.env.GMAIL_APP_PASS || "";
const APP_BASE_URL = process.env.APP_BASE_URL || "";
const DATABASE_POOL_URL = process.env.DATABASE_POOL_URL || "";

export {
    PORT,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
    DATABASE_URL,
    DIRECT_URL,
    SECRET_KEY,
    GMAIL_APP_PASS,
    GMAIL_EMAIL,
    APP_BASE_URL,
    DATABASE_POOL_URL,
}
