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
            `<option>${data[i].designacao}</option>`
            tipos.innerHTML += op

        }
    })
    .catch()
}