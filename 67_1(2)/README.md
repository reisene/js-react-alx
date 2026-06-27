# Zadanie 67_1 (vol. 2)

## Treść

- Zaprojektuj formularz wraz z obsługą podglądu informacji
- Jeśli dane pole nie zostało wypełnione, powinno to zostać zasygnalizowane stosownym komunikatem.

> [NOTE!]
> Jest to zadanie, które było wykonywanie już wcześniej ([67_1](../67_1/)). To jest tylko moje indywidualne podejście do tego zadania, gdzie od podstaw chcę taki formularz zrobić.

## Logika

Na początek przygotowałam szkielet HTML5 oraz stylowanie CSS, całkowicie rezygnując z tabel i wymuszania układu znacznikami `<br />`.

- **Układ dwukolumnowy:** Kontener `.wrapper` używa Flexboxa, dzieląc stronę na `<aside>` (formularz po lewej) i `<main>` (podsumowanie danych po prawej). Pola formularza (`.form-field`) układają się pionowo dzięki `flex-direction: column`.
- **Powiązanie labeli:** Wszystkie znaczniki `<label>` są spięte z inputami za pomocą atrybutu `for`. Pola w formularzu dostały przedrostek `id="reg-..."`, żeby ich identyfikatory nie dublowały się z polami w podsumowaniu.
- **Kontenery na błędy:** Pod polami wymagającymi walidacji znajdują się znaczniki `<small class="error-msg">`. Mają zdefiniowaną stałą minimalną wysokość w CSS, co zapobiegnie "skakaniu" formularza po wstrzyknięciu komunikatów o błędach.
- **Efekt maskowania haseł:** Pola haseł w podsumowaniu mają klasę `.masked-password`. Tekst jest domyślnie ukryty pod bladym, szarym paskiem (`color: transparent`). Najechanie kursorem (`:hover`) płynnie go odsłania. Dodatkowo `user-select: none` blokuje zaznaczanie tekstu, gdy hasło jest zakryte.
