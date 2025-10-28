import { Coleta } from "./schemaColeta.js"

export const deleteColeta = async (id) => {
    try {
        return await Coleta.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Coleta:', error.message)
        throw error
    }
}