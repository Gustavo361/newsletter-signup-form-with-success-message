const formulario = document.getElementById('email-form')
const emailInput = document.getElementById('email-subscription')
const errorMessage = document.getElementById('error-message')

formulario.onsubmit = function (e) {
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailValue)) {
        e.preventDefault()
        errorMessage.classList.add('active')
        emailInput.classList.add('error-box')
    } else {
        e.preventDefault()
        errorMessage.classList.remove('active')
        emailInput.classList.remove('error-box')
        window.location.href = 'success.html'
    }
}