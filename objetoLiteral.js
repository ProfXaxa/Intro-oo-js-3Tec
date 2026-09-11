const user = {
    nome: "Xaxa",
    email: "xaxa@xaxa.com",
    nascimento: "1981/09/18",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()

const exibir = function(){
    console.log(this)
}
exibir()