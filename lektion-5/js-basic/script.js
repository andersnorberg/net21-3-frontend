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