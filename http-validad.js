const fetch = (...args) => import('node-fetch')
    .then(({ default: fetch }) => fetch(...args));


function manejarError(erro) {
    throw new Error(erro.message)
}

async function checkStatus(arrayURLs) {

    try {
        const arrayStatus = await Promise
            .all(arrayURLs.map(async url => {
                const response = await fetch(url)
                return response.status
            }))
        return arrayStatus
    } catch (erro) {
        manejarError(erro)
    }

}

function gerarURLsArray(arrayLinks) {

    return arrayLinks.map(objectLinks => Object
        .values(objectLinks).join())
    //Join tira um dado do array e transforma em string 
}

async function validaURLs(arrayLinks) {
    const links = gerarURLsArray(arrayLinks)
    const statusLinks = await checkStatus(links)
    //spread operation
    const resultado = await arrayLinks.map((obj, i) => ({
        ...obj,
        status: statusLinks[i]
    }))
    return resultado
}

module.exports = validaURLs