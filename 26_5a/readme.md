# Zadanie 26_5a

## Treść

- Użytkownik podaje dowolną ilość liczb całkowitych, które zapisywane są do tablicy.
- W chwili podania cyfry 0 – przerywamy pobieranie kolejnych liczb.
- Program ma za zadanie zliczyć jakie podał liczby i ile ich było np.:
- Wykorzystaj do tego celu mapę.

<pre>
2,4,6,2,8,7,4

2 – wystépuje 2x
4 – wystépuje 2x
6 – wystépuje 1x
8 – wystépuje 1x
7 – wystépuje 1x

</pre>

## Logika

## Wyjaśnienie

Stworzyłam w JS tablicę `tab`, w której przechowuję wpisane liczby, oraz zmienną `num` do obsługi okna `prompt`.

Zaimplementowałam pętlę `do...while`, w której pobieram dane od użytkownika. Dodałam walidację: jeśli pole jest puste lub wartość nie jest liczbą całkowitą, alert informuje o błędzie z wielką literą po wykrzykniku (`Wpisz liczbę całkowitą.`). Prawidłowe liczby wrzucam do tablicy za pomocą `tab.push(num)`. Pętla wykonuje się tak długo, aż użytkownik poda `0`.

Do zliczenia powtórzeń wykorzystałam obiekt `new Map()`. Przechodzę przez zebrane dane pętlą `for...of`, gdzie:

- wyrażeniem `(mapa.get(x) || 0) + 1` zwiększam licznik wystąpień o jeden,
- operator `|| 0` zapobiega błędom w przypadku, gdy liczba pojawia się w mapie po raz pierwszy i zwraca `undefined`.

Wynik końcowy składam w zmiennej `output`, iterując po gotowej mapie. Każdy wiersz owijam w element `<div>` z przypisanymi klasami `.liczba` oraz `.ile`, a następnie wygenerowanej zawartości wstrzykuję do kontenera `#effect` przy użyciu `.innerHTML`.

W pliku `style.css` dla kontenera `#effect` zaimplementowałam układ `display: grid` oraz responsywne dopasowanie kolumn za pomocą `grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`. Pozwala to na automatyczne zachowanie 3 równych kolumn na standardowych ekranach monitorów, podczas gdy na węższych wyświetlaczach (np. telefonach) liczba kolumn automatycznie się zmniejsza, eliminując poziomy pasek przewijania strony.
