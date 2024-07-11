function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('horas').textContent = hours[0];
    document.getElementById('horas1').textContent = hours[1];
    document.getElementById('minutos').textContent = minutes[0];
    document.getElementById('minutos1').textContent = minutes[1];
}

setInterval(updateTime, 1000);
updateTime();
const slideDrag = document.getElementById('slideDrag');
const buttonButton = document.getElementById('buttonButton');
const buttonText = buttonButton.querySelector('p');
const message = document.getElementById('message');
let isDragging = false;

slideDrag.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const buttonRect = buttonButton.getBoundingClientRect();
        const slideRect = slideDrag.getBoundingClientRect();
        const offset = e.clientX - buttonRect.left - slideRect.width / 2;

        if (offset >= 0 && offset <= (buttonRect.width - slideRect.width)) {
          slideDrag.style.left = `${offset}px`;
        }
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;

        const buttonRect = buttonButton.getBoundingClientRect();
        const slideRect = slideDrag.getBoundingClientRect();

        if (slideRect.right >= buttonRect.right - 10) {
          buttonButton.classList.add('ok');
          buttonText.textContent = 'OK!';
          slideDrag.style.left = `${buttonRect.width - slideRect.width}px`;
            
          showMessage();

          setTimeout(() => {
            slideDrag.style.opacity = '0';
          }, 90); // Espera 500ms antes de começar a diminuir a opacidade

          setTimeout(() => {
            slideDrag.style.left = '0';
            slideDrag.style.opacity = '1';
            buttonButton.classList.remove('ok');
            buttonText.textContent = 'Bater ponto';
            hideMessage();
          }, 2000);
        } else {
          slideDrag.style.left = '0';
        }
      }
    });
    function showMessage() {
        message.style.display = 'block';
    }
  
    function hideMessage() {
        message.style.display = 'none';
    }