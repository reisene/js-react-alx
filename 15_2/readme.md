# Zadanie 15_2

## Treść

- Zaprojektuj algorytm obliczania silni.
- Użytkownik podaje dowolną liczbę całkowitą > 1
- Zaprojektuj kod (pętlę), która policzy wartość silni dla podanej liczby.

<pre>
Jak wygląda liczenie silni dla 5:
1 * 2 * 3 * 4 * 5 = 120   <!-- 120 jest to wartość silni dla 5 -->
</pre>

## Wyjaśnienie

Stworzyłam w JS 2 zmienne - `n`, gdzie przypisuję liczbę wprowadzoną przez użytkownika w formularzu, oraz `result` , gdzie obliczam silnię.

Jako że silnię oblicza się sposobem:
$$n! = 1 \times 2 \times 3 \times \dots \times n$$
Zaimplementowałam prostą pętlę `for`, gdzie:

- `result` startuje od $1$
- pętla wykonuje mnożenie `result *= i` dla każdego `i` od $1$ do $n$.

Wynik jest przedstawiany w konsoli oraz w `span` obok formularza.

Dodałam również funkcję `prevent(event)`, która w przypadku naciśnięcia przycisku `Enter`, zapobiega automatycznym próbom "wysyłania" formularza przez przeglądarkę.
