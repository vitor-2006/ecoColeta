import express from 'express'
import { getColeta } from './get.js'
import { createColeta } from './post.js';
import { updateColeta } from "./put.js"
import { deleteColeta } from './delete.js';
import { pesqPorEndereco, pesqPorStatus, pesqPorTipoMaterial } from './pesquisa.js';

const routesColeta  = express.Router();

routesColeta.get('/coleta', async (req, res) => {
    const Coletas = await getColeta()
    if(Coletas) {
        return res.status(200).send(Coletas)
    } else {
        return res.status(404).send({ message: 'não têm Coletas registradas' })
    }
});

routesColeta.post('/coleta', async (req, res) => {
    const { endereco, tipoMaterial, data, status } = req.body
    const newColeta = await createColeta(endereco, tipoMaterial, data, status)
    if(!newColeta) {
        return res.status(400).send("Coleta inválida!")
    }
    return res.status(201).send({ message: 'Coleta criada com sucesso', coleta: newColeta })
});

routesColeta.put('/coleta/:id', async (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const updatedColeta = await updateColeta(id, status)
    if(updatedColeta) {
        return res.status(200).send({ message: 'Coleta atualizada com sucesso', coleta: updatedColeta })
    } else {
        return res.status(404).send({ message: 'Coleta não encontrada ou inválida' })
    }
});

routesColeta.delete('/coleta/:id', async (req, res) => {
    const { id } = req.params
    const deletedColeta = deleteColeta(id)
    if(deletedColeta) {
        return res.status(200).send({ message:'Coleta deletada com sucesso', coleta: deletedColeta })
    } else {
        return res.status(404).send({ message: 'Coleta não encontrada' })
    }
});

routesColeta.get('/coleta/search', async (req, res) => {
    const { endereco, tipoMaterial, status } = req.query
    let searchColeta 
    if(endereco) {
       searchColeta = await pesqPorEndereco(endereco)
    } else if(tipoMaterial) {
        searchColeta = await pesqPorTipoMaterial(tipoMaterial)
    } else if(status) {
        searchColeta = await pesqPorStatus(status)
    }
    if(searchColeta) {
        return res.status(200).send(searchColeta)
    } else {
        return res.status(404).send({ message: 'Coleta não encontrada' })
    }
})

export {routesColeta}