function sendForm() {
    if (document.valid_form.checkValidity()) {
        alert('Спасибо, Вaша форма отправлена');
    } else {
        alert('Пожалуйста, заполните все поля');
    }
}

document.getElementsByClassName('submit-btn')[0].onclick = sendForm;