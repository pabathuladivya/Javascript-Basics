function ValidateEmail(inputText)
{
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/){
    document.getElementById("form1").innerHTML="valid"
}else{
    document.getElementById("form1").innerHTML="valid"
}
}