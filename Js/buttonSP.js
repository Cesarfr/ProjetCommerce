 
// Création du bouton de suppression
var trashSP = document.createElement('button');
trashSP.setAttribute('class', 'button trashSP');
trashSP.innerHTML = 'Poubelle';
// Initialisation du click sur le bouton de suppression
initClickTrashSP(trashSP);

// Récupère les éléments du corps du tableau ayant class="trashSubCat" 
var click_trashSP = document.getElementsByTagName('tbody')[0].getElementsByClassName('trashSP');
var nb_click_trashSP = click_trashSP.length;
// Boucle sur les éléments trash (<button>)
for (var i = 0; i < nb_click_trashSP; ++i)
{
  // Initialisation des événements sur les éléments trash (<button>)
  initClickTrashSP(click_trashSP[i]);
}

function initClickTrashSP(click_elem)
{
  if (click_elem)
  {
      // Teste si la méthode addEventListener existe (Non IE)
      if (click_elem.addEventListener)
      {
      // Associe à l'événement click la fonction confirmDelete (Non IE)
      click_elem.addEventListener('click', confDelSP, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction confirmDelete (IE)
      click_elem.attachEvent('onclick', confDelSP);
    } 
  }

} // initClickTrashCat(click_elem)

// Création du bouton de modification
  var modifySP = document.createElement('button');
  modifySP.setAttribute('class', 'button modifySP');
  modifySP.innerHTML = 'Modification';
  // Initialisation du click sur le bouton de modification
  initClickModifySP(modifySP);

  // Récupère les éléments du corps du tableau ayant class="modifySP"
var click_modifySP = document.getElementsByTagName('tbody')[0].getElementsByClassName('modifySP');
var nb_click_modifySP = click_modifySP.length;
// Boucle sur les éléments modifySP (<button>)
for (var i = 0; i < nb_click_modifySP; ++i)
{
  // Initialisation des événements sur les éléments modifySP (<button>)
  initClickModifySP(click_modifySP[i]);
}

function initClickModifySP(click_elem)
{
  if (click_elem)
  {
    // Teste si la méthode addEventListener existe (Non IE)
    if (click_elem.addEventListener)
    {
      // Associe à l'événement click la fonction modifyData (Non IE)
      click_elem.addEventListener('click', modifySPr, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction modifyData (IE)
      click_elem.attachEvent('onclick', modifySPr);
    } 
  }
  
} // initClickModify(click_elem)