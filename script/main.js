//Plik w którym znajdują się wszystkie skrypty używane w aplikacji

//Funkcja odpowiedzialna za geolokalizację
//Uruchamiana jest po wciśnięciu przycisku o ID=btn1
function geoFindMe(buttonElement) {
  var buttonClickedId = buttonElement.id;
  if( buttonClickedId === 'btn1' ){
      //W tym miejscu pobieramy dwie lokalizacje w których umieścimy wynik Naszej funkcji
        const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
      //Tworzymy zmienne które zostaną wykorzystane jako Nasz odnośnik do mapy
  mapLink.href = "";
  mapLink.textContent = "";
      //Jeżeli funkcja zakończy się sukcesem tzn jeżeli użytkownik zezwoli na dostęp do geolokalizacji pobierzemy koordynaty Naszej lokalizacji
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
      //Status będzie równy "" czyli brak błędu
    status.textContent = "";
      //a do Naszej drugiej zmiennej maplink przypiszemy wartość oraz stworzymy z niej odnośnik do OpenMap
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }
      //Jeżeli funkcja zakończy się błędem tzn jeżeli użytkownik nie zezwoli na dostęp do geolokalizacji wyświetlimy status
  function error() {
    status.textContent = "Unable to retrieve your location";
  }
    //navigator.geolocation odpowiada za wysłanie komunikatu z prośbą o udzielenie dostępu do geolokalizacji
    //negacja poprzez ! wskazuje, że jeżeli nie uda się wysłać komunikatu oznacza, że Nasza przeglądarka nie wspiera Geolokalizacji
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
      //wyświetlamy status Locating do czasu aż użytkownik pozwoli bądź nie na dostęp do geolokalizacji
    status.textContent = "Locating…";
      //wyświetlamy wynik function success lub error w zależności od decyzji 
    navigator.geolocation.getCurrentPosition(success, error);
  }      
}
}

const button = document.querySelector("button")
button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted"){
            const notification = new Notification("Powiadomienie o wpłacie", {
                body: "Gratulacje właśnie udało Ci się wpłacić 2.000 PLN na konto",
                icon: "LogoFinal.png",
                })
                notification.addEventListener("error", e => {
                        alert("error")
            })
            var cena = document.getElementById("balance");
            var text = cena.textContent;
            var number = parseInt(text) + 2000;
            cena.innerHTML = number;
        }
    })
})
