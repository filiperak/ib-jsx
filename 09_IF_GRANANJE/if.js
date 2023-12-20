console.log("if");

let x = 3;
let y = 3;

if(x == y) {
    console.log("Vrednosti promenljivih x i y su jednake");
    console.log("vrednost promenljive "+x+" i "+y+" su jednaki");
    console.log("vrednost promenljive ",x," i ",y," su jednaki");
    console.log(`vrednosti ${x} i ${y} su jednake`);
}
console.log("komanda ispod if grane");

let a = 4;
let b = "4";

if(a == b) {
    console.log(`vrednosti ${a} i ${b} su jednake po vrednosti`);
}

if(a === b) {
    console.log(`vrednosti ${a} i ${b} su jednake po tipu i vrednosti`);
}
if(a !== b) {
    console.log("promenljive a i b su razlicite ili po tipu ili po vrednosti");
}
