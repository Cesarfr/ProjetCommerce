/**
 * Created by h14022425 on 19/11/14.
 */

function showContact () {
  changeContent('content', '../Php/index.php?EX=contact', '', 'initContact()');
}
function initContact(){
  var form_contact = document.getElementById('formCont');
  var telef = document.getElementById('tel');
  var mobile = document.getElementById('mob');

  if (form_contact)
  {  
    if (form_contact.addEventListener)
    {
      form_contact.addEventListener('submit', insertData, false);
      telef.addEventListener('keypress', isInteger, false);
      mobile.addEventListener('keypress', isInteger, false);
    } 
    else
    {
      form_contact.attachEvent('onsubmit', insertData);
      telef.attachEvent('onkeypress', isInteger);
      mobile.attachEvent('onkeypress', isInteger);
    }
  }
}
function insertData(event)
{
  // Récupère l'élément <form>
  var frm = event.target || event.srcElement;
  
  // Vérifie le formulaire
  if (!verifform(frm))
  {
    // Stoppe l'événement
    stopEvent(event);
    
    return false;
  }

  var param = 'NOM=' + document.getElementById('nom').value;
  param += '&PRENOM=' + document.getElementById('prenom').value;
  param += '&EMAIL=' + document.getElementById('email').value;
  param += '&TEL=' + document.getElementById('tel').value;
  param += '&MOB=' + document.getElementById('mob').value;

  var data = actionForm('../Php/index.php?EX=insertCont', param);

  document.getElementById('formCont').reset();
  windowError("Contact enregistré!!");
  setTimeout('goHome()',1000);
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)
function goHome () {
  location.href='../Php/index.php';
}