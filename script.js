let inputbox = document.querySelector("input");
let button = document.querySelector("#btn");
let list = document.querySelector(".list");


let string = "";
let same = () => {
    if (inputbox.value == "") {
        alert("You need to write a task");
    }
    else {
        string = document.createElement("li");
        string.innerHTML = inputbox.value;
        list.appendChild(string);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        string.appendChild(span);
        inputbox.value = "";
        getdata();
    }
}

button.addEventListener('click', same)
inputbox.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
       same();
    }
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    }

    else if (e.target.tagName === "SPAN")
        e.target.parentElement.remove();
    getdata();


});
let getdata = () => {
    localStorage.setItem('data', list.innerHTML);
}
let savedata = () => {
    list.innerHTML = localStorage.getItem('data');

}
savedata();