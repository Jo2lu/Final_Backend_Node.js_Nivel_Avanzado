import puppeteer from "puppeteer"
import fs from "fs/promises"

async function raspador1(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.esquire.com/es/actualidad/cine/g28408811/peliculas-terror-netflix/")
    
    const resultados = await page.evaluate(()=>{
        const contenidoRaspado = document.getElementsByClassName("e1tmud0h11")
        const datos = [...contenidoRaspado].map(elemento =>{
            const pelisTitles = elemento.querySelector(".e1tmud0h8").innerText
            const pelisImg = elemento.querySelector("img").srcset
            return{
                pelisTitles,
                pelisImg
            }
        })
        return datos
    }) 
    console.log(resultados)

    await fs.writeFile("titulosPelisTerrorNetflixPorVer.json", JSON.stringify(resultados, null, 2))
    await browser.close()
}


async function buscarResultados(){
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto("https://www.google.com")


    const uniques = new Set()
    page.on('response', async response =>{
        if(response.url().includes('/complete/search?q=puppteer')){
            const suggestions = await page.evaluate(()=>{
                Array.from(
                    document.querySelectorAll("ul[role='listbox'] li .wM6W7d"), 
                    element => element.textContent
                )
            })
            suggestions.forEach(s => uniques.add(s));
        }
    })
    await page.type("*[name='q']", 'Este texto lo escribe puppeteer en el buscador de Google ', {delay:500})

    console.log(uniques)
} 



async function raspador2DirectoDeNetflix(){
    const browser = await puppeteer.launch({slowMo: 1000})
    const page = await browser.newPage()
    await page.goto("https://www.netflix.com/mx/browse/genre/81612176")
    
    const resultados = await page.evaluate(()=>{
        const paso1 = document.getElementsByClassName("nm-content-horizontal-row-item-container")
        let paso2 = paso1[1]
        let paso3 = paso2.getElementsByClassName("nm-content-horizontal-row-item")
        const datos = [...paso3].map(elemento =>{
            const urlParaAbrirPelisEnNetflix = elemento.querySelector(".nm-collections-title.nm-collections-link").href 
            const titulosDePelis = elemento.querySelector(".nm-collections-title-name").textContent
            const imgPelis = elemento.querySelector("img").src
            return{
                urlParaAbrirPelisEnNetflix,
                titulosDePelis,
                imgPelis,
            }
        })
        return datos
    }) 
    console.log(resultados)

    await fs.writeFile("pelisPorVerDeTerrorNetflix.json", JSON.stringify(resultados, null, 2))
    await browser.close()
}
raspador2DirectoDeNetflix()