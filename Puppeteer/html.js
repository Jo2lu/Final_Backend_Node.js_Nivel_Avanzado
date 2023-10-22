const app={}
const misDatosPelis = datos=>{
    // console.log(datos);

    app.datosPelis = datos;

    let html = ""
    app.datosPelis.map(datosPelis=>{
        html += `
        <ul>
            <li><h2>${datosPelis.titulosDePelis}</h2></li>
        </ul>
        `
    })
    
    document.getElementById("pelisParaVerEnLaFiesta").innerHTML= html;
}

