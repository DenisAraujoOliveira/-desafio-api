function catError(error,res){
    switch (typeof error) {
        case String:
            res.status(400).send(`${error} inválido(a)`)
            break;
        default:
            res.status(400)
            break;
    }
}

module.exports = (error,res) => catError(error,res)