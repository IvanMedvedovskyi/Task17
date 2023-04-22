function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showInfo = function () {
        console.log('Інформація про людину:\n' + "Ім'я людини: " + this.name +`\n` + 'Вік людини: ' + this.age);
    }
}

function CarBase(brand, model, year, carNumber, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carNumber = carNumber;
    this.owner = owner;


    if (owner.age < 18) {
        console.log("Ваш вік меньше 18 років. Треба ще трішки підрости :)")
        this.owner = 'Інформація недоступна';
    } else {
        console.log(this.owner = owner);
    }

    this.getInformation = function () {
        console.log('Інформація про автівку:\n' + `Brand: ` + brand + `\n` + 'Model: ' + model + `\n` + 'Year: ' + year + `\n` + 'CarNumber: ' + carNumber);
    }
}

const personFirst = new Person('Василий', 40);
const personSecond = new Person('Максим', 15);
const personThird = new Person('Олександр', 22);
const personFourth = new Person('Володимир', 18);

const carInfo = new CarBase('BMW', 'M5', '1985', 'AE0000BC', personFirst);
console.log(carInfo);

const secondCarInfo = new CarBase('Honda', 'Civic R', '1992', 'AE9999BC', personSecond);
console.log(secondCarInfo);

const thirdCarInfo = new CarBase('Volvo', '740', '1989', 'AE4575BC', personThird);
console.log(thirdCarInfo);

const fourthCarIndo = new CarBase('Tesla', 'Model Y', '2022', 'AE1234BC', personFourth);
console.log(fourthCarIndo);




