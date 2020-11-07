// setting up our variables and assigning them to the html elements
const setUpDiv = document.getElementById('setup');
let punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline;


/* a function that needs to:
insert punchline into punchline div
add class "bubble" to the punchline div
toggle the hidden class on both buttons,
and will be called when clicked on the punchlineBtn
*/

function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

/* 
adding an eventListener to punchlineBtn; 
when clicked = calls a function called get punchline()
*/

punchlineBtn.addEventListener('click', getPunchline);

//newjokeBtn event for a new joke calling the getJoke function
newJokeBtn.addEventListener('click', getJoke);

//creating the async function that will create the joke promise to fetch the url
async function getJoke() {
    const jokePromise = await fetch(
        'https://official-joke-api.appspot.com/jokes/programming/random'
    )
    // a variable that will take the json data
    const joke = await jokePromise.json();
    //getting the setup from the joke and inserting it into our setupDiv element
    // joke.forEach(jokeIntro => {
    //     setUpDiv.innerHTML = jokeIntro.setup;
    // }) ....or since you know there's only one object in the joke json array, target its first index
    setUpDiv.innerHTML = joke[0].setup;

    /*creating global variable called punchline 
    which will store the current punchline and will be updated with each new joke.
    assigning current jokes punchline to the punchline variable */

    punchline = joke[0].punchline;

    //clearing the punchlineDiv and remove the bubble class from the punchline div
    punchlineDiv.innerHTML = '';
    punchlineDiv.classList.remove('bubble');

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

getJoke();