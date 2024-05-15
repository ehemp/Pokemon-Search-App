const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
let nameOrIdURL = "";
const statContainer = document.getElementById("stats-container");
const pokeCard = document.getElementById("poke-card");
let isPopulated;
let creature = [];
let getPokemon = {};
let found = true;


const fetchPokeData = async () => {
  try {
    const res = await fetch(pokemonURL);
    const data = await res.json();
    const {results} = data;
    const {} = results;
    pokemon(results)
    isPopulated = true;
  } catch (err) {
    console.log(err);
  }
};

fetchPokeData();

const pokemon = (poke) => {
  poke.forEach((critter) => {
    creature.push({id: critter.id, name: critter.name, url: critter.url})
  })
  searchPoke(creature);
};

const searchPoke = (creatureValue) => {
  //console.log("searchPoke", creature)
  creature.find((critter) => {
    //console.log("find critter")
      if (searchInput.value.toLowerCase().replace(/-?/,"") === critter.name || searchInput.value.toLowerCase() === critter.name || Number(searchInput.value) === critter.id) {
      nameOrIdURL = critter.url;
      found = true;
    return getCreatureData(nameOrIdURL)
    } else {
      return found = false;
    }
 
  })

}

 
const getCreatureData = async (creature) => {
        creature = nameOrIdURL.replace(/http/, "https")
        try {
          const res = await fetch(creature);
          const data = await res.json();
          const {} = data;
          searchCreatureData(data)
        } catch (err) {
          console.log(err)
        }
      }

const searchCreatureData = (data) => {
  const creatureType = data.types.map((i) => 
          i.type.name);
  const creatureStatName = data.stats.map((i) =>
          i.stat.name)
  const creatureBaseStats = data.stats.map((i) =>
          i.base_stat)
  let typeText = "";

  document.getElementById("pokemon-name").innerHTML = data.name.toUpperCase();
      document.getElementById("pokemon-id").innerHTML = `#${data.id}`;
      document.getElementById("weight").innerHTML = `Weight: ${data.weight}`;
      document.getElementById("height").innerHTML = `Height: ${data.height}`;
      document.getElementById("icon").innerHTML = `<img id="sprite" class="critter-icon" src="${data.sprites.front_default}" alt="${data.name}" />`;

  creatureType.forEach((i) => {
    if (i === "ice") {
    typeText += `<p class="critter-ice">${i}</p>`
  }
  else if (i === "water") {
    typeText += `<p class="critter-water">${i}</p>`
  }
  else if (i === "electric") {
    typeText += `<p class="critter-electric">${i}</p>`
  }
  else if (i === "ghost") {
    typeText += `<p class="critter-ghost">${i}</p>`
  }
  else if (i === "fire") {
    typeText += `<p class="critter-fire">${i}</p>`
  }
  else if (i === "normal") {
    typeText += `<p class="critter-normal">${i}</p>`
  }
  else if (i === "fighting") {
    typeText += `<p class="critter-fighting">${i}</p>`
  }
  else if (i === "flying") {
    typeText += `<p class="critter-flying">${i}</p>`
  }
  else if (i === "poison") {
    typeText += `<p class="critter-poison">${i}</p>`
  }
  else if (i === "ground") {
    typeText += `<p class="critter-ground">${i}</p>`
  }
  else if (i === "rock") {
    typeText += `<p class="critter-rock">${i}</p>`
  }
  else if (i === "bug") {
    typeText += `<p class="critter-bug">${i}</p>`
  }
  else if (i === "steel") {
    typeText += `<p class="critter-steel">${i}</p>`
  }
  else if (i === "grass") {
    typeText += `<p class="critter-grass">${i}</p>`
  }
  else if (i === "psychic") {
    typeText += `<p class="critter-psychic">${i}</p>`
  }
  else if (i === "dragon") {
    typeText += `<p class="critter-dragon">${i}</p>`
  }
  else if (i === "dark") {
    typeText += `<p class="critter-dark">${i}</p>`
  }
  else if (i === "fairy") {
    typeText += `<p class="critter-fairy">${i}</p>`
  }
  else if (i === "stellar") {
    typeText += `<p class="critter-stellar">${i}</p>`
  }
  else if (i === "unknown") {
    typeText += `<p class="critter-unknown">${i}</p>`
  }
  })
  document.getElementById("types").innerHTML = typeText;



  creatureStatName.forEach((i) => {

    switch (i) {
      case "hp": document.getElementById("hp").innerHTML = `${creatureBaseStats[0]}`
      break;
      case "attack": document.getElementById("attack").innerHTML = `${creatureBaseStats[1]}`
      break;
      case "defense": document.getElementById("defense").innerHTML = `${creatureBaseStats[2]}`
      break;
      case "special-attack": document.getElementById("special-attack").innerHTML = `${creatureBaseStats[3]}`
      break;
      case "special-defense": document.getElementById("special-defense").innerHTML = `${creatureBaseStats[4]}`
      break;
      case "speed": document.getElementById("speed").innerHTML = `${creatureBaseStats[5]}`
      break;
    }

  })

      
}



searchBtn.addEventListener("click", () => {
  
  if (isPopulated) {
    searchPoke();
  }
  if (!found) {
    alert("Pokémon not found");
  }
})

const test94 = () => {
  document.getElementById("search-input").value = 94;
  document.getElementById("search-button").click()

}
//test94()