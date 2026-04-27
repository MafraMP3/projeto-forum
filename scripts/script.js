document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro');
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');

    form.addEventListener('submit', function(event) {
        // 1. Resetamos a validação customizada a cada tentativa
        inputUsuario.setCustomValidity("");
        inputSenha.setCustomValidity("");

        // 2. Verificamos os valores específicos
        const usuarioValido = inputUsuario.value === 'admin';
        const senhaValida = inputSenha.value === '1234';

        if (!usuarioValido) {
            inputUsuario.setCustomValidity("Usuário inválido");
        }
        
        if (!senhaValida) {
            inputSenha.setCustomValidity("Senha inválida");
        }

        // 3. Verifica se o formulário passou em todas as regras (HTML5 + Custom)
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert("Login realizado com sucesso!");
            // Aqui você poderia redirecionar: window.location.href = "home.html";
        }

        form.classList.add('was-validated');
    }, false);
});