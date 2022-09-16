var myArray=[];
function funCall(){
     myArray = [
        {name:"lilly", lastname:"BBB", Age:18},
        {name:"frooty", lastname:"CCC", Age:20},
        {name:"rikki", lastname:"DDD", Age:22},
        {name:"kranthi", lastname:"EEE", Age:25},
    ]

    var html = "<table border='1'>"

    setTimeout(()=> {

        html+='<thead>'
        html+='<tr>';
        html+='<td>'+'Name'+'</td>';
        html+='<td>'+'LastName'+'</td>';
        html+='<td>'+'Age'+'</td>';
        html+='</tr>';
        html+='</thead>'

        for (var i = 0; i<myArray.length; i++){
            html+='<tr id="dd">';
            html+='<td id="cc">'+myArray[i].name+'</td>';
            html+='<td>'+myArray[i].lastname+'</td>';
            html+='<td>'+myArray[i].Age+'</td>';
            html+='</tr>'

        }

        function add(){
            for(i=0;i<myArray.length;i++){
                   
            }
        }

        document.getElementById("table").innerHTML = html;
    }) ;


    
}
funCall();
   
