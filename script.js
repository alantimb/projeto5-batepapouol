// função para perguntar o nome do usuário ao entrar
function entrarNaSala() {
    let nomeDoUsuario = prompt("Digite aqui como quer ser chamado(a): ");

    console.log(nomeDoUsuario);
}

function manipularMensagens() {
    // 1º OK ao entrar na sala, pedir nome do usuário 
    // 2º o nome deverá ser enviado para o servidor
    // 3º checar se o nome já consta no servidor
    // 4º se sim, pedir que o usuário digite outro
    // 5º o site deverá checar se o usuário está na sala a cada 5 seg
    // 6º se não estiver, deverá ser considerado que "Fulano saiu da sala"
    // 7º carregar as mensagens do servidos e eexibi-las no site
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

}