import multer from "multer";

export const uploud = multer({
    storage: multer.memoryStorage(),
})