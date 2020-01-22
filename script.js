//togglePic = true;

//let init = function() {

    //.createElement() creates a new element to be added to the HTML file. This method accepts a parameter of the element's name you wish to add.
    //To use this method, we need to first create a var that represent the element we wish to add.
  //  let btn = document.createElement("BUTTON");

    //btn = <button></button>

    //btn.innerHTML = "Restart";
    //btn.onclick = createTable;


    //let content = document.getElementById("content");


    //content.appendChild(btn);



//};

/*let createTable = function () {

    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");
    let  row4 = document.createElement("TR");

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

let changeBackground = function(){

    let box1 = document.getElementById("R11");
    let box2 = document.getElementById("R12");
    let box3 = document.getElementById("R13");
    let box4 = document.getElementById("R21");
    let box5 = document.getElementById("R22");
    let box6 = document.getElementById("R23");
    let box7 = document.getElementById("R31");
    let box8 = document.getElementById("R32");
    let box9 = document.getElementById("R33");

    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "blue";
    box3.style.backgroundcolor = "yellow";
    box4.style.backgroundColor = "green";
    box5.style.backgroundColor = "blue";
    box6.style.backgroundcolor = "yellow";
    box7.style.backgroundColor = "green";
    box8.style.backgroundColor = "blue";
    box9.style.backgroundcolor = "yellow";

    box1.innerText = "OVER";
    box2.innerText = "Enter";
    box3.innerText = "DOWN";




};
*/
togglePic = true;

let init = function() {

    //.createElement() creates a new element to be added to the HTML file. This method accepts a parameter of the element's name you wish to add.
    //To use this method, we need to first create a var that represent the element we wish to add.

    //let btn = document.createElement("BUTTON"); // THIS ONLY CREATES ELEMENT AND DOESN'T ADD IT TO THE PAGE.

    //btn = <button></button>

    // btn.innerHTML = "CLICK ME";
    //  btn.onclick = togglePicture;

    image = document.createElement("IMG");
    image.onclick = togglePicture;
    image.src="Transparent.jpg";
    //.appendChild() will add the parameter element to the executing element.

    let content = document.getElementById("content");
    //content = <section></section?

    //content.appendChild(btn);
    content.appendChild(image);

};

let createTable = function () {

    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");
    let  row4 = document.createElement("TR");
    let colHeading1 = document.createElement("TH");
    let colHeading2 = document.createElement("TH");
    colHeading2.innerText = "McDonalds";
    let colHeading3 = document.createElement("TH");
    colHeading3.innerText = "Taco Bell";
    let colHeading4 = document.createElement("TH");
    colHeading4.innerText = "Wendy's";
    let rowHeading2 = document.createElement("TH");
    rowHeading2.innerText = "Sophomores";
    let rowHeading3 = document.createElement("TH");
    rowHeading3.innerText = "Junoirs";
    let rowHeading4 = document.createElement("TH");
    rowHeading4.innerText = "Senoirs";
    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    data1.innerText = "20";
    data2.innerText = "50";
    data3.innerText = "30";
    data4.innerText = "80";
    data5.innerText = "10";
    data6.innerText = "10";
    data7.innerText = "1";
    data8.innerText = "30";
    data9.innerText = "60";

    //Create the table with appendages

    row1.appendChild(colHeading1);
    row1.appendChild(colHeading2);
    row1.appendChild(colHeading3);
    row1.appendChild(colHeading4);

    row2.appendChild(rowHeading2);
    row2.appendChild(data1);
    row2.appendChild(data2);
    row2.appendChild(data3);

    row3.appendChild(rowHeading3);
    row3.appendChild(data4);
    row3.appendChild(data5);
    row3.appendChild(data6);

    row4.appendChild(colHeading4);
    row4.appendChild(data7);
    row4.appendChild(data8);
    row4.appendChild(data9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);

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

let setOringinal = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");
    let box4 = document.getElementById("block4");
    let box5 = document.getElementById("block5");
    let box6 = document.getElementById("block6");
    let box7 = document.getElementById("block7");
    let box8 = document.getElementById("block8");
    let box9 = document.getElementById("block9");





};


let mouseOver = function (id) {

    id.style.backgroundColor = ("yellow");
    id.innerText = "HELLO";
}

let mouseOut = function (id) {
    id.style.backgroundColor = "red";
    if (id === document.getElementById('block1')) {
        id.innerText = "OVER";
    } else if (id === document.getElementById('block2')) {
        id.innerText = "ENTER";
    } else
        id.innerText = "DOWN";
};

let addClass = function (id) {

    id.classList.add("blueBigBold");

};

let removeClass = function (id) {
    id.classList.remove("blueBigBold");

};

let toggleClass = function (id) {
    id.classList.toggle("blueBigBold");

};