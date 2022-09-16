function addHtmlTableRow()
{
    
//     var table = document.getElementById("table");
//    let newRow = table.insertRow(table.length);
//       cell1 = newRow.insertCell(0),
//       cell2 = newRow.insertCell(1),
//       cell3 = newRow.insertCell(2),
//       cell4 = newRow.insertCell(3),
//       cell5 = newRow.insertCell(4),

//       fname = document.getElementById("fname").value;
//     femail = document.getElementById("femail").value;
//     fdate = document.getElementById("fdate").value;
//     fphone = document.getElementById("fphone").value;

//       cell1.innerHtml = fname;
//       cell2.innerHtml = femail;
//       cell3.innerHtml = fdate;
//       cell4.innerHtml = fphone;

    var table = document.getElementById("table");
       newRow = table.insertRow(table.length);
       cell1 = newRow.insertCell(0);
       fname = document.getElementById("fname").value;
       cell1.innerHtml = fname;
}
