// Open & Close Functios for the right box
let selectBtn1 = document.querySelector(".dropdown .btn-1");
let currencyList1 = document.querySelector(".dropdown .dropdown-menu .list-1");
let options1 = currencyList1.querySelectorAll(".option");

selectBtn1.addEventListener("click", () => {
  currencyList1.classList.toggle("active");
});

options1.forEach((option) => {
  option.addEventListener("click", (e) => {
    options1.forEach((opt) => {
      opt.classList.remove("active");
    });
    if (!option.classList.contains("active")) {
      e.target.classList.add("active");
      selectBtn1.innerHTML = e.target.innerHTML;
      currencyList1.classList.toggle("active");
    }
  });
});

// Open & Close Functios For The Left Box
let selectBtn2 = document.querySelector(".dropdown .btn-2");
let currencyList2 = document.querySelector(".dropdown .dropdown-menu .list-2");
let options2 = currencyList2.querySelectorAll(".option");

selectBtn2.addEventListener("click", () => {
  currencyList2.classList.toggle("active");
});

options2.forEach((option) => {
  option.addEventListener("click", (e) => {
    options2.forEach((opt) => {
      opt.classList.remove("active");
    });
    if (!option.classList.contains("active")) {
      e.target.classList.add("active");
      selectBtn2.innerHTML = e.target.innerHTML;
      currencyList2.classList.toggle("active");
    }
  });
});
