const chalk = require('chalk')
const pegaArquivo = require('./index')
const validaURLs = require('./http-validad')

const caminho = process.argv

async function processaTexto(caminhoArquivo) {
    const resultado = await pegaArquivo(caminhoArquivo[2])
    if (caminhoArquivo[3] === 'validar') {
        console.log(chalk.bgMagenta('Lista de links  Validados :'), await validaURLs(resultado))
    }
    console.log(chalk.bgMagenta('Lista de links :'), resultado)
}

processaTexto(caminho)