function validarformulario() {
    const usuario=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if( usuario =='usuario@gmail.com' && password ==123456){
        alert('ingeso correcto');
        return true;
    }else{
        alert('Usuario o contraseña incorrecta');
        return false;
    }


}