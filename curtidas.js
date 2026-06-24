const feedJSON = require('./feed.json');


function curtir(feed, id) {
    const post = feed[0].id === id ? feed[0]
}

if (!post) {
    console.log("Post não encontrao.")
    return;
}

if(!post.publicado) {
    console.log("Não é possivel curtir um rascunho.");
    return;
}

post.metricas.curtidas++;
console.log(`Post de @${post.autor} agora tem ${post.metricas.curtidas} curtidas.`);