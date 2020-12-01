//get dog images
function getDogImages(numOfDogs) {
    if (numOfDogs > 50) {
        $('#number-of-dogs').val('');
        return alert("Please only enter a number less than 50");
    } else if (numOfDogs < 3) {
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
            .then(response=> response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert("Somthing went wrong"));
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
            .then(response=> response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert("Somthing went wrong"));
    }
    $('#number-of-dogs').val('');
}

// generate html to add to DOM
function displayResults (responseJson) {
    console.log(responseJson);

    
    $('.results').html('<h2>Look at these dogs!</h2>');

    //target .results and add updated url
    responseJson.message.forEach(url => {
        $('.results').append(`<div><img src="${url}" class="results-img"></div>`);
    });

    //remove .hidden class
    $('.results').removeClass('hidden');
}

// watch for user input
function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let numOfDogs = $('#number-of-dogs').val();
      getDogImages( numOfDogs );
    });
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});