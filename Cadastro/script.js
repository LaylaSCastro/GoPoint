let nome = document.querySelector('.name')
let email = document.querySelector('.email')
let senha = document.querySelector('.password')
  

const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
  fetch('http://omega.ceuma.edu.br:4000/api/usuarios/cadastro',{
    headers: {
        'Content-Type': 'application/json',
    },
    method:'POST',
    body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
    })
    }).then((response)=>{
        console.log("Resultado: ",response)
    })
})