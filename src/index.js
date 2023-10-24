// Code here

const BASE_URL = "http://localhost:3000";

//Fetch Beers - NOT Working to be reviewed
// async function getbeers(){
// const beersResponse = await fetch('http://localhost:3000/beers');
// const beers = await beersResponse.json();
// return beers;
// console.log(beersResponse);
// }

function getbeers(){
    fetch('http://localhost:3000/beers')
    .then((beersResponse)=> {
        return beersResponse.json();
})
.then(beers=>{
    console.log(beers);
});
}


// function fetchData() {
//     fetch("http://localhost:3000/beers")
//     .then((resp) => resp.json())
//     .then((data) => renderBeers(data))


document.addEventListener("DomContentLoaded", () => {
    fetchData();
});

// Test javascript console loading

const beerListId = document.getElementById ("beer-list")

console.log(beerListId);

getbeers()



// .then(beers=>{
//     beers.map((beers)=>{
//         console.log(beers);

//     });
// });




//Beer Details
function beerDetails(beer){
console.log(document.getElementById("beerImage"))
document.getElementById("beer-name").innerText=beer.name;
document.getElementById("beer-image").src = beer.image_url;
document.getElementById("beer-description").innerHTML = beer.description
document.getElementById("review-form").innerHTML = review.form
document.getElementById("review-list")

//Form Reviews
const reviewform = document.getElementById("reviewform")
reviewform.addEventListener("submit", (event)=>{
    event.preventDefault();
    const reviewText = reviewform.comment.value;
    console.log(reviewText)

    const otherReviews = documen.getElementById("reviews").innerHTML;
    document.getElementById("reviews").innerHTML = "${otherreviews} ${reviewText}";

    const reviewlist = document.getElementById("reviewlist")
reviewlist.addEventListener("submit", (event)=>{
    event.preventDefault();
    const reviewText = reviewlist.comment.value;
    console.log(reviewText)

    const otherReviews = documen.getElementById("reviews").innerHTML;
    document.getElementById("reviews").innerHTML = "${otherreviews} ${reviewText}";
})
});
}

// // Fetch Beers
function fetchData() {
    fetch("http://localhost:3000/beers")
    .then((resp) => resp.json())
    .then((data) => renderBeers(data))
}


