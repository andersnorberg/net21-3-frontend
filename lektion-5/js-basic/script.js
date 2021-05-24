/* 
    Chromium, Chrome, Edge (ny), Opera      =   V8
    FireFox                                 =   SpiderMonkey
    IE, Edge (gamla)                        =   Chakra
    Safari                                  =   JavascriptCore/SquirrelFish

    Javascriptsversioner                    =   ES/EcmaScript
    Javascript                              !=  Java
    Javascriptsbibliotek/ramverk            =   React (bibliotek), Vue (ramverk), Angular (ramverk), Jquery (bibliotek)

    Javascript, powershell, (python)        =   scriptspråk
    C/C++/C#, Java, (python)                =   programmeringsspråk (skapar -> .exe)

    Script                      Program
    ------------------------------------------------
    Javascript  .js     ->      chrome.exe, edge.exe
    PowerShell  .ps1    ->      powershell.exe
    Python      .py     ->      pyhton.exe/node.exe
    Word        .docx   ->      word.exe
*/

/* CONSOLE */
/* för att se: högermusknapp -> inspektera -> Console */
// console.log('logga information...');
// console.warn('logga varningsmeddelande...'); 
// console.error('logga felmeddelande...')

/* DATATYPER */
/* 
    JS                  C#
    -----------------------------------------------------------------------------------------------
    String              string                                          till för text
    Number              int, long, double, decimal, float, uint         heltal, decimaltal, stora tal...
    Boolean             bool (boolean)                                  sant/falskt
    Object              object                                          Ett objekt av något slag
    null (Object)       null                                            "Jag vet inte..."
    Undefined                                                           ingenting
    Symbol

    I JS ÄR:
    Array, Object, Null = Object

*/

/* VARIABLER */
/* 
    En variabel är en container som kan innehålla ett värde av något form av datatyp

    JS:     camelCase       ex.     firstName
    C#:     Pascal          ex.     FirstName

    _ före ett variabelnamn indikerar att denna ska anses vara privat. Men gör ingen skillnad. (_firstName)
    firstName != FirstName dvs. case sensetive

    deklarera variabler:
    -------------------------------------------------------------------
    PRE ES6:
    firstName           <-      kan göra så här, men gör inte så här (RW)
    var firstName       <-      deklarerar gobalt, undvik att göra så här (RW)

    POST ES6:
    let firstName       <-      deklarerar lokalt, använd detta sätt (RW)
    const firstName     <-      gör så här för statiska värden, endast läsbart ej skrivbart (R)

    const pi = 3.1415
    const url = "https://domain.com"
    const secretKey = "s1a123sa-123s-12312"
    const getName = (firstName) => { return firstName }
*/


/* DATATYPE: STRING */
var firstName = "Hans"
var lastName  = 'Mattin-Lassei'
var address   = `Nordkapsvägen 1`     // (shift + ´)

var text = "Jag heter Hans \"Hasse är 'bäst' och alla vet det\". Jag bor i Stockholm."
var text = 'Jag heter Hans "Hasse är \'bäst\' och alla vet det". Jag bor i Stockholm.'
var text = `Jag heter Hans "Hasse är 'bäst' och alla vet det". Jag bor i Stockholm.`

var placeholders = "Jag heter Hans Mattin-Lassei och bor på Nordkapsvägen 1."
var placeholders = "Jag heter " + firstName + " " + lastName + " och bor på " + address + "."
var placeholders = 'Jag heter ' + firstName + ' ' + lastName + ' och bor på ' + address + '.'
var placeholders = `Jag heter ${firstName} ${lastName} och bor på ${address}.`

var modified = placeholders.length
var modified = placeholders.toLocaleUpperCase()
var modified = placeholders.indexOf('Hans')
var modified = placeholders.concat(' ',text)

var control = " Hans"
var modified = control.trim()
// console.log(control)
// console.log(modified)


/* DATATYPE: Boolean */
var status = true
var status = false
// console.log(status)


/* DATATYPE: Number */
var value = 1
var value = 1.1
var value = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1
// console.log(value)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)


/* DATATYPE: Null / Undefined */
var ref    // <- undefined
var ref = null
var ref = undefined
// console.log(typeof ref)
// console.log(ref)


/* DATATYPE: Object (Key:Value Pair)*/

// Javascript
var person_js = {
    firstName: "Hans",
    lastName: 'Mattin-Lassei',
    age: 37,
    height: 1.64,
    active: true,
    skills: ["C#", 'Javascript', `HTML & CSS`],
    address: {
        addressLine: "Nordkapsvägen 1",
        zipCode: 13657,
        city: "Vega" 
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    getAddress() {
        return `${this.address.addressLine}, ${this.address.zipCode} ${this.address.city}`
    },
    getAddress: function() {
        return `${this.address.addressLine}, ${this.address.zipCode} ${this.address.city}`
    }
}

// Json = Javascript Object Notation
var person_json = {
    "firstName": "Hans",
    "lastName": "Mattin-Lassei",
    "age": 37,
    "height": 1.64,
    "active": true,
    "skills": ["C#", "Javascript", "HTML & CSS"],
    "address": {
        "addressLine": "Nordkapsvägen 1",
        "zipCode": 13657,
        "city": "Vega" 
    }
}

// console.log(person_js)
// console.log(person_json)

// console.log(person_js.fullName())
// console.log(person_js.lastName)
// console.log(person_js.address.addressLine)
// console.log(person_js['address']['addressLine'])

// var json = JSON.stringify(person_js)
// var obj = JSON.parse(json)
// console.log(obj)

// var {firstName, lastName, age, fullName} = person_js
// console.log(firstName)



/* Methoder/Funktioner */
/* 
    Funktioner är fristående
    Metoder är kopplade till ett objekt/klass
*/

/* function - traditionella (gamla) sättet */
function greeting() {
    console.log('gör något i funktionen')
}
function greeting() {
    return 'returnerar ett värde tillbaka'
}


/* function - nya (ES6+) sättet */
const message1 = () => {
    console.log('gör något i funktionen')
}
const message2 = () => {
    return 'returnerar ett värde tillbaka'
}
const message3 = () => 'returnerar ett värde tillbaka'


message1()
console.log(message2())
console.log(message3())