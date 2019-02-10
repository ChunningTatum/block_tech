# Samenvatting hoofdstuk 2

## Program structure

* Expressions and statements
* Bindings
* Binding names
* The environment
* Functions
* The consoole.log function
* Return values
* Control flow
* Conditional execution
* While and do loops
* Indenting code
* For loops
* Breaking out of a loop
* Updating bindings succinctly
* Dispatching on a value with switch
* Capitaliation
* Comments
* Summery

## Expressions and statements

Een stukje code dat een value produceerd heeft een expression. Elke value dat letterlijk geschreven is (22 of "Psychoanalysis") is een expression. Een expression tussen twee haakjes is ook een expression, zo is ook een binaire operator die op twee expressions of een unary operator ook een expression. 

Expressions kunnen dus ook expressions bevatten op een manier dat ook de taal van mensen in elkaar is genest (A subsentence can contain its own subsentences enz.). Dit geeft ons de mogelijkheid om expressions te bouwen die complexe berekeningen uit kunnen voeren.

Als een expression een stukje van een zin is, dan is een JavaScript *statement* gelijk aan een heel zin. Een programma is eigenlijk een hele lijst van statements.

De simpelste soort statement is een expression met een semicolon er achter. Dit is een programma:

```javascript
1!;
!false;
```
Deze programma is nutteloos tho... Het kan zijn dat een expression alleen een value produceerd, waarmee deze gebruikt kan worden in de ingesloten code. Een statement staat op zich zelf, het is pas iets als deze statement de "wereld" waar deze in zicht bevind kan veranderen (Iets op het scherm laten zien). Deze veranderingen worden *side effects* genoemd. Elke statement dat een semicolon nodig heeft, moet een er een krijgen, als je dat niet doet, zal de volgende lijn                                                                                                                                                                                                                                                                                                     

## Bindings

Om values vast te vangen en vast te houden, heeft JavaScript iets dat een *binding* of *variable* heet. 

```javascript
let caught = 5 * 5;
```

Dit is een tweede soort statement. het speciale woord (*keyword*) *let* laat zien dat deze zin een binding definieert. Let wordt gevolgd door een een naam van de binding  en als je gelijk een value wilt geven, kan je dit doen door een = operator aan de expression toe te voegen. De vorige statement maakt een binding dat *caught* heet en wordt gebruikt om de de nummer waar 5 * 5 uit komt. 

Als een binding is defined, de naam hiervan kan worden gebruikt als een expressoin. De value van deze expression is de value die deze nu vast houd:

```javascript
let ten = 10;
consle.log(ten * ten);
// → 100
```

Wanneer een binding naar een value verwijst , betekent niet dat deze value voor altijd aan deze value vast zit. De = operator kan gebruikt worden op bestaande bindings om zich hier van af te 









































































































































































