import { Coleta } from "./schemaColeta.js"
import { verificarDataEstrutura } from "./verificar.js"

export const updateColeta = async (id, status) => {
    try {
        const dataCerta = await verificarDataEstrutura(data)
        if(!dataCerta){
            return false
        }
        const updatedColeta = await Coleta.findByIdAndUpdate(
            id,
            { status },
            { new:true, runValidators:true }
        )
        return updatedColeta
    } catch (error) {
        console.error('Erro ao atualizar Coleta:', error.message)
        throw error
    }
}