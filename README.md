<h1> Uppgift: Kunskapskontroll 1 - Node.js Backend + Frontend. </h1>

<h3>
Kunskapskontroll 1: Todo list API
Kunskapskontroll
Förfaller 26 maj 2022 kl. 23:59
Instruktioner
Det är dags för första kunskapskontrollen!
Och här kommer vi - som man brukar göra när man jobbar med något nytt - en Todo-list!
Denna Todo listen kommer bestå av två delar:

- Todo list API (webbservern)
- Todo list klient (frontenden)

// Inlämningen kommer ske med länkar till två (2) Github-repositories, en till Frontenden och en till Webbservern/Backenden.
Det eftersom APIet ska byggas utan externa NPM-paket och endast med inbyggda moduler. //

// Den tillhörande Frontenden får ni lov att bygga hur ni vill, det finns inga krav på ett visst Frontend-ramverk ni ska använda eller liknande.
Väljer ni att testa ett nytt ramverk eller skriva det med Vanilla HTML/CSS/JS går det bra. //

Men jag skulle rekommendera att ni kanske återanvänder K1 eller K2 från kursen Javascript Ramverk och bara behöva lägga till funktionaliteten för att hämta/skicka data till APIet.

Det är inte heller krav på att Frontenden använder både PATCH och PUT eftersom de löser samma problem, men det ska finnas fungerande stöd för båda endpoints i API:et.

**K1 kommer testas på följande sätt:**
_Automatiska tester mot samtliga endpoints._

_Manuell testning med Frontend + Backend lokalt_

_Genomgång av källkoden på Github_

Länkar till **MDN** för Statuskoder och **HTTP Verb** finns på teamets Startsida på Teams.

För att uppnå **Godkänt** är kraven att:

- Den ska vara byggd med Node.js och endast dess inbyggda moduler.

- Utan NPM (inga node_modules, package.json, package-lock.json).

- API:et ska ha följande endpoints:

  - GET /todos - Hämta alla todos
  - GET /todos/:id - Hämta en todo
  - POST /todos - Lägg till en todo
  - PUT /todos/:id - Ändra en Todo (full)
  - PATCH /todos/:id - Ändra en todo (partial)
  - DELETE /todos/:id - Ta bort en todo
  - API:et ska endast ta emot och skicka data i JSON-format
  - API:et ska lagra och läsa data från en JSON-fil, så att applikationen bibehåller datan vid omstart eller krasch.

  _Det ska finnas en tillhörande frontend av valfritt slag (ex. Todo-listen från K1 eller K2)._

För att uppnå **Väl Godkänt** behöver du implementera minst 4 av följande kriterier:

- API:et ska svara med lämpligt meddelande och statuskod om allt gått väl
- API:et ska svara med lämpligt meddelande och statuskod om routen inte finns
- API:et ska svara med lämpligt meddelande och statuskod om resursen inte finns
- API:et ska svara med lämpligt meddelande och statuskod om requesten inte är korrekt
- API:et ska innehålla en README-fil med tillhörande dokumentation med en lista på varje route och exempel på hur den anropas

(Beskrivning senast uppdaterad: 16 maj 12:29) [Inlämning den 26 maj 23:59]. </h3>

# Utförande:

Exempeltext...
