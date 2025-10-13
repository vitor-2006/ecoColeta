import { Coleta } from "./schemaColeta.js"
import { verificarDataEstrutura } from "./verificar.js"

export const createColeta = async (endereco, tipoMaterial, data, status) => {
    try {
        const dataCerta = await verificarDataEstrutura(data)
        if(!dataCerta){
            return false
        }
        const newColeta = new Coleta({ endereco, tipoMaterial, data, status })
        return await newColeta.save()
    } catch (error) {
        console.error('Erro ao criar Coleta', error.message)
        throw error
    }
}