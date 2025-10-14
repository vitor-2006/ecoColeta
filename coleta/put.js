import { Coleta } from "./schemaColeta.js"
import { verificarDataEstrutura } from "./verificar.js"

export const updateColeta = async (id, status) => {
    try {
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