var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPerson = names[Math.floor(Math.random() * numberOfPeople)];
    return randomPerson + " is going to buy lunch today!";
}
console.log(whosPaying(names));