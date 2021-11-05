function hideShow(){
    let x = document.getElementById("suprise");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function listAdd(){
    let input = document.getElementById("counryName").value;
    var list=document.getElementById("countries").innerHTML;
    if (input == ""){return alert("Üres bemenet!")}

if (list.indexOf(input) ==-1) {


        var tmp = document.getElementById("countries").innerHTML += "<li>" + input + "</li>";
}
else {return alert("Már létezik!")}



}
