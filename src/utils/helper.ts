import fs from 'fs/promises'
import path from 'path'

const countWords = async (filePath: string) =>{
    const counter_dict = {}
    const file_content = await fs.readFile(filePath, {encoding: 'utf-8'})
    const file_content_arr = file_content.split(" ")
    
    for (let i of file_content_arr){
        if(i in counter_dict){
            counter_dict[i] += 1
        } else{
            counter_dict[i] = 1
        }
    }
    return counter_dict
}


export const writeFileWithCount = async(sourceFilePath:string) =>{
    try{
        const count_text = await countWords(sourceFilePath)
        return count_text
    } catch(e:any) {
        return e.message
    }
}

export const filterFile = async (fileName: string) =>{
    const folderPath = path.join(process.cwd(),'uploads')
    
    const files= await fs.readdir(folderPath)
    
    const file = files.filter((f) => {
        return f.startsWith(`${fileName}`)    
    })
    return {folderPath, file}
}