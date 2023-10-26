let data = [
    {
        id:1,name:"renu",email:"renu@gamail.com"
    },
    {
        id:2,name:"renu2",email:"renu2@gamail.com"
    }


]
 const readAll = () => {
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object) ;

    var ele = " ";

    objectdata.map(v => (
        ele += `<tr>

        <td>${v.name}</td>
        <td>${v.email}</td>
        <td><button onclick="{edit(${v.id})}">edit</button>
        <button onclick="{delet(${v.id})}">delete</button></td>
        </tr> ` 
    ))
    tabledata.innerHTML = ele;

 }

 

 function Add(){
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    
    var newobject = {id:3, name:name, email:email}

    data.push(newobject);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";


    readAll();
 }
 function edit(id){
    document.querySelector(".update_form").style.display = "block";
    let obj = data.find(v => v.id === id);

    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".id").value = obj.id;


 }
 function create() {

    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";

    
 }

 function update() {
   var name = document.querySelector(".uname").value ;
   var email= document.querySelector(".uemail").value ;
   var id = Number(document.querySelector(".id").value) ;

   var index = data.findIndex(v => v.id === id);
   data[index] = {id,name, email};

   document.querySelector(".update_form").style.display = "none";
   
   readAll();
 }
 function delet(id){

    data = data.filter( v => v.id !== id )
    readAll();
 }

