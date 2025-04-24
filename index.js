// JavaScript Variables //

//( var ) can be reassign and redeclared . SCOPE: FUNCTION
//( let ) can be reassign and not redeclared . SCOPE : BLOCK
//( const ) cannot be reassign and nor redeclared . SCOPE : BLOCK
// A block in JavaScript is simply a set of code enclosed in curly braces { }.

// var name = "Alice";       // can be re-declared and updated
// let age = 25;             // can be updated, not re-declared in the same block
// const country = "USA";    // can't be updated or re-declared

{
    let name = "Charlotte";
    name = "Bob"
    console.log(name)
}