/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import db from "./db.js";

//==== Conteúdos
const CONTENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "conteudos" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "titulo" text,
    "descricao" text,
    "porcentagem" INTEGER
  );`;

  const ADD_CONTENTS_DATA = `
  INSERT INTO conteudos(id, titulo, descricao, porcentagem)
  VALUES

  (1, 'Spider man No Way Home', 'Longe de casa', 10)
  
  `


function createTableContents() {
    db.run(CONTENTS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de conteúdos");
    });
}


function populaTabelaContents(){
    db.run(ADD_CONTENTS_DATA, (error) =>{
        if (error) console.log("Erro ao popular a tabela de conteudos");
    });
}

db.serialize( ()=> {
    createTableContents();
    populaTabelaContents();
});