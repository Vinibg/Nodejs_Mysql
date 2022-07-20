const Sequelize = require("sequelize")
const sequelize = new Sequelize("node","root","root",{
    host:"127.0.0.1",
    dialect:"mysql"
})



//Postagem
const Postagem= sequelize.define("postagens",{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

//<Insert
Postagem.create({
    titulo:"Qualquer",
    conteudo:"nfAOEJfneojnfsrjgnsprfeaofmoeakfmoefoagponposrngornororngonvo"
})
//Fim do Insert

//Postagem.sync({force: true})

const Usuario = sequelize.define("usuarios",{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

//Usuario.sync({force: true})