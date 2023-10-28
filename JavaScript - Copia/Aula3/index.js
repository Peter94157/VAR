function incluir() {

    //variaveis
    let nomeUsuario = document.getElementById('inputNome').value
    let EmailUsuario = document.getElementById('inputEmail').value
    let IdadeUsuario = document.getElementById('inputIdade').value
    let CEPUsuario = document.getElementById('inputCEP').value
    let EnderecoUsuario = document.getElementById('inputEndereco').value


//Verificando se o campo esta vazio 

    if (nomeUsuario != "") {
        let tabela = document.getElementById('TabelaUser')
        let Numero_llinha = tabela.rows.length
        let linha = tabela.insertRow(Numero_llinha)
        let campo1 = linha.insertCell(0)
        let campo2 = linha.insertCell(1)
        let campo3 = linha.insertCell(2)
        let campo4 = linha.insertCell(3)
        let campo5 = linha.insertCell(4)
        let campo6 = linha.insertCell(5)


        //Inoutando os dados na tabela 
        campo1.innerHTML = nomeUsuario
        campo2.innerHTML = EmailUsuario
        campo3.innerHTML = IdadeUsuario
        campo4.innerHTML = CEPUsuario
        campo5.innerHTML = EnderecoUsuario
        campo6.innerHTML = "<button class='btn btn-danger' onclick='removerLinha(this)'>Remover</button>"

        //Limpando os campos preenchidos 
        document.getElementById('inputNome').value = ""
        document.getElementById('inputEmail').value = ""
        document.getElementById('inputIdade').value = ""
        document.getElementById('inputCEP').value = ""
        document.getElementById('inputEndereco').value = ""


    } else {
        let cep = document.getElementById('inputCEP').value
        alert('Nome inválido ' + cep)
    }
}


function pesquisaCep(cep){
    let cepFinal=cep
    let validacep= /^[0-9]{8}$/
    

if(cepFinal!=""){
    if(validacep.test(cepFinal)){
        let script = document.createElement('script')
        script.src='https://viacep.com.br/ws/' + cepFinal + '/json/?callback=callback_name'
        document.body.appendChild(script)
    }else{
        alert('Cep invalido!')
        document.getElementById('inputEndereco').value=""
    }
}else{
    alert('CEP vazio')
}

}

function callback_name(objetocep){
    
    if(!('erro' in objetocep)){
        document.getElementById('inputEndereco').value=(objetocep.logradouro)+' , '+(objetocep.localidade)+' - '+(objetocep.uf)
    }else {

        alert('CEP nao encontrado ')
    }
}


function removerLinha(linha) {

    let i = linha.parentNode.parentNode.rowIndex
    document.getElementById('TabelaUser').deleteRow(i)
}