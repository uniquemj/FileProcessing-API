import express from 'express'
import 'dotenv/config'
import fileRoute from './routes/fileRoutes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', fileRoute)

const PORT = process.env.PORT || 8080 

app.listen(PORT, ()=>{
    console.log(`Server running at: ${PORT}.`)
})
