
function setData(){
  alert("ok");
  var name= document.getElementById('sellername').value;
  var address= document.getElementById('address').value;
  var city= document.getElementById('city').value;
  var phone= document.getElementById('phone').value;
  var email= document.getElementById('email').value;
  var yearmfg= document.getElementById('yearmfg').value;
  var carmfg= document.getElementById('carmfg').value;
  var carmodel= document.getElementById('carmodel').value;
alert(name);
  var user={
    'name':name,
    'address':address,
    'city':city,
    'phone':phone,
    'email':email,
    'yearmfg':yearmfg,
    'carmfg':carmfg,
    'carmodel':carmodel
  }
//  console.log(user);
  var users =JSON.parse(localStorage.getItem('user'));
  if(users){
    users.push(user);
  }else{
    users=[];
    users.push(user);
  }
  localStorage.setItem('user', JSON.stringify(users));
}

function getData(){
var users=JSON.parse(window.localStorage.getItem('user'));
if(users){
  var table = document.getElementById("userinfo");
var count=1


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
   // document.getElementById('carinfo').innerHTML+='<li>'+user+'</li>';
    console.log(user.name);
    count++;
  });
}else{
  alert("No Data");
}

}

function renderUser(user){

}
