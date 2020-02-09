const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = [
    'Jan',
    'Andrzej',
    'Piotr',
    'Krzysztof',
    'Stanisław',
    'Tomasz',
    'Paweł',
    'Józef',
    'Marcin',
    'Marek',
    'Michał',
    'Grzegorz',
    'Jerzy',
    'Tadeusz',
    'Adam',
    'Łukasz',
    'Zbigniew',
    'Ryszard',
    'Dariusz',
    'Henryk',
];

const femaleNames = [
    'Anna',
    'Maria',
    'Katarzyna',
    'Małgorzata',
    'Agnieszka',
    'Krystyna',
    'Barbara',
    'Ewa',
    'Elżbieta',
    'Zofia',
    'Janina',
    'Teresa',
    'Joanna',
    'Magdalena',
    'Monika',
    'Jadwiga',
    'Danuta',
    'Irena',
    'Halina',
    'Helena',
];

lastNames = [
    'Nowak',
    'Kowalski',
    'Wiśniewski',
    'Dąbrowski',
    'Lewandowski',
    'Wójcik',
    'Kamiński',
    'Kowalczyk',
    'Zieliński',
    'Szymański',
    'Woźniak',
    'Kozłowski',
    'Jankowski',
    'Wojciechowski',
    'Kwiatkowski',
    'Kaczmarek',
    'Mazur',
    'Krawczyk',
    'Piotrowski',
    'Grabowski',
    'Nowakowski',
];


const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    let name;
    if (gender == 'M') {
        name = randChoice(maleNames);
    } else {
        name = randChoice(femaleNames);
    }

    const surname = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * (78 - 18 + 1) + 18);

    const personalities = { gender, name, surname, age };

    people.push(personalities);
}

const jsonPeople = JSON.stringify(people);

fs.writeFile('people.json', jsonPeople, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
})