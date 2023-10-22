(()=>{
    const generateQRBtn = document.getElementById("generateQR")
    const textInput = document.getElementById("textInput")
    const resDiv = document.getElementById("qrCode")

    generateQRBtn.addEventListener("click", ()=>{
        const text = textInput.value

        fetch(`http://localhost:3000/generarQR?texto=${text}`)
        .then((response)=>response.text())
        .then((url)=>{
            resDiv.innerHTML=`<img src="${url}" alt="QR code image" />`
        })
        .catch((err)=>{
            console.error(err);
        })

    })
})()