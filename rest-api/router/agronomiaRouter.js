var express = require('express');
var router = express.Router();
var AgronomiaModel = require('../model/agronomia/AgronomiaModel');
var RespostaClass = require('../model/RespostaClass');

//router pegar todos agronomos
router.get("/", function(req, res, next){

    AgronomiaModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro:', erro); //pra eu saber qual o erro ocorrido
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})

//pegar pelo id
router.get("/:id?", function(req, res, next){
    
        AgronomiaModel.getId(req.params.id , function(erro, retorno){
            let resposta = new RespostaClass();
            if(erro){
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro!';
                console.log('erro:', erro); //pra eu saber qual o erro ocorrido
            }else{
                resposta.dados = retorno;
            }
            res.json(resposta);
        })
    })
//inserir dados
router.post("/?", function(req, res, next){
    
        AgronomiaModel.adicionar(req.body, function(erro, retorno){
            let resposta = new RespostaClass();
            if(erro){
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro!';
                console.log('erro:', erro); //pra eu saber qual o erro ocorrido
            }else{
                if(retorno.affectedRows > 0){
                    resposta.msg = "cadastro realizado com sucesso.";
                }else{
                    resposta.erro = true;
                    resposta.msg = "Não foi possivel realizar a operação!"
                }
            }
            console.log('resp:', resposta);
            res.json(resposta);
        })
    })

//deletar dados
router.delete("/:id", function(req, res, next){
    
        AgronomiaModel.deletar(req.params.id, function(erro, retorno){
            let resposta = new RespostaClass();
            if(erro){
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro!';
                console.log('erro:', erro); //pra eu saber qual o erro ocorrido
            }else{
                if(retorno.affectedRows > 0){
                    resposta.msg = "Registro excluido com sucesso.";
                }else{
                    resposta.erro = true;
                    resposta.msg = "Não foi possivel excluir o registro!"
                }
            }
            console.log('resp:', resposta);
            res.json(resposta);
        })
    })

//editar dados
router.put("/", function(req, res, next){
    
        AgronomiaModel.editar(req.body, function(erro, retorno){
            let resposta = new RespostaClass();
            if(erro){
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro!';
                console.log('erro:', erro); //pra eu saber qual o erro ocorrido
            }else{
                if(retorno.affectedRows > 0){
                    resposta.msg = "Registro editado com sucesso.";
                }else{
                    resposta.erro = true;
                    resposta.msg = "Não foi possivel editar o registro!"
                }
            }
            console.log('resp:', resposta);
            res.json(resposta);
        })
    })

module.exports = router;