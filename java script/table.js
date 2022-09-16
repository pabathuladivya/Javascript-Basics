var myArray=[];
function myFun(){
    myArray = [
        {name:"jasmine",subject:"Telugu",Marks:"60"},
        {name:"Rosie",subject:"English",Marks:"50"},
        {name:"frooty",subject:"Maths",Marks:"39"},
    ]

    var html = "<table border='1'>"

    setTimeout(()=>{

        html +='<thead>'
        html += '<tr>';
        html +='<td>'+ 'Name'+'</td>';
        html +='<td>'+ 'subject'+'</td>';
        html +='<td>'+ 'Marks'+'</td>';
        html +='<td>'+ 'Eligible'+'</td>';
        html +='</tr>';
        html +='</thead>';

        for(i=0;i<myArray.length;i++){
            var result = myArray[i].Marks>50?"Eligible":"Not Eligible";
            html += '<tr>';
            html += '<td>'+myArray[i].name+'</td>';
            html += '<td>'+myArray[i].subject+'</td>';
            html += '<td>'+myArray[i].Marks+'</td>';
            html += '<td>'+{result}+'</td>';
            html += '</tr>';
        }

        document.getElementById("table").innerHTML=html;
    },);

    function update (){

    }
    

}
myFun();