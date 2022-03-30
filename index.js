const chalk = require('chalk') 
const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



function extrairLink(texto) {
  const regex = /([^[]*])\((https?:\/\/[^$#\s].[^\s]*)\)/gm 
  const arrayLinks = []
  let temp 
  while ((temp = regex.exec(texto)) !== null) {
    arrayLinks.push({ [temp[1]]: temp[2] })
  }
  return arrayLinks.length === 0 ? "Não links ou identação incorreta" : arrayLinks
}

// pegaArquivo('./arquivos/texto1.md')

function trataErro(erro) {
  throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8' 
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extrairLink(texto)
  } catch (erro) {
    trataErro(erro) 
  } finally {
    console.log(chalk.yellow('Operações Concluídas')) 
  }
}


module.exports = pegaArquivo 
// [
//   {
//     nomeDoLink: url
//   }
// ]
