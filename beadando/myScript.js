function hideShow(){
    let x = document.getElementById("hidden");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function listAdd(){
    let input = document.getElementById("counryName").value;
    var list=document.getElementById("countries").innerHTML;
    if (!isFilled(input)){return alert("Üres bemenet!")}

if (list.indexOf(input) ==-1) {

        var tmp = document.getElementById("countries").innerHTML += "<li>" + input + "</li>";
}
else {return alert("Már létezik!")}

}

function isFilled(fieldValue){
    if (fieldValue==""||fieldValue==" "){

        return false;
    }
    return true;
}

function validateLname(){

    var lName=document.getElementById("lname").value;

    if (lName.includes(" ")||lName.charAt(0)===lName.charAt(0).toLowerCase()){
        return false;


    }
    else{return  true;}
}
function validateFname(){

    var fName=document.getElementById("fname").value;
    if (fName.includes(" ")||fName.charAt(0)===fName.charAt(0).toLowerCase()){
        return false;


    }
    else {return true;}
}
function validatePassword(){
    var password=document.getElementById("password").value;
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if (password.length<8){
    return false;

    }
   if (!reg.test(password)){
        return false;

    }
   return true;
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        return false;


    }
    else {return true}
}
var registerdEmail=[];
function validate(){
    var wrongInputs=[];
    var emptyInputs=[];
    var data=[];
    var lName=document.getElementById("lname").value;
    var fName=document.getElementById("fname").value;
    var age=document.getElementById("age").value;
    var sex=document.getElementById("sex").value;
    var password=document.getElementById("password").value;
    var favMeal=document.getElementById("favmeal").value;
    var howRadios=document.getElementsByName("status");
    var email = document.getElementById("email").value;
    var color=document.getElementById("color").value;
    var date=document.getElementById("date").value;

    //Regisztrálva van e
    if (registerdEmail.includes(email))
    {
        return alert("Ez az e-mail cím már regisztrálva van!");
    }
    //Required
    if (!isFilled(lName)){emptyInputs.push("Vezetéknév")}
    if (!isFilled(fName)){emptyInputs.push("Keresztnév")}
    if (!isFilled(age)){emptyInputs.push("Kor")}
    if (!isFilled(password)){emptyInputs.push("Jelszó")}
    if (!isFilled(email)){emptyInputs.push("Email")}

    if (emptyInputs.length>0){
        return alert("A következő kötelező mezők üresek: "+emptyInputs)
    }

    //Valid
    if (!validateLname()){wrongInputs.push("Vezetéknév")}
    if (!validateFname()){wrongInputs.push("Keresztnév")}
    if (age<0||age>110){wrongInputs.push("Kor")}
    if (!validatePassword()){wrongInputs.push("Jelszó")}
    if (!validateEmail()){wrongInputs.push("Email")}

    if (wrongInputs.length>0){
        return alert("A következő mezők nem felelnek meg a formai követelményeknek: "+wrongInputs)
    }

    //Data push
    data.push(lName);
    data.push(fName);
    data.push(age);
    data.push(sex);
    data.push(password);
    if (isFilled(favMeal)){
        data.push(favMeal);
    }
    for (var i=0;i<howRadios.length;i++){
        if (howRadios[i].checked){
            data.push(howRadios[i].value);
        }
    }
    data.push(email);
    registerdEmail.push(email);
    data.push(color);
   if (isFilled(date)){
        data.push(date);
    }


   alert("Regisztrált adatai:\n"+data);
}

function smolAme() {
    $('#smolAme').css({left:0});
    $('#smolAme').animate({
        left: '+=1400',
    }, {
        duration: 1000,
        easing: 'linear',
        complete: smolAme
    });
}

function hachama(){

    $('#hachama').animate({left:'+=150',top:'+=150'},{
        duration: 1000,
        easing: 'linear',
        complete:function (){$('#hachama').animate({top: '-=150'},{
            duration:1000,
            easing:'linear',
            complete:function (){$('#hachama').animate({left:'-=150',top:'+=150'},{
                duration: 1000,
                easing: 'linear',
                complete:function (){$('#hachama').animate({top:'-=150'},{
                    duration:1000,
                    easing:'linear',
                    complete:hachama
                })}
            })}
        })}

    })

}

function korone() {
    var randomnumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;

    switch (randomnumber) {
        case 1:{
            $('#korone').animate({left:'+=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 2:{
            $('#korone').animate({left:'-=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 3:{
            $('#korone').animate({top:'-=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 4:{
            $('#korone').animate({top:'+=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 5:{
            $('#korone').animate({left:'+=50px',top:'+=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 6:{
            $('#korone').animate({left:'-=50px',top:'-=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 7:{
            $('#korone').animate({left:'-=50px',top:'+=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
        case 8:{
            $('#korone').animate({left:'+=50px',top:'-=50px'},{
                duration:1000,
                easing:'linear',
                complete:korone
            })
        }
    }

}