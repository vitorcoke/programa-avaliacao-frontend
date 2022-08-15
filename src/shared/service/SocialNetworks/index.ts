import { api } from "../axios-config"

export const getAll = async () =>{
    const urlRelativa = '/social-networks'
    try{
        const {data} = await api.get(urlRelativa)

        if(data){
            return data
        }
        return []
    }catch(err){
        return new Error('Erro ao listar redes sociais')
    }
}