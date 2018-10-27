const db = require('../../banco/dbConexao');//conexao com o banco

module.exports = class AgronomiaModel{
    //recupera todos
    static getTodos(callback){
       return db.query("SELECT * FROM agronomos", callback);
    }

    //recuperar pelo id
    static getId(id, callback){
        return db.query("SELECT * FROM agronomos WHERE id_agronomo = ?", [id], callback);
    }
    //adicionar um novo agronomo
    static adicionar(agronomo, callback){
        return db.query("INSERT INTO agronomos (nome, sobrenome, endereco, estado, cidade, culturas, telefone, crea, crea_estado) VALUES(?, ?, ?, ?, ?, ?, ?, ?,?)",
    [agronomo.nome, agronomo.sobrenome, agronomo.endereco, agronomo.estado, agronomo.cidade, agronomo.culturas, agronomo.telefone, agronomo.crea, agronomo.crea_estado], callback);
    }
    //deletar um agronomp
    static deletar(id, callback){
        return db.query("DELETE FROM agronomos WHERE id_agronomo = ?", [id], callback);
    }
    //editar um agronomo
    static editar(agronomo, callback){
        return db.query("UPDATE agronomos SET nome = ?, sobrenome = ?, endereco = ?, estado = ?, cidade = ?, culturas = ?, telefone = ?, crea = ?, crea_estado = ? WHERE id_agronomo = ?",
                        [agronomo.nome, agronomo.sobrenome, agronomo.endereco, agronomo.estado, agronomo.cidade, agronomo.culturas, agronomo.telefone, agronomo.crea, agronomo.crea_estado, agronomo.id_agronomo], callback);
    }
   
};