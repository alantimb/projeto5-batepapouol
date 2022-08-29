// FUNCIONAMENTO
// 1º OK ao entrar na sala, pedir nome do usuário 
// 2º OK o nome deverá ser enviado para o servidor
// 3º OK checar se o nome já consta no servidor
// 4º OK se sim, pedir que o usuário digite outro
// 5º o site deverá checar se o usuário está na sala a cada 5 seg
// 6º se não estiver, deverá ser considerado que "Fulano saiu da sala"
// 7º carregar as mensagens do servidos e exibi-las no site
// 8º atualizar o site a cada 3 seg para re-carregar as mensagens do servidor
// 9º chat com rolagem automática por padrão 
// 10º OK mensagens com "entrou na sala" ou "saiu da sala" devem ter fundo cinza
// 11º OK mensagens reservadas (pvds) devem ter fundo rosa
// 12º OK mensagens normais devem ter fundo branco
// 13º o site deve checar o nome do usuário antes de mostrar ao mesmo as msgs reservadas
// 14º a mensagem a ser enviada deve ir para o servidor
// 15º se responder com sucesso, as msgs do servidor devem ser re-obtidas e o chat atualizado
// 16º se responder com erro, o usuário não está mais na sala, então a págna deve att para pedir nome
// 17º no envio, deve ser informado remetente, destinatário e se a msg é reservada
// 18º se não der para escolher dest e reserv, enviar somente como pública e para todos


// função para perguntar o nome do usuário ao entrar e enviá-lo ao servidor
function entrarNaSala() {
    let nomeDoUsuario = prompt("Digite aqui como quer ser chamado(a): ");

    console.log(nomeDoUsuario);

    const nickname = {
        name: nomeDoUsuario
    };

    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nickname);
    promessa.then(receberMensagens);
    promessa.catch(mensagemDeErro);

    return nomeDoUsuario;
}

// função para recolher as msgs no servidor e renderizá-las no chat
function receberMensagens() {
    console.log("tá indo");
    const promes = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    console.log("n tá indo");
    promes.then();

    // ainda vai entrar a renderização

}

// função para impedir a repetição de nome simultâneo no servidor
function mensagemDeErro(erro) {

    // erro da repetição de nome simultâneo no servidor
    if (erro.response.status === 400) {
        alert("Esse nome já existe, escolha outro!");
        entrarNaSala();
    }
    // qndo não há mais erros, o programa avança para o recebimento de msgs
    else if (erro.response.status === 200) {
        receberMensagens();
    }
}



// function testeDeConexao() {

//     const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nomeDoUsuario);
//     promessa.then(receberMensagens)
// }





// function enviarMensagem() {
//     // document.querselector para o input

//     const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages');
//     promessa.then();
// }