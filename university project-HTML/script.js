


function sendMail() {
var xin=document.getElementById("onom");
var mail=document.getElementById("mail");
var papak=mail.value.indexOf("@");
var telia=mail.value.lastIndexOf(".");
if (papak<1 || telia<papak+2 || telia+2>=mail.length)       //elegxos mail kai apostoli email 
{
   alert("Λάθος διεύθυνση e-mail");
  
   }
   else{
     alert ("Τα δεδομένα αυτά είναι σωστά " + " "+" Όνομα="+ xin.value+" "+"email="+mail.value);
	  document.getElementById("stoi").reset();
	  
}
}

 