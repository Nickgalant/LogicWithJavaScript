const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        weight: 15
    },
    {
        type: 'cat',
        name: 'miau',
        age: 2,
        weight: 5
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 2

    },
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mansinha',
        age: 15,
        weight: 30
    }
]

const petNames = pets.map((pet) => {
    return pet.name;
})

console.log(petNames);