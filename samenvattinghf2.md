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
Deze programma is nutteloos tho... Het kan zijn dat een expression alleen een value produceerd, waarmee deze gebruikt kan worden in de ingesloten code. Een statement staat op zich zelf, het is pas iets als deze statement de "wereld" waar deze in zicht bevind kan veranderen (Iets op het scherm laten zien). Deze veranderingen worden *side effects* genoemd. 

















































































































































































