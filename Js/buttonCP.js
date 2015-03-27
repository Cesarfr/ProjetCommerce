/**
 * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
 */ 
// Création du bouton de suppression
var trashCP = document.createElement('button');
trashCP.setAttribute('class', 'button trashCP');
trashCP.innerHTML = 'Poubelle';
// Initialisation du click sur le bouton de suppression
initClickTrashCP(trashCP);

// Récupère les éléments du corps du tableau ayant class="trashSubCat" 
var click_trashCP = document.getElementsByTagName('tbody')[0].getElementsByClassName('trashCP');
var nb_click_trashCP = click_trashCP.length;
// Boucle sur les éléments trash (<button>)
for (var i = 0; i < nb_click_trashCP; ++i)
{
  // Initialisation des événements sur les éléments trash (<button>)
  initClickTrashCP(click_trashCP[i]);
}

function initClickTrashCP(click_elem)
{
  if (click_elem)
  {
      // Teste si la méthode addEventListener existe (Non IE)
      if (click_elem.addEventListener)
      {
      // Associe à l'événement click la fonction confirmDelete (Non IE)
      click_elem.addEventListener('click', confDelCP, false);
    } 
    else
    {
      // Associe à l'événement onclick la foncticonfDelCPon confirmDelete (IE)
      click_elem.attachEvent('onclick', confDelCP);
    } 
  }

} // initClickTrashCat(click_elem)


// Création du bouton de modification
  var modifyCP = document.createElement('button');
  modifyCP.setAttribute('class', 'button modifyCP');
  modifyCP.innerHTML = 'Modification';
  // Initialisation du click sur le bouton de modification
  initClickModifyCP(modifyCP);

  // Récupère les éléments du corps du tableau ayant class="modifyCP"
var click_modifyCP = document.getElementsByTagName('tbody')[0].getElementsByClassName('modifyCP');
var nb_click_modifyCP = click_modifyCP.length;
// Boucle sur les éléments modifyCP (<button>)
for (var i = 0; i < nb_click_modifyCP; ++i)
{
  // Initialisation des événements sur les éléments modifyCP (<button>)
  initClickModifyCP(click_modifyCP[i]);
}

function initClickModifyCP(click_elem)
{
  if (click_elem)
  {
    // Teste si la méthode addEventListener existe (Non IE)
    if (click_elem.addEventListener)
    {
      // Associe à l'événement click la fonction modifyData (Non IE)
      click_elem.addEventListener('click', modifyCPr, false);
    } 
    else
    {
      // Associe à l'événement onclick la fonction modifyData (IE)
      click_elem.attachEvent('onclick', modifyCPr);
    } 
  }
  
} // initClickModify(click_elem)