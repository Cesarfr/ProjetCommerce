// Création du bouton de modification
  var modifyS = document.createElement('button');
  modifyS.setAttribute('class', 'button modifySubCat');
  modifyS.innerHTML = 'Modification';
  // Initialisation du click sur le bouton de modification
  initClickModifySubCat(modifyS);
  
  // Création du bouton de suppression
  var trashS = document.createElement('button');
  trashS.setAttribute('class', 'button trashSubCat');
  trashS.innerHTML = 'Poubelle';
  // Initialisation du click sur le bouton de suppression
  initClickTrashSubCat(trashS);

// Récupère les éléments du corps du tableau ayant class="trashSubCat" 
var click_trashSubCat = document.getElementsByTagName('tbody')[0].getElementsByClassName('trashSubCat');
var nb_click_trashSubCat = click_trashSubCat.length;
// Boucle sur les éléments trash (<button>)
for (var i = 0; i < nb_click_trashSubCat; ++i)
{
  // Initialisation des événements sur les éléments trash (<button>)
  initClickTrashSubCat(click_trashSubCat[i]);
}

// Récupère les éléments du corps du tableau ayant class="modifySubCat"
var click_modifySubCat = document.getElementsByTagName('tbody')[0].getElementsByClassName('modifySubCat');
var nb_click_modifySubCat = click_modifySubCat.length;
// Boucle sur les éléments modify (<button>)
for (var i = 0; i < nb_click_modifySubCat; ++i)
{
  // Initialisation des événements sur les éléments modify (<button>)
  initClickModifySubCat(click_modifySubCat[i]);
}

function initClickModifySubCat(click_elem)
{
  if (click_elem)
  {
    // Teste si la méthode addEventListener existe (Non IE)
    if (click_elem.addEventListener)
    {
      // Associe à l'événement click la fonction modifyData (Non IE)
      click_elem.addEventListener('click', modifySub, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction modifyData (IE)
      click_elem.attachEvent('onclick', modifySub);
    } 
  }
  
} // initClickModify(click_elem)

function initClickTrashSubCat(click_elem)
{
  if (click_elem)
  {
      // Teste si la méthode addEventListener existe (Non IE)
      if (click_elem.addEventListener)
      {
      // Associe à l'événement click la fonction confirmDelete (Non IE)
      click_elem.addEventListener('click', confDelSubCat, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction confirmDelete (IE)
      click_elem.attachEvent('onclick', confDelSubCat);
    } 
  }

} // initClickTrashCat(click_elem)