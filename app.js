function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function encriptar() {
    var textoOriginal = document.getElementById('entrada').value.trim().toLowerCase();
    var textoEncriptado = '';

    if (textoOriginal === '') {
        document.getElementById('accion').innerText = '';
        document.getElementById('resultado').innerText = "Ningún mensaje fue encontrado";
        return;
    }

    for (var i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += textoOriginal[i];
                break;
        }
    }

    document.getElementById('accion').innerText = 'Texto encriptado:';
    document.getElementById('resultado').innerText = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById('entrada').value.trim().toLowerCase();
    var textoDesencriptado = '';

    if (textoEncriptado === '') {
        document.getElementById('accion').innerText = '';
        document.getElementById('resultado').innerText = "Ningún mensaje fue encontrado";
        return;
    }

    // Utilizamos expresiones regulares para buscar y reemplazar las cadenas encriptadas
    textoDesencriptado = textoEncriptado.replace(/enter/g, 'e')
                                       .replace(/imes/g, 'i')
                                       .replace(/ai/g, 'a')
                                       .replace(/ober/g, 'o')
                                       .replace(/ufat/g, 'u');

    document.getElementById('accion').innerText = 'Texto desencriptado:';
    document.getElementById('resultado').innerText = textoDesencriptado;
}