import fs from 'fs/promises'
import path from 'path'
import { writeFileWithCount, filterFile } from "../utils/helper"


export const countWordServices = async(fileName: string) =>{
    const {folderPath, file} = await filterFile(fileName)
    const counted_word = await writeFileWithCount(path.join(folderPath, file[0]))  

    return counted_word
}

export const readFileServices = async(fileName: string) =>{
    const {folderPath, file} = await filterFile(fileName)

    const fileContent = await fs.readFile(path.join(folderPath, file[0]), 'utf-8')
    return fileContent
}