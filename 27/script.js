function oblicz(a, b, c) {
    let result;
    let operation;

    switch (c) {
        case '+':
            result = a + b;
            operation = 'Suma';
            break;

        case '-':
            result = a - b;
            operation = 'Różnica';
            break;

        case '*':
            result = a * b;
            operation = 'Mnożenie';
            break;

        case '/':
            if (b === 0) {
                document.querySelector('#effect').innerHTML = '<span style="color: red; font-weight: 600;">Błąd: Nie można dzielić przez zero!</span>';
                return;
            }
            result = a / b;
            operation = 'Iloraz';
            break;

        case '%':
            if (b === 0) {
                document.querySelector('#effect').innerHTML = '<span style="color: red; font-weight: 600;">Błąd: Nie można obliczyć reszty z dzielenia przez zero!</span>';
                return;
            }
            result = a % b;
            operation = 'Reszta z dzielenia';
            break;
    }

    let output = `${operation} z liczb <span class="liczba">${a}</span> i <span class="liczba">${b}</span> to <span class="ile">${result}</span>`;

    document.querySelector('#effect').innerHTML = output;
}

function pobierzDane() {
    let a, b, c;
    let op = ['+', '-', '*', '/', '%'];

    do {
        a = Number(prompt('Podaj pierwszą liczbę:'));
        if (isNaN(a)) alert('Błąd! To nie jest poprawna liczba.');
    } while (isNaN(a));

    do {
        b = Number(prompt('Podaj drugą liczbę:'));
        if (isNaN(b)) alert('Błąd! To nie jest poprawna liczba.');
    } while (isNaN(b));

    do {
        c = prompt('Podaj rodzaj działania (+, -, *, /, %)');
        if (!op.includes(c)) {
            alert('Błąd! Niepoprawny znak działania. Wybierz jeden z poprwnych operatorów');
        }
    } while (!op.includes(c));

    oblicz(a, b, c);
}

document.querySelector('#start').onclick = pobierzDane;
