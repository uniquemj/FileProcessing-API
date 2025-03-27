import fs from 'fs/promises'
import path from 'path'
import { writeFileWithCount } from "../utils/helper"


export const countWordServices = async(fileName: string) =>{
    const folderPath = path.join(process.cwd(),'uploads')
    
    const files= await fs.readdir(folderPath)
    
    const file = files.filter((f) => {
        return f.startsWith(`${fileName}`)    
    })
    const counted_word = await writeFileWithCount(path.join(folderPath, file[0]))  

    return counted_word
}

export const readFileServices = async(fileName: string) =>{
    const folderPath = path.join(process.cwd(),'uploads')

    const files= await fs.readdir(folderPath)

    const file = files.filter((f) => {
        return f.startsWith(`${fileName}`)    
    })

    const fileContent = await fs.readFile(path.join(folderPath, file[0]), 'utf-8')
    return fileContent
}