//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

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
})