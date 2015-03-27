/**
 * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
 */
/****************/
// Création du bouton de modification
  var modify = document.createElement('button');
  modify.setAttribute('class', 'button modifyCat');
  modify.innerHTML = 'Modification';
  // Initialisation du click sur le bouton de modification
  initClickModifyCat(modify);
  
  // Création du bouton de suppression
  var trash = document.createElement('button');
  trash.setAttribute('class', 'button trashCat');
  trash.innerHTML = 'Poubelle';
  // Initialisation du click sur le bouton de suppression
  initClickTrashCat(trash);

// Récupère les éléments du corps du tableau ayant class="trashCat" 
var click_trashCat = document.getElementsByTagName('tbody')[0].getElementsByClassName('trashCat');
var nb_click_trashCat = click_trashCat.length;
// Boucle sur les éléments trash (<button>)
for (var i = 0; i < nb_click_trashCat; ++i)
{
  // Initialisation des événements sur les éléments trash (<button>)
  initClickTrashCat(click_trashCat[i]);
}

// Récupère les éléments du corps du tableau ayant class="modifyCat"
var click_modifyCat = document.getElementsByTagName('tbody')[0].getElementsByClassName('modifyCat');
var nb_click_modifyCat = click_modifyCat.length;
// Boucle sur les éléments modify (<button>)
for (var i = 0; i < nb_click_modifyCat; ++i)
{
  // Initialisation des événements sur les éléments modify (<button>)
  initClickModifyCat(click_modifyCat[i]);
}

function initClickModifyCat(click_elem)
{
  if (click_elem)
  {
    // Teste si la méthode addEventListener existe (Non IE)
    if (click_elem.addEventListener)
    {
      // Associe à l'événement click la fonction modifyData (Non IE)
      click_elem.addEventListener('click', modifyCat, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction modifyData (IE)
      click_elem.attachEvent('onclick', modifyCat);
    } 
  }
  
} // initClickModify(click_elem)

function initClickTrashCat(click_elem)
{
  if (click_elem)
  {
      // Teste si la méthode addEventListener existe (Non IE)
      if (click_elem.addEventListener)
      {
      // Associe à l'événement click la fonction confirmDelete (Non IE)
      click_elem.addEventListener('click', confirmDeleteCat, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction confirmDelete (IE)
      click_elem.attachEvent('onclick', confirmDeleteCat);
    } 
  }

} // initClickTrashCat(click_elem)