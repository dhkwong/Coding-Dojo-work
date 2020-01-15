
let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];




for (let i = 0; i < students.length; i++) {
    console.log(`name: ${students[i]['name']}, Cohort ${students[i]['cohort']}`)
}

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

for (lst in users) {
    console.log(lst)
    for (dict in users[lst]) {
        console.log(`${dict}: ${users[lst][dict]['first_name']}, ${users[lst][dict]['first_name']} - ${users[lst][dict]['first_name'].length + users[lst][dict]['first_name'].length}`)
    }

}

$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){ 
    	favoritePokemon = data.name;
	console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
    });
});