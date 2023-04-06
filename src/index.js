//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', e => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        const dogs = data.message;
        for (i = 0; i < dogs.length; i++){
            let image = document.createElement('img');
            image.src = dogs[i];
            document.getElementById('dog-image-container').append(image);
        }
    })

    fetch(breedUrl)
    .then(res => res.json())
    .then (data => {
        const dogs = data.message;
        console.log(dogs);
        for (dog in dogs){
            let breed = document.createElement('li');
            breed.innerText = dog;
            document.getElementById('dog-breeds').append(breed);
        }
    })
})