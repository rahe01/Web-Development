class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(name){
        console.log(`${this.name} is sleeping`);
    }
}

const p1 = new Person("Rahe", 19);

p1.sleep();