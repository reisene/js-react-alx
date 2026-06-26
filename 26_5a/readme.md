# Zadanie 59_2

## Treść

- Uzytkownik podaje dowolną ilość liczba całkowitych, które zapisywane są do tablicy.
- W chwili podana cyfry 0 – przerywamy pobieranie kolejnych liczb.
- Program ma za zadanie zliczyć jakie podał liczby i ile ich było np.:
- Wykorzystaj do tego celu mapę.

<pre>
2,4,6,2,8,7,4

2 – wystepuje 2x
4 – wystepuje 2x
6 – wystepuje 1x
8 – wystepuje 1x
7 – wystepuje 1x

</pre>

## Logika

## Wyjaśnienie

Stworzyłam w JS tablicę `tab`, w której przechowuję wpisane liczby, oraz zmienną `num` do obsługi okna `prompt`.

Zaimplementowałam pętlę `do...while`, w której pobieram dane od użytkownika. Dodałam warunek `if (num !== 0 && !isNaN(num))`, dzięki czemu odrzucam cyfrę `0` oraz niepoprawne wartości (np. tekst), a prawidłowe liczby wrzucam do tablicy za pomocą `tab.push(num)`. Pętla wykonuje się tak długo, aż użytkownik poda `0`.

Do zliczenia powtórzeń wykorzystałam obiekt `new Map()`. Przechodzę przez zebrane dane pętlą `for...of`, gdzie:

- wyrażeniem `(mapa.get(x) || 0) + 1` zwiększam licznik wystąpień o jeden,
- operator `|| 0` zapobiega błędom w przypadku, gdy liczba pojawia się w mapie po raz pierwszy i zwraca `undefined`.

Wynik końcowy składam w zmiennej `output`, iterując po gotowej mapie. Każdy wiersz owijam w element `<div>` z przypisanymi klasami `.liczba` oraz `.ile`, a następnie wygenerowaną zawartość wstrzykuję do elementu `#effect` przy użyciu `.innerHTML`.

W pliku `style.css` dla kontenera `#effect` zaimplementowałam układ `display: grid` oraz `grid-template-columns: repeat(3, 1fr)`. Wymusza to automatyczne i sztywne rozbicie wyników na dokładnie 3 równe kolumny, niezależnie od tego, ile liczb podał użytkownik.
