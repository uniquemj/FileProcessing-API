import multer from "multer"
import path from 'path'

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb) {
        cb(null, file.originalname+path.extname(file.originalname))
    }
})

export const upload = multer({storage: storage})