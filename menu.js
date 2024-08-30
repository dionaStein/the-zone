window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolar',window.scrollY > 0);
});

document.getElementById('showData').addEventListener('click', function() {
    const form = document.getElementById('curriculoForm');
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    let outputHtml = `
        <html>
        <head><title>Dados do Formulário</title></head>
        <body>
            <h1>Dados do Formulário</h1>
            <p><strong>Nome:</strong> ${formObject.nome}</p>
            <p><strong>Data de Nascimento:</strong> ${formObject.dataNascimento}</p>
            <p><strong>Sexo:</strong> ${formData.getAll('sexo').join(', ')}</p>
            <p><strong>Endereço:</strong> ${formObject.endereco}</p>
            <p><strong>CPF ou CNPJ:</strong> ${formObject.cpfCnpj}</p>
            <p><strong>Contato:</strong> ${formObject.contato}</p>
            <p><strong>E-mail:</strong> ${formObject.email}</p>
            <p><strong>Desejo:</strong> ${formData.getAll('desejo').join(', ')}</p>
            <button onclick="window.print()">Imprimir</button>
        </body>
        </html>
    `;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(outputHtml);
    newWindow.document.close();
});

