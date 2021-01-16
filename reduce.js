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

//const totalWeight = pets.reduce((total, pet) => {
//    if (pet.type !== 'dog') return total
//    return total + pet.weight
//}, 0)
//console.log(totalWeight)

//const totalWeight = pets.reduce((total, pet) => {
//    return total + pet.weight
//}, 0)

//console.log(totalWeight)


//console.log(dogs)

const totalWeightDogs = pets
    .filter((pet) => {
    return pet.type === 'dog'
    })
    .reduce((total, pet) => {
    return total + pet.weight
    }, 0)

console.log(totalWeightDogs)