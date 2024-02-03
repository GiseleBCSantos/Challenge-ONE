function criptografar() {
    let texto_para_criptografar = document.getElementById('textoinserido').value;
    let novo_texto = ''


    let tela_sem_resposta = document.getElementById('sem-texto')
    let tela_com_resposta = document.getElementById('com-texto')
    let tela_erro = document.getElementById('texto-inserido-invalido')


    if (texto_para_criptografar.length > 0) {
        if (possuiMaiusculas(texto_para_criptografar) || possuiAcento(texto_para_criptografar) || possuiNumeros(texto_para_criptografar)){

            tela_sem_resposta.style.display = 'none';
            tela_erro.style.display = 'flex'
            tela_com_resposta.style.display = 'none'
        }

        else {
            for (i = 0; i < texto_para_criptografar.length; i++) {
                switch (texto_para_criptografar[i]) {
                    case "a":
                        novo_texto += 'ai'
                        break
                    case "e":
                        novo_texto += 'enter'
                        break
                    case "i":
                        novo_texto += 'imes'
                        break
                    case "o":
                        novo_texto += 'ober'
                        break
                    case "u":
                        novo_texto += 'ufat'
                    default:
                        novo_texto += texto_para_criptografar[i]
                        break
                }
            }

            console.log(novo_texto)


            tela_sem_resposta.style.display = 'none';
            tela_com_resposta.style.display = 'block'
            tela_erro.style.display = 'none'


            let paragrafo_com_traducao = document.getElementById('texto-traduzido');

            paragrafo_com_traducao.textContent = novo_texto;
        }
    }

    else {
        tela_sem_resposta.style.display = 'block';
        tela_com_resposta.style.display = 'none'
        tela_erro.style.display = 'none'
    }

}




function descriptografar() {
    let texto_para_descriptografar = document.getElementById('textoinserido').value;
    let novo_texto = ''

    let tela_sem_resposta = document.getElementById('sem-texto')
    let tela_com_resposta = document.getElementById('com-texto')
    let tela_erro = document.getElementById('texto-inserido-invalido')


    if (texto_para_descriptografar.length > 0) {
        if (possuiMaiusculas(texto_para_descriptografar) || possuiAcento(texto_para_descriptografar) || possuiNumeros(texto_para_descriptografar)) {

            tela_sem_resposta.style.display = 'none';
            tela_com_resposta.style.display = 'none'
            tela_erro.style.display = 'flex'
        }
        else {
            for (i = 0; i < texto_para_descriptografar.length; i++) {
                switch (texto_para_descriptografar[i]) {
                    case "a":
                        novo_texto += 'a'
                        i += 1
                        break
                    case "e":
                        novo_texto += 'e'
                        i += 4
                        break
                    case "i":
                        novo_texto += 'i'
                        i += 3
                        break
                    case "o":
                        novo_texto += 'o'
                        i += 3
                        break
                    case "u":
                        novo_texto += 'u'
                        i += 3
                        break
                    default:
                        novo_texto += texto_para_descriptografar[i]
                        break
                }
            }



            tela_sem_resposta.style.display = 'none';
            tela_com_resposta.style.display = 'block'

            let paragrafo_com_traducao = document.getElementById('texto-traduzido');

            paragrafo_com_traducao.textContent = novo_texto;
        }

    }
    else {
        tela_sem_resposta.style.display = 'block';
        tela_com_resposta.style.display = 'none'
        tela_erro.style.display = 'none'

    }
}

function copiar() {
    let texto_para_copiar = document.getElementById('texto-traduzido');

    let intervaloSelecao = document.createRange();
    intervaloSelecao.selectNode(texto_para_copiar);

    let selecaoAtual = window.getSelection();
    selecaoAtual.removeAllRanges();
    selecaoAtual.addRange(intervaloSelecao);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
    }

    selecaoAtual.removeAllRanges();
}




function possuiMaiusculas(text) {
    return /[A-Z]/.test(text)
}

function possuiAcento(text) {
    return /[áàâãéèêíïóôõöúç]/i.test(text);
}

function possuiNumeros(text){
    return /[0-9]/.test(text)
}






























