export const verificarDataEstrutura = async(data) => {
    // Verifica se a data foi fornecida
    if (!data) {
        return false;
    }
  
    const dataArray = data.split("-");
  
    // Garante que a data tem 3 partes (ano, mês, dia)
    if (dataArray.length !== 3) {
        return false;
    }
  
    const [ano, mes, dia] = dataArray;
  
    // Valida o ano: deve ter 4 dígitos e ser um número
    if (ano.length !== 4 || isNaN(parseInt(ano))) {
        return false;
    }
    // Valida o mês: deve ter 1 ou 2 dígitos e ser um número
    if (mes.length > 2 || mes.length === 0 || isNaN(parseInt(mes)) || mes > 12) {
        return false;
    }
    // Valida o dia: deve ter 1 ou 2 dígitos e ser um número
    if (dia.length > 2 || dia.length === 0 || isNaN(parseInt(dia)) || dia > 31) {
        return false;
    }
  
    // Se todas as verificações passaram, a data tem um formato válido
    return true;
}