var myArray = [];
function myFun(){
    myArray = [
        {FullName:"",phoneNo:"",email:"",country:"",state:"",}
    ]

    var html = "<table border='1'>"

   
        html+='<thead>'
        html+='<tr>';
        html+='<td>'+'FullName'+'</td>';
        html+='<td>'+'phoneNo'+'</td>';
        html+='<td>'+'email'+'</td>';
        html+='<td>'+'country'+'</td>';
        html+='<td>'+'state'+'</td>';
        html+='</tr>'
        html+='</thead>'
             
        for(i=0;i<myArray.length;i++){
            html+='<thead>'
            html+='<tr>';
            html+='<td>'+myArray.FullName+'</td>'
            html+='<td>'+myArray.phoneNo+'</td>'
            html+='<td>'+myArray.email+'</td>'
            html+='<td>'+myArray.country+'</td>'
            html+='<td>'+myArray.state+'</td>'
        }

        document.getElementById("table").innerHTML=html;

}
myFun();