let data = new Map();

document.querySelector('input[type="button"]').onclick = function () {
    data.clear();

    data.set('login', document.querySelector('input[name=login]').value.trim());
    data.set('password', document.querySelector('input[name=password]').value);
    data.set('password_confirm', document.querySelector('input[name=password_confirm]').value);
    data.set('imie', document.querySelector('input[name=imie]').value.trim());
    data.set('email', document.querySelector('input[name=email]').value.trim());
    data.set('telefon', document.querySelector('input[name=telefon]').value.trim());
    data.set('zrodlo', document.querySelector('select[name=zrodlo]').value);
    data.set('uwagi', document.querySelector('textarea[name=uwagi]').value.trim());

    let newsletterRadio = document.querySelector('input[name=newsletter]:checked');
    data.set('newsletter', newsletterRadio ? newsletterRadio.value : '');

    let regulaminCheck = document.querySelector('input[name=regulamin]');
    data.set('regulamin', regulaminCheck.checked ? regulaminCheck.value : '');

    for (let x of data.keys()) {
        let out = document.querySelector(`#${x}`);
        if (out) out.innerHTML = '-';
    }

    if (validate() === true) {
        for (let x of data.keys()) {
            let outElement = document.querySelector(`#${x}`);
            if (outElement) {
                outElement.innerHTML = data.get(x) || '-';
            }
        }
    }
};

function validate() {
    let ok = true;

    // Czyszczenie komunikatów o błędach ze wszystkich tagów <small>
    let errElements = document.querySelectorAll('.error-msg');
    for (let x of errElements) x.innerHTML = '';

    // WALIDACJA WARUNKÓW

    let err = 'Błąd:';

    // 1. Login (wymagany, >=3 znaki)
    if (data.get('login') === '') {
        document.querySelector('#error_login').innerHTML = `${err} Login jest wymagany.`;
        ok = false;
    } else if (data.get('login').length < 3) {
        document.querySelector('#error_login').innerHTML = `${err} Login musi mieć więcej niż 3 znaki.`;
        ok = false;
    }

    // 2. Hasło (wymagane, >5 znaków)
    if (data.get('password') === '') {
        document.querySelector('#error_password').innerHTML = `${err} Hasło jest wymagane.`;
        ok = false;
    } else if (data.get('password').length <= 5) {
        document.querySelector('#error_password').innerHTML = `${err} Hasło musi mieć więcej niż 5 znaków.`;
        ok = false;
    }

    // 3. Powtórz hasło (wymagane, identyczne z hasłem)
    if (data.get('password_confirm') === '') {
        document.querySelector('#error_password_confirm').innerHTML = `${err} Potwierdzenie hasła jest wymagane.`;
        ok = false;
    } else if (data.get('password') !== data.get('password_confirm')) {
        document.querySelector('#error_password_confirm').innerHTML = `${err} Hasła nie są identyczne.`;
        ok = false;
    }

    // 4. Imię (wymagane)
    if (data.get('imie') === '') {
        document.querySelector('#error_imie').innerHTML = `${err} Imię jest wymagane.`;
        ok = false;
    }

    // 5. Email (wymagane, musi zawierać znak @)
    if (data.get('email') === '') {
        document.querySelector('#error_email').innerHTML = `${err} Email jest wymagany.`;
        ok = false;
    } else if (!data.get('email').includes('@')) {
        document.querySelector('#error_email').innerHTML = `${err} Adres email musi zawierać znak @.`;
        ok = false;
    }

    // 6. Telefon (opcjonalny, ale jeśli wpisany, musi zawierać tylko cyfry)
    if (data.get('telefon') !== '') {
        let tylkoCyfry = /^[0-9]+$/;
        if (!tylkoCyfry.test(data.get('telefon'))) {
            document.querySelector('#error_telefon').innerHTML = `${err} Numer telefonu może zawierać tylko cyfry.`;
            ok = false;
        }
    }

    // 7. Skąd się dowiedział (wymagany select)
    if (data.get('zrodlo') === '') {
        document.querySelector('#error_zrodlo').innerHTML = `${err} Musisz wybrać jedną z opcji.`;
        ok = false;
    }

    // 8. Newsletter (wymagany radio)
    if (data.get('newsletter') === '') {
        document.querySelector('#error_newsletter').innerHTML = `${err} Wybierz Tak lub Nie.`;
        ok = false;
    }

    // 9. Checkbox / Regulamin (wymagany)
    if (data.get('regulamin') === '') {
        document.querySelector('#error_regulamin').innerHTML = `${err} Musisz zaakceptować regulamin.`;
        ok = false;
    }

    // 10. Textarea / Uwagi (opcjonalne - brak walidacji)

    return ok;
}
