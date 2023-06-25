
function BellBoy {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

bellboy1 = new bellboy("Timmy", 19, "Bellboy");

function HouseKeeper (name yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
}

var HouseKeeper2 = new HouseKeeper("Jane", 7, ["kitchen", "lobby", "bedroom"]);