// Functionize Minecraft Fishing Start Code

//vars
let storageEl = document.getElementById("storage");

//fish count vars
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //determine selected character
  let character = document.getElementById("character-select").value;

  //vars
  let fishPicOut = document.getElementById("result-img");
  let randNum = Math.random();

  if (character === "steve") {
    //fish with steve
    if (randNum < 0.7) {
      fishPicOut.src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      storageEl.innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.9) {
      fishPicOut.src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      storageEl.innerHTML += "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.95) {
      fishPicOut.src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      storageEl.innerHTML += "<img src='img/Tropical-Fish.png'>";
    } else {
      fishPicOut.src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
      storageEl.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "alex") {
    //fish with alex
    if (randNum < 0.1) {
      fishPicOut.src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      storageEl.innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.2) {
      fishPicOut.src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      storageEl.innerHTML += "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.5) {
      fishPicOut.src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      storageEl.innerHTML += "<img src='img/Tropical-Fish.png'>";
    } else {
      fishPicOut.src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
      storageEl.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "villager") {
    //fish with alex
    if (randNum < 0.25) {
      fishPicOut.src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      storageEl.innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.5) {
      fishPicOut.src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      storageEl.innerHTML += "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.75) {
      fishPicOut.src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      storageEl.innerHTML += "<img src='img/Tropical-Fish.png'>";
    } else {
      fishPicOut.src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
      storageEl.innerHTML += "<img src='img/Pufferfish.png'>";
    }
  }
}

// second part of the assignment
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");

//event listeners
until200Btn.addEventListener("click", until200Func);
plus5Btn.addEventListener("click", plus5Func);

function until200Func() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
  }
}

function plus5Func() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

//do it yourself parts
let scaleInptEl = document.getElementById("scale-inpt");

scaleInptEl.addEventListener("change", scaleFunc);

function scaleFunc() {
  let target = scaleInptEl.value;
  for (let i = 0; i <= target; i++) {
    fishBtnClicked();
  }
}

let sortBtnEl = document.getElementById("sort-btn");

sortBtnEl.addEventListener("click", sortStorage);

function sortStorage() {
  storageEl.innerHTML = "";
  for (let i = 0; i < numCod; i++) {
    storageEl.innerHTML += "<img src='img/Raw-Cod.png'>";
  }
  for (let i = 0; i < numSalmon; i++) {
    storageEl.innerHTML += "<img src='img/Raw-Salmon.png'>";
  }
  for (let i = 0; i < numTropical; i++) {
    storageEl.innerHTML += "<img src='img/Tropical-Fish.png'>";
  }
  for (let i = 0; i < numPuffer; i++) {
    storageEl.innerHTML += "<img src='img/Pufferfish.png'>";
  }
}
