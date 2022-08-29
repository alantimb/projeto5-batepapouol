// array onde serão salvas as mensagens do servidor
let mensagensDoServidor = [];
let nomeDoUsuario;

// função para perguntar o nome do usuário ao entrar, colocá-lo na carta e enviá-lo ao servidor
function entrarNaSala() {
    // pede o nome do usuário ao entrar no site
    nomeDoUsuario = prompt("Digite aqui como quer ser chamado(a): ");
    // objeto que recebe o nome do usuário
    const nickname = {
        name: nomeDoUsuario
    };
    // requisição para envio do nome do usuário ao servidor, com recebimento da promessa dos dados e erros
    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nickname);
    promessa.then(buscarMensagens);
    promessa.catch(erroNaMensagem);

    return nomeDoUsuario;
}

// testar se o usuário ainda está logado - não consegui ir mto além pois o servidor não funciona
function testeDeConexao(nome) {
    if (nome) {
        const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nome);
        renderizarMensagens();
    }
}

const teste = testeDeConexao(nomeDoUsuario);

setInterval(teste, 5000);


// função-carta para pegar as mensagens do servidor
function buscarMensagens() {
    // requisição para buscar mensagens no servidor e enviá-las para renderização
    const promess = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promess.then(renderizarMensagens);
}


// função para receber as msgs já no site e renderizá-las no chat
function renderizarMensagens(msgs) {

    mensagensDoServidor = msgs.data;

    console.log(mensagensDoServidor);

    // renderizando as mensagens no chat
    const listaMensagens = document.querySelector('.messages');
    listaMensagens.innerHTML = '';

    const ultimaMensagem = document.querySelector(".message");

    for (let i = 0; i < (mensagensDoServidor.length); i++) {
        // mensagens públicas
        if (mensagensDoServidor[i].type === "message") {
            listaMensagens.innerHTML += `
        <li class="message">
        <span class="time">(${mensagensDoServidor[i].time}) &nbsp; </span> 
        <span class="from">${mensagensDoServidor[i].from}&nbsp;</span>
        <span>para&nbsp;</span>
        <span class="to">${mensagensDoServidor[i].to}:</span>
        <span class="text">&nbsp;${mensagensDoServidor[i].text}</span>
        </li>
        `;
        }
        // mensagens de entrada e saída
        else if (mensagensDoServidor[i].type === "status") {
            listaMensagens.innerHTML += `
        <li class="status">
        <span class="time">(${mensagensDoServidor[i].time}) &nbsp; </span> 
        <span class="from">${mensagensDoServidor[i].from}</span>
        <span class="text">&nbsp;${mensagensDoServidor[i].text}</span>
        </li>
        `;
        }
        // mensagens privadas
        else if (mensagensDoServidor[i].type === "private_message") {
            listaMensagens.innerHTML += `
        <li class="private_message">
        <span class="time">(${mensagensDoServidor[i].time}) &nbsp; </span> 
        <span class="from">${mensagensDoServidor[i].from}&nbsp;</span>
        <span>reservadamente para&nbsp;</span>
        <span class="to">${mensagensDoServidor[i].to}:</span>
        <span class="text">&nbsp;${mensagensDoServidor[i].text}</span>
        </li>
        `;
        }

        const ultimoElemento = document.querySelectorAll('.message');
        console.log(ultimoElemento);
        ultimoElemento[ultimoElemento.length - 1].scrollIntoView();


    }

}

// função para impedir a repetição de nome simultâneo no servidor
function erroNaMensagem(erro) {

    // erro da repetição de nome simultâneo no servidor
    if (erro.response.status === 400) {
        alert("Esse nome já existe, escolha outro!");
        entrarNaSala();
    }
}

// função para colocar a menssagem digitada na carta e enviá-la ao servidor
function enviarMensagem() {
    const mensagemDigitada = document.querySelector('.footer .input-message .typed-message');

    console.log(nomeDoUsuario);

    const mensagemEnviada = {
        from: nomeDoUsuario,
        to: "Todos",
        text: mensagemDigitada.value,
        type: "message"
    };

    // mensagemDigitada.innerHTML = mensagemEnviada.text;

    const promes = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', mensagemEnviada);
    promes.then(buscarMensagens);
    // promes.catch(buscarMensagens);

    // renderizarMensagens();
}
