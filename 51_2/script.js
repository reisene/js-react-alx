let zm1 = 'SUKCES';
let zm2 = 'słownik';
let zm3 = 'występuje';
let zm4 = 'jest';
let zm5 = 'WYSIŁKIEM';
let zm6 = 'Jedynym';
let zm7 = 'gdzie';
let zm8 = 'miejscem';
let zm9 = 'przed';

let help;

help = zm1;
zm1 = zm6;
zm6 = zm9;
zm9 = zm2;
zm2 = zm8;
zm8 = zm4;
zm4 = help;

help = zm3;
zm3 = zm7;
zm7 = zm5;
zm5 = help;

const tab = [zm1, zm2, zm3, zm4, zm5, zm6, zm7, zm8, zm9];
// console.log(tab);

let eff = '';
for (let i = 0; i < tab.length; i++) {
    eff += tab[i]; // Dodaj wyraz

    if (i === tab.length - 1) {
        eff += '.'; // Jeśli to ostatni wyraz, dodaj kropkę
    } else {
        eff += ' '; // W przeciwnym razie dodaj spację
    }
}
document.querySelector('#effect').innerHTML = eff;
