import express from 'express'
import { uploadFilesController, readFilesController, countWordController } from '../controllers/fileControllers'
import { upload } from '../middlewares/upload.middlewares'

const route = express.Router()

route.post('/upload_file', upload.array('files'), uploadFilesController)

route.get('/read_file', readFilesController )

route.get('/count_word', countWordController)

export default route;