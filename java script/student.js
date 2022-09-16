const students = [{
    Name:"sai",
    progress:[
         {subject:"Maths",Marks:50},  
         {subject:"science",Marks:45},
         {subject:"physics",Marks:40}
    ]
}]
   




document.getElementById("table").value = students;

function stu (){
    let a = document.getElementById("table").value;
    let b = document.getElementById("table").value;
    let c = document.getElementById("table").value;
    let output = document.getElementById("table").innerHTML=stu;
}