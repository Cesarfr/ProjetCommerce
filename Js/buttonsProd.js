// Création du bouton de modification
  var midifyP = document.createElement('button');
  midifyP.setAttribute('class', 'button modifyProd');
  midifyP.innerHTML = 'Modification';
  // Initialisation du click sur le bouton de modification
  initClickModifyProduct(midifyP);
  
  // Création du bouton de suppression
  var trashP = document.createElement('button');
  trashP.setAttribute('class', 'button trashProd');
  trashP.innerHTML = 'Poubelle';
  // Initialisation du click sur le bouton de suppression
  initClickTrashProduct(trashP);

// Récupère les éléments du corps du tableau ayant class="trashSubCat" 
var click_trashProd = document.getElementsByTagName('tbody')[0].getElementsByClassName('trashProd');
var nb_click_trashProd = click_trashProd.length;
// Boucle sur les éléments trash (<button>)
for (var i = 0; i < nb_click_trashProd; ++i)
{
  // Initialisation des événements sur les éléments trash (<button>)
  initClickTrashProduct(click_trashProd[i]);
}

// Récupère les éléments du corps du tableau ayant class="modifySubCat"
var click_modifyProd = document.getElementsByTagName('tbody')[0].getElementsByClassName('modifyProd');
var nb_click_modifyProd = click_modifyProd.length;
// Boucle sur les éléments modify (<button>)
for (var i = 0; i < nb_click_modifyProd; ++i)
{
  // Initialisation des événements sur les éléments modify (<button>)
  initClickModifyProduct(click_modifyProd[i]);
}

function initClickModifyProduct(click_elem)
{
  if (click_elem)
  {
    // Teste si la méthode addEventListener existe (Non IE)
    if (click_elem.addEventListener)
    {
      // Associe à l'événement click la fonction modifyData (Non IE)
      click_elem.addEventListener('click', modifyPro, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction modifyData (IE)
      click_elem.attachEvent('onclick', modifyPro);
    } 
  }
  
} // initClickModify(click_elem)

function initClickTrashProduct(click_elem)
{
  if (click_elem)
  {
      // Teste si la méthode addEventListener existe (Non IE)
      if (click_elem.addEventListener)
      {
      // Associe à l'événement click la fonction confirmDelete (Non IE)
      click_elem.addEventListener('click', confDelPro, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction confirmDelete (IE)
      click_elem.attachEvent('onclick', confDelPro);
    } 
  }

} // initClickTrashCat(click_elem)