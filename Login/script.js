const form = document.querySelector('form')

form.onsubmit = function(event) {
    event.preventDefault()

}

document.getElementById('togglePassword').addEventListener('click', function (e) {

    const password = document.querySelector('.password-input');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList = type === 'password' ? 'ph ph-eye-closed' : 'ph ph-eye';
});
let email = document.querySelector('.email')
let senha = document.querySelector('.password')

const btn = document.querySelector('#btn');

if (btn) {-
  btn.addEventListener('click', () => {
    const a = fetch('http://omega.ceuma.edu.br:4000/api/usuarios/login',{
    headers: {
        'Content-Type': 'application/json',
    },
    method:'GET',
    body: JSON.stringify({
        email: email.value,
        senha: senha.value,
    })
    }).then((response)=>{
        console.log("Resultado: ",response)
    })
  });
} else {
  console.error("Elemento .login-button não encontrado.");
}



