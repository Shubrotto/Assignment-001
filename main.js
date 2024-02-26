const header = document.querySelector("#header");
const clickUp = document.querySelector(".click_up");
const scrollBtn = document.querySelector("#top");
const contactBtn = document.querySelector(".contact_btn");
const contactFormMain = document.querySelector(".contact_form_main");
const subNavClick = document.querySelector(".collapse");
const NavLists = document.querySelector(".nav_lists");
const NavListItems = document.getElementsByClassName(".nav_list");
for (let i = 0; i < NavListItems.length; i++) {
  NavListItems.classList.add("active");
  NavListItems[i].addEventListener("click", () => {
    const active = document.getElementsByClassName("active");
    console.log(active);
    active[0].className = active.className.replace("active", "");
    this.className += " active";
  });
}
window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? (header.style.background = "#e7e7e7")
    : (header.style.background = "white");
  window.pageYOffset > 100
    ? scrollBtn.classList.add("show_btn")
    : scrollBtn.classList.remove("show_btn");
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const navbar = document.querySelector("#navbar");
const menuIcon = document.querySelector(".menu_icon");

function showMenu() {
  navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
}

contactBtn.addEventListener("click", () => {
  contactBtn.style.textAlign = "start";
  const form = document.createElement("form");
  const formDiv = document.createElement("div");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  // form.classList.add("form");
  formDiv.classList.add("formDiv");
  btn.classList.add("button");
  btn.innerText = "SEND FEEDBACK";
  formDiv.innerHTML = `<div><label>First Name</label> <input class="fname"  /></div>
    <div><label>Last Name</label> <input  class="lname"  /></div>
    <div><label>Mobile No</label> <input class="mobile" /></div>
    <div><label>Email</label> <input class="email" /></div>
    <div class="message_div"><label>Message</label> <textarea name="" id="" cols="30" rows="10"></textarea> </div>`;
  // form.appendChild(formDiv);
  formDiv.appendChild(btn);
  contactFormMain.appendChild(formDiv);
  contactBtn.style.display = "none";

  formDiv.addEventListener("mouseenter", () => {
    formDiv.style.background = "lightgray";
    formDiv.style.color = "white";
  });

  formDiv.addEventListener("mouseleave", () => {
    formDiv.style.background = "";
    formDiv.style.color = "";
  });
});

// const st = [
//   {
//     id: 1,
//     name: "sk",
//     age: 22,
//   },
//   {
//     id: 2,
//     name: "fk",
//     age: 25,
//   },
//   {
//     id: 3,
//     name: "hf",
//     age: 30,
//   },
// ];

// const names = st.map((s) => "His Name is " + s.name + " and age is " + s.age);
// console.log(names);
