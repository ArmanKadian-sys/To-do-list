if (!localStorage.getItem("count")) {
  localStorage.setItem("count", 1);
}
let my = document.querySelector("p");
if (!my) {
  Object.keys(localStorage).forEach((mykey) => {
    if (mykey == "List"+mykey.slice(4,6)) {
      let newtext = JSON.parse(localStorage.getItem(`${mykey}`)).text;
      let newdate = JSON.parse(localStorage.getItem(`${mykey}`)).date;
      let newid = JSON.parse(localStorage.getItem(`${mykey}`)).id;

      newElementAddition(newid, newtext, newdate);
    }
  });
}

function adding() {
  let countvar = localStorage.getItem("count");

  let obj = {
    text: document.querySelector("#my_input").value,
    date: document.querySelector("#date_input").value,
    id: `${countvar}`,
  };
  localStorage.setItem(`List${countvar}`, JSON.stringify(obj));

  newElementAddition(countvar, obj.text, obj.date);
  countvar++;
  localStorage.setItem("count", countvar);
}

function newElementAddition(id, text, date) {
  let adding = document.querySelector(".display_list");
  let para = document.createElement("p");
  let button = document.createElement("button");
  para.classList.add(`List${id}`);
  button.classList.add(`List${id}`);
  button.innerText = "Remove";
  button.addEventListener("click", (e) => {
    let to_remove = e.target.className;
    document
      .querySelector(".display_list")
      .removeChild(document.querySelector(`.${to_remove}`));
    document
      .querySelector(".display_list")
      .removeChild(document.querySelector(`.${to_remove}`));
    localStorage.removeItem(`${to_remove}`);
  });
  para.innerText = `Activity: ${text}        Date: ${date}`;
  adding.appendChild(para);
  adding.appendChild(button);
}
