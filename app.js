
function setData(){

  document.getElementById("registerform").style.display = "block";
  document.getElementById("searchresult").style.display = "none";
  var name= document.getElementById('sellername').value;
  var address= document.getElementById('address').value;
  var city= document.getElementById('city').value;
  var phone= document.getElementById('phone').value;
  var email= document.getElementById('email').value;
  var yearmfg= document.getElementById('yearmfg').value;
  var carmfg= document.getElementById('carmfg').value;
  var carmodel= document.getElementById('carmodel').value;


  if(name.trim().length==0 || address.trim().length==0 || city.trim().length==0 || phone.trim().length!=10 || email.trim().length==0 || yearmfg.trim().length==0 || carmfg.trim().length==0 || carmodel.trim().length==0){
     alert("Please enter data for all fields");

   }else{

    if(!ValidateEmail(email)){
      return;
    }

    if(!ValidateYear(yearmfg)){
      return;
    }

    if(!ValidatePhone(phone)){
      return;
    }

    

     var user={
       'name':name,
       'address':address,
       'city':city,
       'phone':phone,
       'email':email,
       'yearmfg':yearmfg,
       'carmfg':carmfg,
       'carmodel':carmodel
     };
    console.log(user);
     var users =JSON.parse(localStorage.getItem('user'));
     if(users){
       users.push(user);
     }else{
       users=[];
       users.push(user);
     }
     localStorage.setItem('user', JSON.stringify(users));
     alert("User data Added")
   }


}

function getData(){
var rows = document.getElementById('userinfo').getElementsByTagName("tr").length;
for (var i = 1; i < rows; i++) {
document.getElementById("userinfo").deleteRow(1);
}
document.getElementById("registerform").style.display = "none";
document.getElementById("searchresult").style.display = "block";
var users=JSON.parse(window.localStorage.getItem('user'));
if(users){

  var table = document.getElementById("userinfo");
var count=1
var search=document.getElementById("search").value;
  if(search && search.trim().length>0){

    users.forEach((user)=>{

      if(search==user.name ){

        var row = table.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = user.name;
        cell2.innerHTML = user.address;
        cell3.innerHTML = user.city;
        cell4.innerHTML = user.phone;
        cell5.innerHTML = user.email;
        cell6.innerHTML = user.yearmfg;
        cell7.innerHTML = user.carmfg;
        cell8.innerHTML = user.carmodel;
         count++;
      }

     
    });
  }else{

    users.forEach((user)=>{
        var row = table.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = user.name;
        cell2.innerHTML = user.address;
        cell3.innerHTML = user.city;
        cell4.innerHTML = user.phone;
        cell5.innerHTML = user.email;
        cell6.innerHTML = user.yearmfg;
        cell7.innerHTML = user.carmfg;
        cell8.innerHTML = user.carmodel;





      count++;
    });
  }

}else{
  alert("No Data");
}

}



function openDisplay(){
  location.href="display.html";
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    alert("You have entered an invalid email address!")
    return false;
}

function ValidateYear(yearmfg) {
 var year=parseInt(yearmfg);
 if(year>=2008 && year <=2019){
  return true;
 }
alert("Enter year between 2008 and 2019");
 return false;
}

function ValidatePhone(phone) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     if(regex.test(phone)){
      return true;
     }
     alert("Valid phone number");
     return false;
}

