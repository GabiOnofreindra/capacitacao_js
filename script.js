document.getElementById('cpf').addEventListener('input', function(e) {
  var value = e.target.value;
  var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
						.replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
						.replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});

function cadastrarVeiculo() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const fabricante = document.getElementById('fabricante').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const ano = document.getElementById('ano').value.trim();
    const placa = document.getElementById('placa').value.trim();

    if (!nome || !cpf || !fabricante || !modelo || !ano || !placa) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert(`Veículo cadastrado com sucesso!\n\nNome do propriétário: ${nome} \n\nFabricante: ${fabricante}\nModelo: ${modelo}\nAno: ${ano}\nPlaca: ${placa}`);
    document.getElementById('formCadastro').reset();
}