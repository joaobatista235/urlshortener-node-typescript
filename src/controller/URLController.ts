import { URLModel } from '../database/model/URL'
import { Request, response, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constant'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        // Verificar se a URL ja existe
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if(url){
            response.json(url)
            return
        }
        // Criar o hash para a URL
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // salvar URL no banco
        const newURL = await URLModel.create({hash, shortURL, originURL})

        // Retornar URL salva
        response.json({ newURL })
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        // Pegar hash da URL
        const { hash } = req.params
        const url = URLModel.findOne({hash})
        if(url){
            response.redirect(url.originURL)
        }
        response.status(400).json({error: 'URL not found'})
        
    }
}