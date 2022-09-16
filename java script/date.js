
 const Drop=["Day","Month","Year"]
 for(let i=0; i<Drop.length; i++){
     let opt= document.createElement("option");
     document.getElementById('n2').innerHTML+='<option id="'+i+'">'+Drop[i]+'</option>';  
 
 }


// function future(){
  
//   let a=document.getElementById('n1').value;
//   let d = new Date(a);
//   let c=document.getElementById('n3').value;
//   //let f= d.toString(d.setDate(d.getDate()+c));
//   //let f=d.setDate(d.getDate() +c);
  
//       let option = document.getElementById('n2').value;
//       if(option === "Date")
//       {
//           let b=document.getElementById('n2').value;
//           let f=d.getDate();
//           let g=d.getMonth()+1;
//           let h=d.getFullYear();
//           let e=parseInt(f)+parseInt(c)+"/"+g+"/"+h;
//           alert(e)
//           //console.log(option)
//       } else if(option==="Month"){
//           let j=document.getElementById('n2').value;
//           let f=d.getDate();
//           let g=d.getMonth()+1;
//           let h=d.getFullYear();
//           let e=f+"/"+(parseInt(g)+parseInt(c))+"/"+h;
//           alert(e)      
//           //onsole.log(option);
//       }else if(option==="Year"){
//           let k=document.getElementById('n2').value;
//           let f=d.getDate();
//           let g=d.getMonth()+1;
//           let h=d.getFullYear();
//           let e=f+"/"+g+"/"+(parseInt(h)+parseInt(c));
//           alert(e)      
  
//       }  
//   }

function future(){

  // debugger

   let a=document.getElementById('n1').value;

   let d = moment(formatDate).format('DD/MM/YYYY');

  //  let d = new Date(a);

   let c=document.getElementById('n3').value;

   //let f= d.toString(d.setDate(d.getDate()+c));

   //let f=d.setDate(d.getDate() +c);

   

       let option = document.getElementById('n2').value;

       if(option === "Day")
       
       {

           let b=document.getElementById('n2').value;

           let f=d.getDate();

           let g=d.getMonth()+1;

           let h=d.getFullYear();

           let e=parseInt(f)+parseInt(c)+"/"+g+"/"+h;

          //  alert(e)

           //console.log(option)

           document.getElementById("n4").value=e;
          } else if(option==="Month"){

            let j=document.getElementById('n2').value;

            let f=d.getDate();

            let g=d.getMonth()+1;

            let h=d.getFullYear();

            let e=f+"/"+(parseInt(g)+parseInt(c))+"/"+h;

           //  alert(e)      

            //onsole.log(option);

            document.getElementById("n4").value=e;

        }else if(option==="Year"){

            let k=document.getElementById('n2').value;

            let f=d.getDate();

            let g=d.getMonth()+1;

            let h=d.getFullYear();

            let e=f+"/"+g+"/"+(parseInt(h)+parseInt(c));

           //  alert(e)  

           document.getElementById("n4").value=e;  

    

        }  

    }


    function past(){

      // debugger
    
       let a=document.getElementById('n1').value;
    
       let d = new Date(a);
    
       let c=document.getElementById('n3').value;
    
       //let f= d.toString(d.setDate(d.getDate()+c));
    
       //let f=d.setDate(d.getDate() +c);
    
       
    
           let option = document.getElementById('n2').value;
    
           if(option === "Day")
    
           {
    
               let b=document.getElementById('n2').value;
    
               let f=d.getDate();
    
               let g=d.getMonth()+1;
    
               let h=d.getFullYear();
    
               let e=parseInt(f)-parseInt(c)+"/"+g+"/"+h;
    
              //  alert(e)
    
               //console.log(option)
    
               document.getElementById("n4").value=e;
              } else if(option==="Month"){
    
                let j=document.getElementById('n2').value;
    
                let f=d.getDate();
    
                let g=d.getMonth()+1;
    
                let h=d.getFullYear();
    
                let e=f+"/"+(parseInt(g)-parseInt(c))+"/"+h;
    
               //  alert(e)      
    
                //onsole.log(option);
    
                document.getElementById("n4").value=e;
    
            }else if(option==="Year"){
    
                let k=document.getElementById('n2').value;
    
                let f=d.getDate();
    
                let g=d.getMonth()+1;
    
                let h=d.getFullYear();
    
                let e=f+"/"+g+"/"+(parseInt(h)-parseInt(c));
    
               //  alert(e)  
    
               document.getElementById("n4").value=e;  
    
        
    
            }  
    
        }




 