import { Coleta } from "./schemaColeta.js"

export const getColeta = async () => {
    try {
        return await Coleta.find()
    } catch (error) {
        console.log('erro ao buscar as Coletas', error.message)
        throw error
    }
}