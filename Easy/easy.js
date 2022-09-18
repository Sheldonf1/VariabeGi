let name1 = prompt("First Name");
let name2 = prompt("Second Name");

const length = function (name1, name2) {
    if (name1.length > name2.length) {
        console.log(
            `The name ${name1} is longer than ${name2} by ${name1.length - name2.length} characters.`
        );
    }
    else if (name1.length < name2.length) {
        console.log(`The name ${name2} is longer than ${name1} by ${name2.length - name1.length} characters.`);
    }
    else { console.log(`${name1} and ${name2} are the same length.`); }
}
length(name1, name2);


//Inspect Element to see results after prompt//