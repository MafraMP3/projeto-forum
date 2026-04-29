document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro');
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');

    form.addEventListener('submit', function(event) {
        // Evita que o formulário recarregue a página antes da nossa lógica
        event.preventDefault();
        event.stopPropagation();

        // Resetamos a validação customizada
        inputUsuario.setCustomValidity("");
        inputSenha.setCustomValidity("");


        // Verificamos os valores específicos
        const usuarioValido = inputUsuario.value === 'admin';
        const senhaValida = inputSenha.value === '1234';

        if (!usuarioValido) {
            inputUsuario.setCustomValidity("Usuário inválido");
        }
        
        if (!senhaValida) {
            inputSenha.setCustomValidity("Senha inválida");
        }

        // Se o formulário passar em todas as regras (admin/1234)
        if (form.checkValidity()) {
            // REDIRECIONAMENTO AQUI:
            window.location.href = "home.html"; // Altere para o nome da sua página de destino
        } else {
            // Se estiver errado, aplica as cores de erro do Bootstrap
            form.classList.add('was-validated');
        }

    }, false);
});