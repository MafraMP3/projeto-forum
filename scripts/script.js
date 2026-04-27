document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro');
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');

    form.addEventListener('submit', function(event) {

        inputUsuario.setCustomValidity("");
        inputSenha.setCustomValidity("");

        const usuarioValido = inputUsuario.value === 'admin';
        const senhaValida = inputSenha.value === '1234';

        if (!usuarioValido) {
            inputUsuario.setCustomValidity("Usuário inválido");
        }
        
        if (!senhaValida) {
            inputSenha.setCustomValidity("Senha inválida");
        }


        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert("Login realizado com sucesso!");

        }

        form.classList.add('was-validated');
    }, false);
});