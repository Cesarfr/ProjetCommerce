/* Listeners */
var click_logo = document.getElementById('logo');
if (click_logo)
{
    if (click_logo.addEventListener)
    {
        click_logo.addEventListener('click', showHome, false);
    }
    else
    {
        click_logo.attachEvent('onclick', showHome);
    }

    click_logo.style.cursor = 'pointer';
}

function showHome()
{
    // Regresa a la pagina de inicio
    location.replace('../Php');

} // showHome()

var click_carre = document.getElementById('carrerouge');
if (click_carre)
{
    if (click_carre.addEventListener)
    {
        click_carre.addEventListener('click', login, false);
    }
    else
    {
        click_carre.attachEvent('onclick', login);
    }

    click_carre.style.cursor = 'pointer';
}

function login(){
  location.replace('../Php/index.php?EX=login');
}

/* FORM LOGIN */
var form_login = document.getElementById('user');
if (form_login) {
  if (form_login.addEventListener) {
    form_login.addEventListener('submit', initSess, false);
  } else{
    form_login.attachEvent('onsubmit',initSess);
  }
}

/* FORMULAIRE DE CONTACT *///../Php/index.php?EX=contact

var cont = document.getElementById('cont');
if (cont)
{  
  if (cont.addEventListener)
  {
      cont.addEventListener('click', showContact, false);
  } 
  else
  {
      cont.attachEvent('onclick', showContact);
  }
}

/* CATEGORIE */
var form_categorie = document.getElementById('frmaddCat');
if (form_categorie) {
  if (form_categorie.addEventListener) {
    form_categorie.addEventListener('submit', insertCategorie, false);
  } else{
    form_categorie.attachEvent('onsubmit',insertCategorie);
  }
}


/* SUBCATEGORIE */
var frm_subcat = document.getElementById('frmAddScat');
if (frm_subcat) {
  if (frm_subcat.addEventListener) {
    frm_subcat.addEventListener('submit', insertSubCat, false);
  } else{
    frm_subcat.attachEvent('onsubmit',insertSubCat);
  }
}

/* PRODUIT */
var frm_prod = document.getElementById('frmAddProd');
var image_p = document.getElementById('image_p');
if (frm_prod) {
  if (frm_prod.addEventListener) {
    frm_prod.addEventListener('submit', insertProd, false);
    image_p.addEventListener('change', validateImage, false);
  } else{
    frm_prod.attachEvent('onsubmit',insertProd);
    image_p.attachEvent('onchange', validateImage);
  }
}
/* REL - SP */
var frm_sp = document.getElementById('frmAddSP');
if (frm_sp) {
  if (frm_sp.addEventListener) {
    frm_sp.addEventListener('submit', insertSP, false);
  } else{
    frm_sp.attachEvent('onsubmit',insertSP);
  }
}

/* REL - SP */
var frm_cp = document.getElementById('frmAddCP');
if (frm_cp) {
  if (frm_cp.addEventListener) {
    frm_cp.addEventListener('submit', insertCPr, false);
  } else{
    frm_cp.attachEvent('onsubmit',insertCPr);
  }
}
function stopEvent(event){
    // Teste si la méthode stopPropagation existe (Non IE)
    if (event.stopPropagation)
    {
        // Stoppe la propagation de l'événement (pas de bouillonnement)
        event.stopPropagation();
        // Remet l'événement à false
        event.preventDefault();
    }
    else
    {
        // Stoppe la propagation de l'événement (pas de bouillonnement)
        event.cancelBubble = true;
        // Remet l'événement à false
        event.returnValue = false;
    }

} // stopEvent(event)