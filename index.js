// code your solution here
/*
Implement a function called saturdayFun:

    It should define a function.
    It uses a default argument, 'roller-skate' when no arguments are passed.
        It allows the default argument to be overridden.

Implement a function called mondayWork:

    It should define a function.
    It uses a default argument, 'go to the office' when no arguments are passed.
        It allows the default argument to be overridden.

Implement a function called wrapAdjective:

    It should return a function. This "inner" function should:
        take a single parameter that should default to "special". Name it however you wish.
        return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
    It should take as parameter a String that will be used to create visual flair.
    You may call the parameter whatever you like, but its default value should be "*".
    Call example: const encouragingPromptFunction = wrapAdjective("!!!")

Thus a total call should be:

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"

Run learn test to verify you've gotten this set of tests passing.
*/

function saturdayFun(arg="roller-skate"){
    return "This Saturday, I want to " + arg + "!"
}
function mondayWork(arg="go to the office"){
    return "This Monday, I will " + arg + "."
}

function wrapAdjective(flair="*") {
    return (arg="special")=>{return `You are ${flair}${arg}${flair}!`}
}