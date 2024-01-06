Readme.txt

------Informacje projektowe-----------
Projekt został przygotowany we współpracy:
Patryk Szymański
Mateusz Wietrak

Podział obowiązków był następujący:
Patryk był głównym grafikiem oraz designer'em aplikacji. Wszystkie ilustracje, UX/UI oraz pomysł na aplikację przechodziły przez Patryka i On finalnie je akceptował.
Mateusz był głównym developerem aplikacji. Oczywiście rozwiązań w postaci kodu szukaliśmy wspólnie, ale to przez Mateusza kod ostatecznie był weryfikowany i sprawdzany.
--------------------------------------



-----Informacje o aplikacji----------
Aplikacja jest pierwszą wersją projektu który nazywa się CurrencyExchange. W aktualnym etapie pozwala na
*wyświetlanie informacji o kursie walut z PLN na 5 najpopularniejszych (Naszym zdaniem) walut
*wyświetlanie Naszego Salda. Mamy informację o tym ile posiadamy waluty w PLN oraz w pozostałych dostępnych w aplikacji nominałach
*wyświetlanie Naszego Profilu. Możemy podejrzeć dane Naszego konta oraz za pomocą geolokalizacji sprawdzić gdzie się aktualnie znajdujemy (jeżeli zezwolimy na dostęp do Lokalizacji).
*otrzymywać powiadomienia Push z Serwera Notyfikacji (jeżeli zezwolimy na dostęp do Notyfikacji).

Docelowo projekt zostanie rozbudowany np o:
*automatyczne powiadomienia Push jeżeli kurs z PLN na interesującą Nas walute osiągnie konkretną wartość
*za pomocą geolokalizacji wskazanie waluty która obowiązuje w danym regionie
*wymianę waluty
*sprawdzenia historycznych kursów walut oraz historycznych transakcji
--------------------------------------



-----Informacje o plikach----------
Aplikacja składa się z następujących plików:
*root directory:
    index.html --> Main Page aplikacji 
    profile.html --> Profile Page aplikacji
    saldo.html --> Saldo Page aplikacji
    manifest.json --> Plik Manifestu pozwalający na stworzenie PWA z Naszej Aplikacji
    sw.js --> Skrypt Service Worker'a
    Readme.txt --> Ten plik :P

*img directory:
    Pozwolę Sobie nie wypisywać wszystkich nazw plików :D
    Folder zawiera wszelkie grafiki używane w aplikacji.
    
*script directory:
    main.js --> plik zawierający wszystkie skrypty wykorzystywane w aplikacji.
    Na ten moment znajduje się w nim tylko funkcja od Geolokalizacji
    
*style directory:
    Po trzy pliki stylów dla każdej ze stron Naszej aplikacji.
    Pliki globals*.css to style wykorzystywane na całej danej stronie
    Pliki styleguide*.css to stworzone style np. skonfigurowane konkretnie czcionki
    Pliki style*.css to główne pliki stylu gdzie konfigurujemy style po klasach
--------------------------------------



-----Informacje o PWA----------

    -----Manifest--------
Zgodnie z zaleceniami z Naszej aplikacji została utworzona aplikacja PWA, dzięki plikowi manifest.json.

    -----Hostowanie--------
Nasza aplikacja jest Hostowana na serwerze Surge.Sh. Do poprawnego działania wszystkich funkcji musi używać szyfrowania SSL co oznacza, że musi być na HTTPS a nie HTTP.
Celem zhostowania aplikacji należy posiadać konto na Surge.Sh, zainstalowaną aplikację Node.js oraz wgrany dodatek Surge. Następnie użyć komendy "surge --domain https://[Twójadres].surge.sh" w lokalizacji z plikami.
Aktualnie aplikacja znajduje się pod linkiem "https://AEHPWAPM.surge.sh" (AEH - nazwa uczelni | PWA - nazwa zajęć | PM - Patryk Mateusz Twórcy Aplikacji).

    -----Wydajność, Optymalizacja--------
Nasza aplikacja jest sprawdzona za pomocą dodatku Lightouse i osiąga wyniki w:
Performance powyżej 75%
Accessibility 98% - 100%
Best Practices 95% - 100%
SEO 92% - 100%
PWA -> TRUE (Installable, Optimized)

    -----Natywne funkcje--------
Nasza aplikacja korzysta z dwóch natywnych funkcji urządzeń mobilnych:
*Geolokalizacja --> pozwala nam sprawdzić Nasze koordynaty i tworzy odnośnik, aby pokazać Nas na mapach. W przyszłości będzie pokazywać obowiązując walute w kraju którym się znajdujemy.
*Push Notification --> pozwala na otrzymywanie od aplikacji powiadomień.

    -----Service Worker--------
Nasza aplikacja posiada zaimplementowany Service Worker w formacie First Internet then Cache.
*Aplikacja PWA po pierwszym uruchomieniu z Internetem pobierze wskazane pliki do Naszego Cache.
*Każde następne odpalenie aplikacji będzie działało na zasadzie:
    Sprawdz zasoby z Internetu
        --> wyświetl
        --> brak dostępu? Sprawdź zasoby z Cache
            --> wyświetl
            --> brak dostępu? Wyświetl monit o tym, że jesteś Offline
            
    -----Responsywnośc, Flow--------
Nasza aplikacja została utworzono stricte pod urządzenia mobilne. Oznacza to, że na stronie internetowej wyświetla się w kształtach urządzenia mobilnego.
PWA zostało sprawdzone zarówno na urządzeniach z systemem Windows, Android jak i iOS. Na każdym z urządzeń możliwe jest pobranie aplikacji i działanie wszystkich funkcji. 
Nie ma znaczenia wielkość ekranu mobilnego --> aplikacja dostosuje Swoją wielkość. Przybliżanie / powiększanie treści? --> oczywiście jest to możliwe i nie wpłynie na jakość grafik (grafiki wektorowe) oraz rozmieszczenie obiektów na stronie.
Flow aplikacji zostało zaprojektowane tak aby było przyjemne dla użytkownika. Strony nie ładują się długo, dzięki ogranieczeniu działania skryptów w tle oraz optymalizacji na wysokim poziomie. Przejścia między stronami są intuicyjne.



-----Want More?----------
FIGMA LINK HERE COMING SOON
