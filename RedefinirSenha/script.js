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
