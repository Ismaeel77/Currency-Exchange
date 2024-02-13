// Select Element for right box
let selectBtn1 = document.querySelector(".dropdown .btn-1");
let options1 = document.querySelectorAll(".dropdown .dropdown-menu .list-1 .option");

options1.forEach((option) => {
  option.addEventListener("click", (e) => {
    selectBtn1.innerHTML = e.target.innerHTML;
  });
});

// Select Element For Left Box
let selectBtn2 = document.querySelector(".dropdown .btn-2");
let options2 = document.querySelectorAll(".dropdown .dropdown-menu .list-2 .option");


options2.forEach((option) => {
  option.addEventListener("click", (e) => {
      selectBtn2.innerHTML = e.target.innerHTML;
  });
});


// Add More Currencies
let currencySection = document.querySelector("#currencies");
let addBtn = currencySection.querySelector(".more-btn");
let lastAd = currencySection.querySelector(".last-ad");
let flagsArray = [
  "Flags-0",
  "Flags-1",
  "Flags-2",
  "Flags-3",
  "Flags-4",
  "Flags-5",
  "Flags-6",
  "Flags-7",
  "Flags-8",
  "Flags-9",
  "Flags-10",
  "Flags-11",
  "Flags-12",
  "Flags-13",
  "Flags-14",
  "Flags-15",
  "Flags-16",
  "Flags-17",
  "Flags-18",
  "Flags-19",
];

addBtn.addEventListener("click", () => {
  // Remove the button & ad
  currencySection.removeChild(addBtn);
  currencySection.removeChild(lastAd);

  // Create a new row
  let row = document.createElement("div");
  row.setAttribute("class", "row gap-sm-2 gap-md-4 mb-3 me-auto");

  for (let i = 0; i <= 4; i++) {
    // Create currency card
    let card = document.createElement("div");
    card.setAttribute("class", "col-md-2 col-sm-6 currency-card");
    // Create Image
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src", "");
    let randomNum = Math.floor(Math.random() * flagsArray.length);
    cardImg.src = `assets/Flags-${randomNum}.png`;

    // Create card text
    let cardText = document.createElement("p");
    cardText.setAttribute("class", "mt-2 mb-2");
    cardText.innerText = "الجنية اللباني \nGBP";

    // Create price
    let cardPrice = document.createElement("span");
    cardPrice.setAttribute("class", "number fw-bold");
    cardPrice.textContent = "24.55";

    // Add Image & Text & Price to card
    card.appendChild(cardImg);
    card.appendChild(cardText);
    card.appendChild(cardPrice);

    // Add Card to the new row
    row.appendChild(card);
  }

  // Add the new row to the section
  currencySection.appendChild(row);

  // Add the button & ad
  currencySection.appendChild(addBtn);
  currencySection.appendChild(lastAd);
});


// Control Setting Box
let settingBox = document.querySelector(".setting-box");
let setIcon = document.querySelector(".setting-box .set-box i.fa-gear");

setIcon.onclick = function () {
  settingBox.classList.toggle("opened");
  this.classList.toggle("fa-spin");
};

// Check If There's Colors In Local Storage
let mainColors = localStorage.getItem("colors-option");
let bodyColor = localStorage.getItem("body-color");
let cardColor = localStorage.getItem("card-color");
let cardTextColor = localStorage.getItem("card-text-color");
// If There's a Color In Local Storage Set This Color
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  document.documentElement.style.setProperty("--body-color", bodyColor);
  document.documentElement.style.setProperty("--card-color", cardColor);
  document.documentElement.style.setProperty("--card-text-color", cardTextColor);

  // Remove Class Active From All Elements
  document.querySelectorAll(".colors-list li").forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color === mainColors) {
      // Add Class Active To Clicked Element
      ele.classList.add("active");
    }
  });
}

// Switch Colors
let colorsLis = document.querySelectorAll(".colors-list li");
colorsLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Main Color To The Clicked Item
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
    if ( document.documentElement.style.getPropertyValue("--main-color") === "#000000") {
      document.querySelector("#intro").style.backgroundBlendMode = "normal";
    } else {
      document.querySelector("#intro").style.backgroundBlendMode = "overlay";
    }
    // Add Color To Local Storage
    localStorage.setItem("colors-option", e.target.dataset.color);
    // Remove Class Active From All Elements
    handleActive(e);
  });
});

// Switch Colors For Body
let bodyColorsLis = document.querySelectorAll(".body-colors-list li");
bodyColorsLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Main Color To The Clicked Item
    document.documentElement.style.setProperty("--body-color",e.target.dataset.color);
    // Add Color To Local Storage
    localStorage.setItem("body-color", e.target.dataset.color);
    // Remove Class Active From All Elements
    handleActive(e);
  });
});

// Switch Colors For Cards
let cardColorsLis = document.querySelectorAll(".card-colors-list li");
cardColorsLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Main Color To The Clicked Item
    document.documentElement.style.setProperty("--card-color",e.target.dataset.color);
    document.documentElement.style.setProperty("--card-text-color", "#fff");
    // Add Color To Local Storage
    localStorage.setItem("card-color", e.target.dataset.color);
    localStorage.setItem("card-text-color", "#fff");
    // Remove Class Active From All Elements
    handleActive(e);
  });
});

// Handle Active State
function handleActive(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });

  // Add Class Active To Clicked Element
  event.target.classList.add("active");
}

// Reset Options
document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear() ====> Remove All Data In LocalStorage If There Is Important Data Will Remove It For This Don't Use It In All Times
  localStorage.removeItem("colors-option");

  window.location.reload();
};
