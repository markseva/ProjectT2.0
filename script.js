togglePic = true;

let init = function() {

};

let createTable = function () {

    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");


    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");

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

    data1.onclick = addClass(this);

};


    let addClass = function(id) {
            id.classList.add("ChangeThing") ;

            };

    let removeClass = function (id) {
        id.classList.remove("Addpic");
          };


/*let toggleClass = function () {
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

};*/
