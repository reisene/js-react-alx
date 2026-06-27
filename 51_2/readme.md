# Zadanie 51_2

## Treść

Utwórz zmienne które będą przechowywać poniższe wartości:

<div align=center>
<pre>
zm1 = SUKCES zm2 = słownik
zm3 = występuje zm4 = jest
zm5 = WYŚIŁKIEM zm6 = Jedynym
zm7 = gdzie zm8 = miejscem
zm9 = przed
</pre>
</div>

W dalszej części kodu przypisz zmienne do zmiennych tak by odczytując kolejne wartości
zmiennych otrzymać tekst „Jedynym miejscem gdzie SUKCES występuje przed
WYŚIŁKIEM jest słownik”. Być może potrzebna Ci będzie dodatkowa zmienna pomocnicza.

## Wyjaśnienia

1. Utworzyłam pliki `index.html` i `script.js` dla rozdzielenia kodu (dla wyświetlania efektu w `body`).
    1. **HTML**
        1. W `head` dodałam `script src=./script.js` z opcją `defer` oraz `link` do zewnętrznego `style.css`.
        2. W `body` dodałam `div` z `id=effect` dla łatwiejszego znalezienia elementu.
    2. **JS**
        1. Przygotowałam zmienne:
            1. `zm1..zm9` wg kolejności w treści ćwiczenia
            2. zmienną pomocniczą `help`
            3. tablicę `tab` do wrzucenia po kolei zmiennych `zm1..zm9`
            4. zmienną `eff` dla uporzadkowania tablicy jako zdanie.
2. Kolejność działań
    1. Z pomocą zmiennej `help` uporzadkowałam zmienne `zm1..zm9` do kolejności w treści zadania.
    2. Zmienne wrzuciłam do tablicy `tab`. Podczas porządkowania zmiennych używałam tablicy do wyświetlania jej w konsoli (`console.log()`) dla ułatwienia.
    3. Stworzyłam pętlę `for`, by kręciła się tyle razy, ile ma rozmiar tablica (`for (let i = 0; i < tab.length; i++)`)
        1. Dla każdego obrotu pętli do zmiennej `eff` dodawałam wyraz (wartość `tab[i]`).
        2. dodałam warunek `if..else`, gdzie w przypadku gdy `i` jest mniejsze o 1 od wielkości tablicy dodałam do `eff` kropkę `'.'` (koniec zdania), w pozostałych przypadkach spację `' '`.
    4. Na koniec z pomocą `document.querySelector` wrzuciłam do `div` zawartość zmiennej `eff`.
    5. Style CSS przeniesione do zewnętrznego pliku `style.css` (wcześniej były inline w `<head>`).
