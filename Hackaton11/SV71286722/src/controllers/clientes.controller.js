import db from '../models/index.js'

const Cliente = db.Clientes

export const getClientes = async (req, res) => {
    try{
        const clientes = await Cliente.findAll()
        res.json(clientes)
    }catch(e){
        return res.status(500).json({ message : e.message })
    }
}

export const addClientes = async (req, res) => {

    try{
        const nuevoCliente = await Cliente.create(req.body)
        res.send(nuevoCliente)
    }catch(e){
        return res.status(500).json({ message : e.message })
    }
}

export const updateClientes = async (req, res) => {
    const dni = req.params.id

    try {
        const actualizacionCLiente = await Cliente.update(
            req.body, { where : {dni} }
        )
        res.send(actualizacionCLiente)
    }catch(e){
        return res.status(500).json({ message : e.message })
    }
}

export const deleteCliente = async (req, res) => {
    const dni = req.params.id

    try{
        await Cliente.destroy({
            where : { dni : dni }
        })
        res.sendStatus(204)
    }catch(e){
        res.status(500).json({ message : e.message })
    }
}

export const getClientesbyDNI = async (req, res) => {
    const dni = req.params.id

    try{
        const cliente = await Cliente.findByPk(dni)
        res.json(cliente)
    }catch(e){
        return res.status(500).json({ message : e.message })
    }
}