const pElement = document.getElementById('Encriptador_llegada')



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function Encriptador_Click() {
    let escritura = String(document.getElementById('Encriptador_E').value);
    const regex = /[^a-z0-9\s]/;
    if (regex.test(escritura) || /[A-Z]/.test(escritura)) {
        asignarTextoElemento("Encriptador_llegada","Error: No se permiten letras mayúsculas ni caracteres especiales.");
    } else {
        asignarTextoElemento('Encriptador_llegada', escritura.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat"));
    }
    if(onclick = 'Encriptador_Click()'){
        pElement.classList.remove('Texto_Encriptado_Des');
        pElement.classList.add('new-Texto_Encriptado_Des');
        document.getElementById('CopiarTexto').removeAttribute('disabled');
        document.getElementById('CopiarTexto').removeAttribute('hidden');
        } else {}
}


function Desencriptar_Click() {
    let escritura = String(document.getElementById('Encriptador_E').value);
    asignarTextoElemento('Encriptador_llegada', escritura.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u"));
    if(onclick = 'Desencriptador_Click()'){
        pElement.classList.remove('Texto_Encriptado_Des');
        pElement.classList.add('new-Texto_Encriptado_Des');
        document.getElementById('CopiarTexto').removeAttribute('disabled');
        document.getElementById('CopiarTexto').removeAttribute('hidden');
    } else {}
}   

function Copiar() {
    let escritura = String(document.getElementById('Encriptador_llegada').innerHTML);
    navigator.clipboard.writeText(escritura);
}

function parrafo(){
    var parrafo1 = document.getElementById('Encriptador_llegada');
    var imagen = document.createElement('img');
    imagen.src = 'Muñeco.png';
    imagen.alt = 'Muñeco de lupa';
    imagen.className = 'LogoConLupa';
    parrafo1.appendChild(imagen)

    var texto = document.createTextNode('Ningún mensaje fue encontrado');
    Encriptador_llegada.appendChild(texto);
}
parrafo()
