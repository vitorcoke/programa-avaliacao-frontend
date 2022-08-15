import {api} from '../axios-config/index'


export const getAll = async () => {
    const urlRelativa = '/company'
    try{

        const {data} =  await api.get(urlRelativa)

        if(data){
            return data
        }

        return []
    }catch(err){
        return new Error('Erro ao listar Company')
    }
}
