window.onload=function(){
    const $form = document.querySelector('#formulario');

    var sendForm = function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        document.querySelector('#correo').setAttribute('href',`mailto:adogtame@gmail.com?subject=${formData.get('asunto')} - ${formData.get('nombre')}&body=${formData.get('mensaje')}`);
        document.querySelector('#correo').click();
    }

    $form.addEventListener('submit', sendForm);

}
    
    
    
