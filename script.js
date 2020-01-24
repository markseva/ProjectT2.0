togglePic = true;

let init = function() {


  let btn = document.createElement("BUTTON");

  let image = document.getElementById("IMG1");



    btn.innerHTML = "Restart";
    btn.onclick = createTable;

    let content = document.getElementById("content");



    content.appendChild(btn);
};

let createTable = function () {

    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");


    let data1 = document.getElementById("IMG1");
    let data2 = document.getElementById("IMG2");
    let data3 = document.getElementById("IMG3");
    let data4 = document.getElementById("IMG4");
    let data5 = document.getElementById("IMG5");
    let data6 = document.getElementById("IMG6");
    let data7 = document.getElementById("IMG7");
    let data8 = document.getElementById("IMG8");
    let data9 = document.getElementById("IMG9");

    //Create the table with appendages

    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);


    row2.appendChild(data4);
    row2.appendChild(data5);
    row2.appendChild(data6);

    row3.appendChild(data7);
    row3.appendChild(data8);
    row3.appendChild(data9);


    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);


    let content = document.getElementById("content");
    content.appendChild(table);

};


    let addClass = function (id) {
         id.classList.add("ChangeThing");

            };

    let removeClass = function (id) {
        id.classList.remove("ChangeThing");
          };


let toggleClass = function (id) {
    id.classList.add("Addpic");

};

let togglePicture = function () {

    if (togglePic === true) {
        image.src = "X.png"
        togglePic = false;
    } else {
        image.src = "law.png";
        togglePic = true;
    }

};
