let nome = document.querySelector('.name')
let email = document.querySelector('.email')
let senha = document.querySelector('.password-input')
  

const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
    }))
     fetch("http://omega.ceuma.edu.br:4000/api/usuarios/cadastro",{
     headers: {
         'Content-Type': 'application/json',
     },
     method:'POST',
     body: JSON.stringify({
         nome: nome.value,
         email: email.value,
         senha: senha.value,
     }),
     }).then((response)=>{
         console.log("Resultado: ", response)
     })
})


// const form = document.querySelector('.password-container')

// console.log(form)

// form.onsubmit = function(event) {
//     event.preventDefault()

// }


const togglePassword = document.getElementById('togglePassword')

togglePassword.addEventListener('click', function (e) {

    const password = document.querySelector('.password-input');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList = type === 'password' ? 'ph ph-eye-closed' : 'ph ph-eye';
});

