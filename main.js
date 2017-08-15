var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

var planetContainer = document.getElementById("planets-container")


function domBuilder (planetz) {
	var planetString = "";
	for (var i=0; i < planetz.length; i++) {
		var newPlanet = "";
		newPlanet += `<div class="planet-tile" id="planet-tile-${i}">`
		newPlanet += `<div class="planet-name hidden" id="${planetz[i].name}">${planetz[i].name}</div>`
		newPlanet += `<img class="planet-image" src="${planetz[i].url}">`;
		newPlanet += `</div>`
		planetString += newPlanet;
	}
	writeToDom(planetString)
}

function writeToDom(str) {
	planetContainer.innerHTML = str;
}


var getPlanetsButton = document.getElementById("show-planets-btn");

getPlanetsButton.addEventListener("mouseenter", () => {domBuilder(planets)});


function showMe (e) {
	console.log("showMe event", e);
	if (e.target.previousSibling.classList.contains("hidden")) {
		e.target.previousSibling.classList.remove("hidden");
	} else {
		e.target.previousSibling.classList.add("hidden");
	}
}



document.addEventListener("click", (e) => {
	if (e.target.className === 'planet-image') {
		console.log("woop!");
		showMe(e);
	}
})


var searchBox = document.getElementById("input-field")

searchBox.addEventListener("keypress", (e) => {
	console.log("key event:", e.key);
	if (event.key === "Enter"){
		var val = searchBox.value
		//1. filter the planets 
		var results = planets.filter((planet) => {
			return planet.name.indexOf(val)>-1;
		})
		domBuilder(results);
	} 
})


var clearButton = document.getElementById("clear-btn") 

clearButton.addEventListener("click", () => {
	searchBox.value = "";
})