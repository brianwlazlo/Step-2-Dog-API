//get dog images
function getDogImages(numOfDogs) {
    if (numOfDogs < 3 || numOfDogs > 50) {
        $('#number-of-dogs').val('');
        return alert("Please only enter a number between 3 and 50");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
            .then(response=> response.json())
            .then(responseJson => generatePicsHtml(responseJson))
            .catch(error => alert("Somthing went wrong"));
    }
    $('#number-of-dogs').val('');
}

// generate html to add to DOM
function generatePicsHtml (responseJson) {
    console.log(responseJson);
    let resultsArray = responseJson.message;
    let resultsHtml = '';

    resultsArray.forEach(url => {
        resultsHtml += `<div><img src="${url}" class='results-img'></div>`
    });
    //replace 'placeholder' img with each endpoint url
    $('.results-img').replaceWith(resultsHtml);
    //display results
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