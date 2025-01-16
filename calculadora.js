const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.buttons button');
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Alternância entre temas claro e escuro
// Quando o botão de tema é clicado, a classe 'dark-theme' é adicionada ou removida do body
// O ícone do botão também é alterado entre 'sun.png' e 'moon.png'


// adiciona evento de clique a todos os botões da calculadora
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent; // obtém o texto do botão clicado
        const lastChar = screen.value.slice(-1); // obtém o último caractere da tela

        // limpar a tela
        if (buttonValue === 'C') {
            screen.value = '';
        } 
        // apagar o último caractere
        else if (buttonValue === '⌫') {
            screen.value = screen.value.slice(0, -1);
        }
        // impedir que a expressão comece com operadores inválidos
        else if (['+', '-', '*', '/', '%'].includes(buttonValue) && screen.value === '') {
            return; // sai da função sem adicionar o operador
        }
        // evitar múltiplos operadores seguidos
        else if (['+', '-', '*', '/', '%'].includes(buttonValue) && ['+', '-', '*', '/', '%'].includes(lastChar)) {
            return; // sai da função sem adicionar o operador
        }
        // adicionar ponto decimal corretamente
        else if (buttonValue === '.') {
            const numbers = screen.value.split(/\+|\-|\*|\/|%/); // divide os números com base nos operadores
            const lastNumber = numbers[numbers.length - 1]; // obtém o último número digitado
            
            if (lastNumber.includes('.')) {
                return; // se o último número já tiver um ponto, não adiciona outro
            }
            screen.value += '.';
        }
        // avaliar a expressão ao clicar em '='
        else if (buttonValue === '=') {
            try {
                screen.value = eval(screen.value); // calcula a expressão
            } catch (e) {
                screen.value = 'Erro'; // se houver erro, exibe 'Erro'
            }
        }
        // adicionar números e operadores normalmente
        else {
            screen.value += buttonValue;
        }
    });
});
