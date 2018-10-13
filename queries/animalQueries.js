
const animalsList = [
    {
        id:0,
        name:"Pumpkin",
        species:"Cat",
        color:"Gray",
        birthMonth:5,
        image:`https://i.kym-cdn.com/entries/icons/facebook/000/017/076/Cat_theme_1.jpg`,
        birthYear:2018
    },
    {
        id:1,
        name:"Tofu",
        species:"Cat",
        color:"White",
        image:`https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2015/09/White-cat-names.jpg`,
        birthMonth:9,
        birthYear:2017
    },
    {
        id:2,
        name:"Curly",
        species:"Dog",
        color:"Brown",
        image:`https://cmeimg-a.akamaihd.net/640/clsd/getty/256afbf94fc04a24919967cc72dc91e3`,
        birthMonth:4,
        birthYear:2018
    }
];
const animalsListById = animalsList.reduce((acc, animal,i) => {
    acc[animal.id] = animal
    return acc;
},{});

function retrieve(req, res, next) {
    if (req.params.id) {
        const animalId = parseInt(req.params.id)
        const returnAnimal = animalsListById[animalId]
        if(returnAnimal){
            res.status(200)
            res.json(returnAnimal)
        }else{
            next(`Animal not found!`)
        }
    }else{
        res.status(200)
        res.json(animalsList);
    }
}

module.exports = {
    retrieve,
}