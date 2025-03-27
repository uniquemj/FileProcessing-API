import { Request, Response } from "express"
import { readFileServices, countWordServices } from "../services/fileServices"


export const uploadFilesController = (req: Request, res: Response): any =>{
    if(!req.files){
        return res.status(400).json({message: "File Upload Failed"})
    }
    return res.status(200).json({message: "Successfully uploaded files"})
}

export const countWordController = async (req: Request, res: Response): Promise<any> =>{
    const {fileName} = req.query

    if (!fileName){
        return res.status(400).send({message: "query parameter of fileName required."})
    }
    try{
        const counted_word = await countWordServices(`${fileName}`)
        if(!counted_word){
            return res.status(404).send({message: "Failed during counting."})
        }
        res.status(200).send({data: counted_word})
    } catch(e:any){
        res.status(500).send({message: e.message})
    }
}

export const readFilesController = async(req: Request, res: Response): Promise<any> =>{
    const {fileName} = req.query
    
    if(!fileName){
        return res.status(400).send({message: "query parameter of fileName required."})
    } 

    try{
        const fileContent = await readFileServices(`${fileName}`)
        if(!fileContent){
            return res.status(404).send({message: "Failed during reading content."})
        }
        res.status(200).send({data: fileContent})
    }catch(e){
        res.status(404).send({message: `File Name with ${fileName} doesn't exist.`})
    }
}