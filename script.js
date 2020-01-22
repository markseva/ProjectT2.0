togglePic = true;

let init = function() {


  let btn = document.createElement("BUTTON");

    btn.innerHTML = "Restart";
    btn.onclick = createTable;


    let content = document.getElementById("content");

    content.appendChild(btn);

    image = document.createElement("IMG");
    image.onclick = togglePicture;
    image.src="Transparent_X.png";




    content.appendChild(image);



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

let changeBackground = function() {

    let box1= document.getElementById("R11");
    let box2 = document.getElementById("R12");
    let box3 = document.getElementById("R13");
    let box4 = document.getElementById("R21");
    let box5 = document.getElementById("R22");
    let box6 = document.getElementById("R23");
    let box7 = document.getElementById("R31");
    let box8 = document.getElementById("R32");
    let box9 = document.getElementById("R33");

    box1.style.backgroundImage = "Transparent_X.png";
    box2.style.backgroundColor = "blue";
    box3.style.backgroundcolor = "yellow";
    box4.style.backgroundColor = "green";
    box5.style.backgroundColor = "blue";
    box6.style.backgroundcolor = "yellow";
    box7.style.backgroundColor = "green";
    box8.style.backgroundColor = "blue";
    box9.style.backgroundcolor = "yellow";


};

let setOringinal = function(){
    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");


};



let addClass = function (id) {

    id.classList.add("blueBigBold");

};

let removeClass = function (id) {
    id.classList.remove("blueBigBold");

};

let placeIMG = function () {



}




