const inputValue = document.querySelector('.inputValue');
const Cityname = document.querySelector('.name');
const button = document.querySelector('.button');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');



button.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=5d81dd5799f5c798c3c908fa9ae323c0`)
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        Cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    .catch(err => alert(err + " Wrong City Name"))
})

