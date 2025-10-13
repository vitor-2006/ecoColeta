import mongoose from "mongoose";

const ColetaSchema = new mongoose.Schema({
    endereco: {
        type: String,
        required: true
    },
    tipoMaterial: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    status: {
        // agendada ou concluída
        type: String,
        required: true
    },
})
export const Coleta = mongoose.model('coleta', ColetaSchema)