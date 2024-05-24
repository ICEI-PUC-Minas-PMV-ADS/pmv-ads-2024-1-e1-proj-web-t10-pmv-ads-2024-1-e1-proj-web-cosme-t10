

const inputPesquisa = document.getElementById('input-pesquisa');

function sanitizarIngredientes(inputValue) {
    return inputValue.split(',').map(ingrediente => ingrediente.trim().toLowerCase());
}

function criarDropdown(sugestoesAutocomplete, ultimoIngrediente) {
    const dropdown = document.createElement('span');
    dropdown.id = 'autocomplete-dropdown';
    dropdown.style.width = window.getComputedStyle(inputPesquisa).width;

    const ul = document.createElement('ul');

    sugestoesAutocomplete.forEach(sugestao => {
        const li = document.createElement('li');

        li.innerHTML = sugestao.replace(new RegExp(ultimoIngrediente, 'g'),
            `<strong>${ultimoIngrediente}</strong>`);
        li.addEventListener(('click'), autocompleteClickHandler);

        ul.appendChild(li);
    });

    dropdown.appendChild(ul);

    const form = document.querySelector('.barra-pesquisa-conteiner');
    form.appendChild(dropdown);
}

function removeDropdown() {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
}

function autocompleteClickHandler(event) {
    const ingredientesInput = sanitizarIngredientes(inputPesquisa.value);

    ingredientesInput[ingredientesInput.length - 1] = event.currentTarget.textContent;

    inputPesquisa.value = ingredientesInput.join(', ');

    inputPesquisa.value += ', ';

    removeDropdown();
}

inputPesquisa.addEventListener('input', function (event) {
    const valorInputAtual = event.target.value;
    const nomesIngredientes = listaDeIngredientes.map(ingredient => ingredient.nome.toLowerCase());

    const ingredientesInput = sanitizarIngredientes(valorInputAtual);

    const ultimoIngrediente = ingredientesInput[ingredientesInput.length - 1];

    removeDropdown();

    if (ultimoIngrediente !== '') {
        const sugestoesAutocomplete = nomesIngredientes.filter(nomeIngrediente =>
            nomeIngrediente.includes(ultimoIngrediente) &&
            !ingredientesInput.includes(nomeIngrediente)
        );

        if (sugestoesAutocomplete.length > 0) {
            criarDropdown(sugestoesAutocomplete, ultimoIngrediente);
        }
    }
});