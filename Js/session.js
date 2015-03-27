function initSess(event)
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
  var divError = document.getElementById('error');

  var param = 'LOGIN=' + document.getElementById('login').value;
  param += '&PASSWORD=' + document.getElementById('pwd').value;

  var data = actionForm('../Php/index.php?EX=doLogin', param);
  //alert(data.length);
  if (data==0) {
    alert('entra if');
    windowError("Le login ou le mot passe sont incorrectes!!");
    document.getElementById('user').reset();
  } else{
    alert('entra else');
    window.location="../Php/index.php?EX=initSe&prenom="+data[0]['prenom']+'&nom='+data[0]['nom'];
  }
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)