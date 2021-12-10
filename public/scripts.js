function init(){
   getNavbar()
   getTipo()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch((err)=>{
        alert('Ocorreu um erro')
    })
}

function getTipo(){
    const tipos = document.getElementById('tipo')
    fetch('http://localhost:3000/formdata')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.length; i++){
            const op = 
            `<option value = "${data[i].idtipos}">${data[i].designacao}</option>`
            tipos.innerHTML += op

        }
    })
    .catch()
}

function mostrarAlunos(){
    let nome=document.getElementById('nome_aluno').value
    if(nome==''){
        alert('O campo não pode estar vazio')
    }

    let morada=document.getElementById('morada_rua').value
    if(morada==''){
        alert('O campo não pode estar vazio')
    }

    let morada_num=document.getElementById('morada_num').value
    if(morada_num==''){
        alert('O campo não pode estar vazio')
    }

    let dnasc=document.getElementById('dnasc').value
    if(dnasc==''){
        alert('O campo não pode estar vazio')
    } 

    let telem=document.getElementById('telem').value
    if(telem==''){
        alert('O campo não pode estar vazio')
    }else{
        let i
        for(let i=0; i<telem.length;i++){
            if(telem.charAt(i).isNaN){
                let c = telem.charAt(i)
                console.log(c)
                if(isNaN(c)){
                    console.log('número inválido')
                    break
                }
            }

        }
        console.log(i)
        if(i==telem.length){
            const telemInt = parseInt(telem)
            console.log(telemInt)
        }

    }

    let email=document.getElementById('email').value
    if(email==''){
        alert('O campo não pode estar vazio')
    }

    let tipo=document.getElementById('tipo').value
    if(tipo=='')
        alert('O campo não pode estar vazio')
    else
        console.log(tipo)
    
    //criar objeto com os daods recolhidos no form
    let dadosutilizador={
        nomeutilizador : nome,
        moradarua : morada,
        moradanumero : morada_num,
        datanascimento : dnasc,
        telemovel : telem,
        email : email,
        idtipo: tipo
    }



    //criar um JSON do objeto
    let jsonDados = JSON.stringify(dadosutilizador)

    //preparar o pedido
    const options = {
        method: 'POST',
        header: {
            'Content-type' : 'applicatoin/json'
        },
        body: jsonDados
    }

    fetch('http://localhost:3000/utilizador', options)
    .then(res => res.json())
    .then(response => alert(response))
    .catch((err) => {
        alert('ocorreu um erro com o pedido')
    })
}