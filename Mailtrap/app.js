const nodemailer = require("nodemailer")

const trasporter = nodemailer.createTransport({    
    host:"sandbox.smtp.mailtrap.io",
    port: 465,
    secure: false,
    auth: {
        user:"2c75f0eedd7d04",
        pass:"8c624c0ca15ded",
    }
})

const message = {
    from: '"José Martínez" <kuda.marlan@gmail.com>',
    to:"martinez.landero.jose@gmail.com",
    subject: "Saludos otro yo",
    text: "Este es el link del catalogo: https://drive.google.com/file/d/1zQZOdDbQAcG0ozW0kGaEOOfve5eB7sZX/view?usp=sharing",
    html: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> <style> html{ background-image: url(https://i.pinimg.com/564x/92/f0/ea/92f0eaef0b36c6f909aead27000d663f.jpg); opacity: .8; } h1, p{ color: azure; text-align: center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; } h1{ font-size: 10vw; } p{ font-size: 5vw; } </style> </head> <body> <div> <h1>NOCHE DE: <br>PELICULAS DE TERROR</h1> <img src="https://i.pinimg.com/564x/9a/fb/72/9afb72782662bd3158edfdd67f816223.jpg" alt="" style="display: block; width: 50vw; margin: auto; border-radius: 20px;"> <p style="background-color: #454545; margin: 0; margin: 10vw;margin-top: 0px;margin-bottom: 0;border-radius: 25px;">Estas invitado este: <br>MARTES, 31 DE OCTUBRE <br>a las 7:00PM <br>578 SILET HILL LANE, CREEPY TOWN, <br>SPOOKY STATE 5689</P> </div> </body> </html>`
};
async function main(){
    try {
        const info = await trasporter.sendMail(message);
        console.log("Mensaje enviado ", info.messageId)
    } catch (err) {
        console.error("Erro: ", err)
    }
}

main()