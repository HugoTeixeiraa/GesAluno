function loadNavBar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar.html')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch((err)=>{
        alert('Ocorreu um erro')
    })
}