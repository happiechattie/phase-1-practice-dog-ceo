//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedsArray = [];

document.addEventListener('DOMContentLoaded', e => {
    //challenge 1
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

    //challenge 2
    fetch(breedUrl)
    .then(res => res.json())
    .then (data => {
        const dogs = data.message;
        for (dog in dogs){
            let breed = document.createElement('li');
            breed.innerText = dog;
            document.getElementById('dog-breeds').append(breed);
        }
        breedsArray = Array.from(breeds.childNodes)
        breedsArray.shift();
        console.log(breedsArray);
    })

    //challenge 3
    const breeds = document.getElementById('dog-breeds');
    breeds.addEventListener('click', e => {
        e.target.style.color = 'red';
    })

    //challenge 4

    document.getElementById('breed-dropdown').onchange = e => {
        /*
        for (breed of breedsArray) {
            console.log('FIRST LETTER: ' + breed.innerText.charAt(0))
            console.log('COMPARING TO: ' + document.getElementById('breed-dropdown').value)
            console.log('RESULT: ' + (breed.innerText.charAt(0) === document.getElementById('breed-dropdown').value))
        }
        */
        let filteredArray = breedsArray.filter(breed => (
            breed.innerText.charAt(0) === document.getElementById('breed-dropdown').value
        ))

        document.getElementById('dog-breeds').innerHTML = '';
        for (item of filteredArray){
            let breed = document.createElement('li');
            breed.innerText = item.innerText;
            document.getElementById('dog-breeds').append(breed);
        }
    }
})