# Sammenvatting week 1

## Values, Types, and Operators 

* Values
* Numbers
* Arithmetic
* Special numbers
* Strings
* Unary operators
* Boolean values
* Logical operators
* Empty values
* Automatic type conversion
* Short-circuiting of logical operators
* Summary

## Values

Om met grote hoeveelheden bits te werken en om deze niet kwijt te raken, moeten ze verdeeld worden in chunks die stukken van informatie representeren. In JavaScript worden deze chunks *values* genoemd. Ook al bestaan alle values uit bits, spelen ze allemaal een verschillende rol. Elke value heeft een type dat zijn rol defined. Sommige values zijn nummers, anderen values zijn stukken text en sommige zijn functuins enz. Om een value te maken, moet je deze gewoon een naam geven, je kunt er gewoon een callen en je hebt er een. Elke value is ergens opgeslagen en als je dus een gigantische aantal tegelijk wilt gebruiken kan je al je memory gebruiken. Als je een value niet meer gerbruikt, worden de bits weer voor een andere doel gebruikt.

## Numbers

JavaScript gebruikt een specifieke nummer aan bits (64) om een enkele nummer op te slaan. Er zijn een aantal patters die je kan maken met 64 bits.  Het grootste nummer dat opgeslagen kan worden in is ongeveer 9 quadriljoen (15 nullen).

> 2.998e8 That is 2.998 x 10^8 = 299,800,000.

## Arithmetic (rekenkundig)

Arithmetix is dus rekenkunde. Aritmetix operations zoals optellen en vermenigvuldigen nemen twee value aan en produceren een nieuwe nummer: 

> 100 + 4 * 11

De + en * symbool heten operators. de eerste staat voor optellen en de tweede staat voor vermenigvuldigen. Door een operator tussen twee values te stoppen, al het een nieuwe value produceren. eerst vermenigvuldigen en delen dan optellen en aftrekken. Wil je dit veranderen dan doe je dit zo:

>(100 + 4) * 11

Voor aftrekken is er een - operator en delen is het de / operator. Als laatst is er ook nog een arithmetic operator die je niet gelijk herkent. Dat is de % symbool, dit wordt ook wel de modulo genoemt. 

```javascript
> 314 % 100 = 14
> 144 % 12 = 0
```

## Special numbers

Er zijn drie speciale values in JavaScript die nummers voor moeten stellen, maar zich niet gedragen als normale nummers. 

De eerste twee zijn **Infinity** en **-Infinity**, deze stellen de positieve en negatieve infinities voor. Infinity - 1 is nog steeds infinity enz. Als infinity verkeerd gebruikt wordt, kan dit snel al leiden tot een NaN (Not a Number). 

## Strings

De volgende basic data is de *string*. Een string is eigenlijk dus een stukje tekst. Deze worden op de volgende manier geschreven:

```javascript
 'Hello World' /br
 "World Hello"
 `Horld Wello`
```

Bijna alles kan tussen deze quotes gestopt worden en JavaScript maakt hier dan een string value van. Wanneer een backslash (\) tussen de quoted text gezet wordt, krijft het dan een specifieke betekenis. Deze wordt de *escaping* genoemd. Een quote dat eindigt op een backslash betekent niet het einde van een string. 

```javascript
 "This is the first line\nAnd this is the second"
```

Wat er uiteindelijk uit zal komen:

```javascript
// This is the first line
// And this is the second
```

Om bijvoorbeelde meerdere stukken aan elkaar te plakken, moet je dit op de volgende manier doen:
```javascript
// "con" + "cat" + "e" + "nate"
// concatenate
// "Deze " + "zin " + "is " + "correct."
// Deze zin is correct.
```
> "con" + "cat" + "e" + "nate"
> concatenate
> "Deze " + "zin " + "is " + "correct."
> Deze zin is correct.

Wanneer je iets binnen een ${} schrijft, zal het uitgevoerd worden en geconvert worden tot een string:

```javascript
'half of 100 is ${100 / 2}'
//half of 100 is 50
```

## Unary operators ( unaire operatoren)

Niet alle operaters zijn symbolen. Sommige zijn geschreven in worden. Een voorbeeld is de *typeof* operator, die produceerd een string value die de type van die value geeft. 

```javascript
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```

resultaat:
```javascript
> number
> string
```

## Boolean values

Basicly, yes or no there are no other possibilities. You would only use this if you want the result to be true or false.

A few ways to produce Boolean values:

```javascript
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
```
Uppercase letters zijn altijd "minder" dan lowercase als het gaat over orderen van strings.

```javascript
console.log("Itchy != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false

console.log(NaN == NaN)
// → false
```

## Logical operators

Er zijn een aantal operations dat bij Boolean values applied kunnen worden. JavaScript support hier drie logische operators voor: *and*, *or* en *not*. 

De && operator representeerd *and*. Dit is een binaire operator, de resultaten zijn alleen waar als beide gegeven values ook kloppen.

```javascript
console.log(true &&















