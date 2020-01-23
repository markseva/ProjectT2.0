togglePic = true;

let init = function() {


  let btn = document.createElement("BUTTON");

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


    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    data1.id = "R11";
    data2.id = "R12";
    data3.id = "R13";
    data4.id = "R21";
    data5.id = "R22";
    data6.id = "R23";
    data7.id = "R31";
    data8.id = "R32";
    data9.id = "R33";

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

let togglePicture = function () {

    if (togglePic === true) {
        image.src = "Transparent_X.png";
        togglePic = false;
    } else {
        image.src = "law.png";
        togglePic = true;
    }
};






