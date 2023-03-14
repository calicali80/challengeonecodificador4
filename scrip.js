const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    if(texArea.value == ""){
        copiar();
    }
    const textoEcriptado = encriptar(texArea.value);
    mensaje.value = textoEcriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    if(texArea.value == ""){
        copiar();
    }
    const textoEcriptado = desEncriptar(texArea.value);
    mensaje.value = textoEcriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desEncriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    if (mensaje.value != "")
    {
        texArea.value = mensaje.value;
        mensaje.value = "";
        mensaje.style.backgroundImage = "url('Imagenes/Muñeco.png')";
    }
   
}

function escuchar(){
    const mensaje = document.querySelector('.mensaje').value;
    console.log(mensaje);
    if ('speechSynthesis' in window){
        var utterance = new SpeechSynthesisUtterance(mensaje);
        speechSynthesis.speak(utterance);
    }
    else{
        alert('Tu navegador no soporta Speech Synthesis');
    }
}

let urlImagen = document.querySelector('.url-tiwtter');
urlImagen.addEventListener('click',()=>{
  window.location.href = 'https://twitter.com/bazan_jurupe';
});

let urlInstagram = document.querySelector('.url-instagram');
urlInstagram.addEventListener('click',()=>{
  window.location.href = 'https://www.instagram.com/calicali_80/';
});

let urlLinkedin = document.querySelector('.url-linkedin');
urlLinkedin.addEventListener('click',()=>{
  window.location.href = 'https://www.linkedin.com/in/carlos-gilberto-baz%C3%A1n-jurupe-a71467179/';
});

let urlGithup = document.querySelector('.url-githup');
urlGithup.addEventListener('click',()=>{
  window.location.href = 'https://github.com/calicali80';
});