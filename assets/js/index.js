function postEditEvent() {
 const article = document.querySelector(".post__article");
 article.addEventListener("click", postEdit);
}

function postEdit(event) {
 let target = event.target;
 if (target.classList.contains("edit-post")
  && !target.classList.contains('show-popup')) {

  target.classList.add('show-popup');

  //create new dom elements
  const div = document.createElement("div");
  const ul = document.createElement("ul");

  //Add class to elements
  div.className = "edit-popup";
  ul.className = "list-group";

  const liTextContents = ["Edit", "Report", "Option 3"];

  //loop & create list dom elements
  for (let i = 0; i < 3; i++) {
   const li = document.createElement("li");
   li.className = "list-group-item";

   li.textContent = liTextContents[i];

   ul.appendChild(li);
  }

  div.appendChild(ul);

  target.parentElement.parentElement.appendChild(div);

 } else {
  if (target.classList.contains("edit-post")
   && target.classList.contains('show-popup')) {

   target.classList.remove('show-popup');

   const editPopup = document.querySelector('.edit-popup');
   editPopup.remove();

  }
 }
}

postEditEvent();