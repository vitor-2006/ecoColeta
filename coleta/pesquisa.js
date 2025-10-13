import { Coleta } from "./schemaColeta.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export const pesqPorEndereco = async (Endereco) => {
    try {
      const safeEndereco = escapeRegex(Endereco);
      return await Coleta.find({ Endereco: { $regex: safeEndereco, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Coleta', error.message);
      throw error;
    }
}

export const pesqPorTipoMaterial = async (TipoMaterial) => {
    try {
      const safeTipoMaterial = escapeRegex(TipoMaterial);
      return await Coleta.find({ TipoMaterial: { $regex: safeTipoMaterial, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Coleta', error.message);
      throw error;
    }
}

export const pesqPorStatus = async (status) => {
    try {
      const safeStatus = escapeRegex(status);
      return await Coleta.find({ status: { $regex: safeStatus, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Coleta', error.message);
      throw error;
    }
}