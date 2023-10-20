let listFormCont = document.getElementById("listFormContainer");
let formCont = document.getElementById("formContainer");
let photoEl = document.getElementById("photo");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let phoneEl = document.getElementById("phone");
let skillsEl = document.getElementById("skills");
let genderEl = document.getElementById("gender");

let imageSrc;
photoEl.addEventListener("change", function(event) {
    imageSrc = URL.createObjectURL(event.target.files[0]);

});


formCont.addEventListener("submit", function(event) {
    event.preventDefault();
    let listItemCon = document.createElement("li");
    listItemCon.classList.add("list-item", "d-flex", "flex-column", "justify-content-center");
    listFormCont.appendChild(listItemCon);


    let imgCon = document.createElement("div");
    imgCon.classList.add("img-con", "d-flex", "flex-row", "justify-content-center");
    listItemCon.appendChild(imgCon);

    let photoImg = document.createElement("img");
    photoImg.setAttribute("src", imageSrc);
    photoImg.classList.add("img");
    imgCon.appendChild(photoImg);

    let name = document.createElement("p");
    name.classList.add("para-name");
    name.textContent = "Full Name : " + nameEl.value;
    listItemCon.appendChild(name);

    let email = document.createElement("p");
    email.classList.add("para-name");
    email.textContent = "E-mail : " + emailEl.value;
    listItemCon.appendChild(email);

    let num = document.createElement("p");
    num.classList.add("para-name");
    num.textContent = "Phone : " + phoneEl.value;
    listItemCon.appendChild(num);

    let gender = document.createElement("p");
    gender.classList.add("para-name");
    gender.textContent = "Gender : " + genderEl.value;
    listItemCon.appendChild(gender);

    let skills = document.createElement("p");
    skills.classList.add("para-name");
    skills.textContent = "Skills : " + skillsEl.value;
    listItemCon.appendChild(skills);
});