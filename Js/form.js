
var elemRequired = new Array();
var boolNoRequired = new Array();
function verifform(frm)
{
    var tabLabel = frm.getElementsByTagName('label');
    var nbLabel = tabLabel.length;

    for (var i = 0, k = 0, message = new Array(), errors = 0; i < nbLabel; ++i)
    {
        var atFor = tabLabel[i].getAttribute('for');

        if (atFor)
        {
            var elemById = document.getElementById(atFor);

            var atClass = elemById.getAttribute('class');

            if (atClass)
            {
                var pattern = /(required)/;
                if (pattern.test(atClass))
                {
                    elemRequired[k] = elemById;
                    boolNoRequired[k] = false;

                    if (!elemById.value)
                    {
                        boolNoRequired[k] = true;
                        message[errors] = '- ' + tabLabel[i].innerHTML;
                        ++errors;
                    }

                    ++k;
                }
            }
        }
    }

    // Si error est différent de 0 alors alert
    if (errors)
    {
        var text_message = (errors > 1) ? 'Vous devez renseigner les champs suivants :' : 'Vous devez renseigner le champ suivant :';

        windowError(text_message, message, errors);

        return false;
    }

    return true;

} // verifForm(frm)

function windowError(text_message, message, errors)
{
    // Crée un élément paragraphe <p>
    var p = document.createElement('p');
    // Ajoute à l'élément paragraphe <p> le début du message suivant si une ou plusieurs erreurs
    p.innerHTML = text_message;

    // Récupère l'élément <div id="error">
    var window = document.getElementById('error');
    // Ajoute à l'élément <div id="error"> l'élément paragraphe <p>
    window.appendChild(p);

    for (var i = 0; i < errors; ++i)
    {
        // Crée un élément paragraphe <p>
        var p = document.createElement('p');
        // Insère dans l'élément paragraphe <p> son message
        p.innerHTML = message[i];
        // Ajoute un attribut class="label"
        p.setAttribute('class', 'label');
        // Ajoute à l'élément <div id="error"> l'élément paragraphe <p>
        window.appendChild(p);
    }

    // Crée un élément paragraphe <button>
    var button = document.createElement('button');
    // Ajoute à l'élément paragraphe <button> la valeur Ok
    button.innerHTML = 'Ok';
    // Ajoute une class
    button.setAttribute('class', 'alert');

    // Crée un élément paragraphe <p>
    var p = document.createElement('p');
    // Ajoute un attribut class="center"
    p.setAttribute('class', 'center');
    // Ajoute à l'élément <p> l'élément button <button>
    p.appendChild(button);

    // Ajoute à l'élément <div id="error"> l'élément paragraphe <p>
    window.appendChild(p);

    // Visualise l'élément <div id="error">
    window.style.display = 'block';

    // Ecouteur sur le bouton
    if (button.addEventListener)
    {
        button.addEventListener('click', closeDivError, false);
    }
    else
    {
        button.addEventListener('onclick', closeDivError);
    }

    // Récupère la largeur de l'élément <div id="error">
    var window_width = window.offsetWidth;
    // Récupère la hauteur de l'élément <div id="error">
    var window_height = window.offsetHeight;

    // Déplace l'élément <div id="error"> vers la gauche de la moitié de sa largeur
    window.style.marginLeft = '-' + Math.round(window_width/2) + 'px';
    // Déplace l'élément <div id="error"> vers le haut de la moitié de sa hauteur
    window.style.marginTop = '-' + Math.round(window_height/2) + 'px';

}

function closeDivError()
{
    // Récupère l'élément <div id="error">
    var window = document.getElementById('error');
    // Efface le contenu de l'élément <div id="error">
    window.innerHTML = '';

    // Rends non visible l'élément <div id="error">
    window.style.display = 'none';

    // Nombre d'éléments du formulaire
    var nbElem = elemRequired.length;

    // Boucle sur les éléments du formulaire
    for (var i = 0; i < nbElem; ++i)
    {
        // Récupération de la valeur de l'attribut class
        var classRequired = elemRequired[i].getAttribute('class');
        // Suppression du mot norequired (remise à zéro)
        classRequired = classRequired.replace(' norequired', '');

        // Test si l'élément est obligatoire et non renseigné
        if (boolNoRequired[i])
        {
            // Ajout du mot norequired
            classRequired += ' norequired';
        }

        // Remplacement du contenu de la class par son nouveau contenu
        elemRequired[i].setAttribute('class', classRequired);
    }

    return;

} // closeDivError()


function confirmDeleteCat(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;

  // Récupère la ligne de l'élément <button> cliqué
  var tr =  target.parentNode.parentNode;
  //Récupère le contenu de l'attribut id
  var id_categorie = tr.getAttribute('id');
  //Récupère la première cellule de la ligne de l'élément <button> cliqué
  var td1 = tr.getElementsByTagName('td')[0];
  //Récupère le texte de la première cellule
  var nom = td1.innerHTML;

  // Demande de confirmation de suppression
  if (window.confirm ('Voulez vous vraiment supprimer cette categorie : ' + nom + ' ?'))
  {
    // Instancie la variable param avec le paramètre ID_CATEGORIE
    var param = 'ID_CATEGORIE=' + id_categorie;
   
    // Déclenche la suppression du tuple
    actionForm ('../Php/index.php?EX=deleteCate', param);
   
    // Supprime la ligne du tableau
    tr.parentNode.removeChild(tr);
 }
  window.location="../Php/index.php?EX=cat";
  // Stoppe l'événement
  stopEvent(event);
      
  return;
 
} // confirmDeleteCat(event)

function modifyCat(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  
  // Récupère la ligne de l'élément <button> cliqué
  var tr =  target.parentNode.parentNode;
  //Récupère le contenu de l'attribut id
  var id_categorie = tr.getAttribute('id');
  
  // Instancie la variable param avec le paramètre ID_CATEGORIE
  var param = 'ID_CATEGORIE=' + id_categorie;
  var data = actionForm('../Php/index.php?EX=selectCat', param);

  //Récupère l'élément <div id="window">
  var wind = document.getElementById('window');
  var form = document.getElementById('frmEdCat');
  if (form) wind.removeChild(form);

  form = document.createElement('form');
  form.setAttribute('id', 'frmEdCat');
  var h2 = document.createElement('h2');
  var txth2 = document.createTextNode('Modifier une catégorie');
  h2.appendChild(txth2);

  var fieldset = document.createElement('fieldset');
  var p1 = document.createElement('p');
  /* Élément input ID */
  var inputID = document.createElement('input');
  inputID.setAttribute('id','id_categorie');
  inputID.setAttribute('type','hidden');
  inputID.setAttribute('name','ID_CATEGORIE');
  inputID.setAttribute('value', id_categorie);
  
  var label = document.createElement('label');
  var lbltext = document.createTextNode('Nom catégorie');
  label.setAttribute('for','nom_cate');
  label.appendChild(lbltext);

  /* Élément input NOM_CATE */
  var inputNOM = document.createElement('input');
  inputNOM.setAttribute('type','text');
  inputNOM.setAttribute('class','required');
  inputNOM.setAttribute('maxlength','50');
  inputNOM.setAttribute('id','nom_cate');
  inputNOM.setAttribute('name','NOM_CATE');
  inputNOM.setAttribute('value', data[0][0]);

  p1.appendChild(label);
  p1.appendChild(inputNOM);
  p1.appendChild(inputID);

  var p2 = document.createElement('p');
  p2.setAttribute('class','center');
  /* Élément input BUTTON */
  var inputSUM = document.createElement('input');
  inputSUM.setAttribute('type','submit');
  inputSUM.setAttribute('value','Ok');

  p2.appendChild(inputSUM);

  fieldset.appendChild(p1);
  fieldset.appendChild(p2);

  var divErr = document.createElement('div');
  divErr.setAttribute('id','error');

  form.appendChild(h2);
  form.appendChild(fieldset);
  
  wind.appendChild(form);
  wind.appendChild(divErr);

  view('window');

var frm_modCa = document.getElementById('frmEdCat');
if (frm_modCa) {
  if (frm_modCa.addEventListener) {
    frm_modCa.addEventListener('submit', modifierCategorie, false);
  } else{
    frm_modCa.attachEvent('onsubmit',modifierCategorie);
  }
}
//Temporisation pour l'affichage de l'image sans mouvement incongru
  setTimeout(function(){wind.style.display = 'block'; positionWindow(wind);},200);
  // Initialisation du bouton de fermeture de l'élément <div id="window">
  initCloseWindow();
  // Stoppe l'événement
  stopEvent(event);
      
  return;
 
  
} // modifyData(event)

/***** SUBCATEGORIE *****/
function confDelSubCat(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  var tr =  target.parentNode.parentNode;
  var id_categorie = tr.getAttribute('id');
  var td1 = tr.getElementsByTagName('td')[0];
  var nom = td1.innerHTML;
  if (window.confirm ('Voulez vous vraiment supprimer cette sub-catégorie : ' + nom + ' ?'))
  {
    var param = 'ID_SUBCAT=' + id_categorie;
    actionForm ('../Php/index.php?EX=delSubCat', param);
    tr.parentNode.removeChild(tr);
  }
  window.location="../Php/index.php?EX=scat";
  // Stoppe l'événement
  stopEvent(event);
  return;
} // confirmDeleteCat(event)

function modifySub(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  
  // Récupère la ligne de l'élément <button> cliqué
  var tr =  target.parentNode.parentNode;
  //Récupère le contenu de l'attribut id
  var id_subcat = tr.getAttribute('id');
  
  // Instancie la variable param avec le paramètre ID_S
  var param = 'ID_S=' + id_subcat;
  var data = actionForm('../Php/index.php?EX=selectSub', param);
  var data2 = actionForm('../Php/index.php?EX=selectAllCat', '');

  //Récupère l'élément <div id="window">
  var wind = document.getElementById('window');
  var form = document.getElementById('frmEdS');
  if (form) wind.removeChild(form);

  form = document.createElement('form');
  form.setAttribute('id', 'frmEdS');
  var h2 = document.createElement('h2');
  var txth2 = document.createTextNode('Modifier une sub-catégorie');
  h2.appendChild(txth2);

  var fieldset = document.createElement('fieldset');
  var p1 = document.createElement('p');
  /* Élément input ID */
  var inputID = document.createElement('input');
  inputID.setAttribute('id','id_subcat');
  inputID.setAttribute('type','hidden');
  inputID.setAttribute('name','ID_SUBCAT');
  inputID.setAttribute('value', id_subcat);
  
  var label = document.createElement('label');
  var lbltext = document.createTextNode('Nom sub-catégorie');
  label.setAttribute('for','nom_sub');
  label.appendChild(lbltext);

  /* Élément input NOM_SUB */
  var inputNOM = document.createElement('input');
  inputNOM.setAttribute('type','text');
  inputNOM.setAttribute('class','required');
  inputNOM.setAttribute('maxlength','50');
  inputNOM.setAttribute('id','nom_sub');
  inputNOM.setAttribute('name','NOM_SUB');
  inputNOM.setAttribute('value', data[0]['nom_subcat']);

  var labelSel = document.createElement('label');
  var lblT = document.createTextNode('Catégorie');
  labelSel.setAttribute('for','categorie');
  labelSel.appendChild(lblT);

  var select = document.createElement('select');
  select.setAttribute('id','categorie');
  select.setAttribute('name','CATEGORIE');

  for (var i = 0; i < data2.length; i++) {
    var option = document.createElement('option');
    if (data[0]['id_categorie']==data2[i]['id_categorie']) {
      option.setAttribute('value',data2[i]['id_categorie']);
      option.setAttribute('selected','selected');
      var txtOp= document.createTextNode(data2[i]['nom_cat']);
      option.appendChild(txtOp);
    } else{
      option.setAttribute('value',data2[i]['id_categorie']);
      var txtOp= document.createTextNode(data2[i]['nom_cat']);
      option.appendChild(txtOp);
    }
    select.appendChild(option);
  }

  p1.appendChild(label);
  p1.appendChild(inputNOM);
  p1.appendChild(inputID);

  var p2 = document.createElement('p');
  p2.appendChild(labelSel);
  p2.appendChild(select);

  var p3 = document.createElement('p');
  p3.setAttribute('class','center');

  /* Élément input BUTTON */
  var inputSUM = document.createElement('input');
  inputSUM.setAttribute('type','submit');
  inputSUM.setAttribute('value','Ok');

  p3.appendChild(inputSUM);

  fieldset.appendChild(p1);
  fieldset.appendChild(p2);
  fieldset.appendChild(p3);

  var divErr = document.createElement('div');
  divErr.setAttribute('id','error');

  form.appendChild(h2);
  form.appendChild(fieldset);
  
  wind.appendChild(form);
  wind.appendChild(divErr);

  view('window');

  var frm_Sub = document.getElementById('frmEdS');
  if (frm_Sub) {
    if (frm_Sub.addEventListener) {
      frm_Sub.addEventListener('submit', modifySubCat, false);
    } else{
      frm_Sub.attachEvent('onsubmit',modifySubCat);
    }
  }
//Temporisation pour l'affichage de l'image sans mouvement incongru
  setTimeout(function(){wind.style.display = 'block'; positionWindow(wind);},200);
  // Initialisation du bouton de fermeture de l'élément <div id="window">
  initCloseWindow();
  // Stoppe l'événement
  stopEvent(event);
  return;
}

/**** PRODUCT ****/
function confDelPro(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  var tr =  target.parentNode.parentNode;
  var id_categorie = tr.getAttribute('id');
  var td1 = tr.getElementsByTagName('td')[0];
  var nom = td1.innerHTML;
  var image = tr.getElementsByTagName('td')[3];
  var nomi = image.querySelector('.imgprod')
  var elem = nomi.getAttribute('src').substring(7, nomi.getAttribute('src').length);
  if (window.confirm ('Voulez vous vraiment supprimer cette produit : ' + nom + ' ?'))
  {
    var param = 'ID_PROD=' + id_categorie;
    param += '&IMAGE=' + elem;
    actionForm ('../Php/index.php?EX=delProd', param);
    tr.parentNode.removeChild(tr);
  }
  window.location="../Php/index.php?EX=prod";
  // Stoppe l'événement
  stopEvent(event);
  return;
} 

function modifyPro(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  
  // Récupère la ligne de l'élément <button> cliqué
  var tr =  target.parentNode.parentNode;
  //Récupère le contenu de l'attribut id
  var id_prod = tr.getAttribute('id');
  
  // Instancie la variable param avec le paramètre ID_S
  var param = 'ID_PR=' + id_prod;
  var data = actionForm('../Php/index.php?EX=searchProd', param);

  //Récupère l'élément <div id="window">
  var wind = document.getElementById('window');
  var form = document.getElementById('frmMPR');
  if (form) wind.removeChild(form);

  form = document.createElement('form');
  form.setAttribute('id', 'frmMPR');
  form.setAttribute('enctype', 'multipart/form-data');

  var h2 = document.createElement('h2');
  var txth2 = document.createTextNode('Modifier un produit');
  h2.appendChild(txth2);

  var fieldset = document.createElement('fieldset');
  var p1 = document.createElement('p');

  /* Élément input ID */
  var inputID = document.createElement('input');
  inputID.setAttribute('id','id_product');
  inputID.setAttribute('type','hidden');
  inputID.setAttribute('name','ID_PRODUCT');
  inputID.setAttribute('value', id_prod);
  
  var label = document.createElement('label');
  var lbltext = document.createTextNode('Nom produit');
  label.setAttribute('for','nom_prod');
  label.appendChild(lbltext);

  /* Élément input NOM_PROD */
  var inputNOM = document.createElement('input');
  inputNOM.setAttribute('type','text');
  inputNOM.setAttribute('class','required');
  inputNOM.setAttribute('maxlength','50');
  inputNOM.setAttribute('id','nom_prod');
  inputNOM.setAttribute('name','NOM_PROD');
  inputNOM.setAttribute('value', data[0]['nom_prod']);
  
  p1.appendChild(label);
  p1.appendChild(inputNOM);
  p1.appendChild(inputID);

  /* Élément input REF */
  var inputREF = document.createElement('input');
  inputREF.setAttribute('type','text');
  inputREF.setAttribute('class','required');
  inputREF.setAttribute('maxlength','10');
  inputREF.setAttribute('id','ref');
  inputREF.setAttribute('name','REF');
  inputREF.setAttribute('value', data[0]['ref']);

  var labelRef = document.createElement('label');
  var lblRef = document.createTextNode('Réference');
  labelRef.setAttribute('for','ref');
  labelRef.appendChild(lblRef);

  var p2 = document.createElement('p');
  p2.appendChild(labelRef);
  p2.appendChild(inputREF);

  /* Élément input REF */
  var txtDesc = document.createElement('textarea');
  txtDesc.setAttribute('class','required');
  txtDesc.setAttribute('id','desc');
  txtDesc.setAttribute('name','DESC');
  txtDesc.setAttribute('cols','30');
  txtDesc.setAttribute('rows','10');

  var descP = document.createTextNode(data[0]['description']);
  txtDesc.appendChild(descP);

  var labelDesc = document.createElement('label');
  var lblDe = document.createTextNode('Description');
  labelDesc.setAttribute('for','desc');
  labelDesc.appendChild(lblDe);

  var p3 = document.createElement('p');
  p3.appendChild(labelDesc);
  p3.appendChild(txtDesc);

  /** Element Image **/
  var labelImg = document.createElement('label');
  var lblIm = document.createTextNode('Image');
  labelImg.setAttribute('for','image_p');
  labelImg.appendChild(lblIm);

  var inputImg = document.createElement('input');
  inputImg.setAttribute('type','file');
  inputImg.setAttribute('id','image_p');
  inputImg.setAttribute('name','IMAGE_P');

  var imgTmp = document.createElement('input');
  imgTmp.setAttribute('type','hidden');
  imgTmp.setAttribute('id','image_tmp');
  imgTmp.setAttribute('name','IMAGE_TMP');
  imgTmp.setAttribute('value', data[0]['image']);

  var divMsg = document.createElement('div');
  divMsg.setAttribute('id', 'fileErr');

  var p4 = document.createElement('p');
  p4.appendChild(labelImg);
  p4.appendChild(inputImg);
  p4.appendChild(imgTmp);
  //p4.appendChild(divMsg);

  /* Élément input BUTTON */
  var inputSUM = document.createElement('input');
  inputSUM.setAttribute('type','submit');
  inputSUM.setAttribute('value','Ok');

  var p5 = document.createElement('p');
  p5.setAttribute('class','center');
  p5.appendChild(inputSUM);

  fieldset.appendChild(p1);
  fieldset.appendChild(p2);
  fieldset.appendChild(p3);
  fieldset.appendChild(p4);
  fieldset.appendChild(divMsg);
  fieldset.appendChild(p5);

  var divErr = document.createElement('div');
  divErr.setAttribute('id','error');

  form.appendChild(h2);
  form.appendChild(fieldset);
  
  wind.appendChild(form);
  wind.appendChild(divErr);

  view('window');

  var frm_Pr = document.getElementById('frmMPR');
  var image_p = document.getElementById('image_p');
  if (frm_Pr) {
    if (frm_Pr.addEventListener) {
      frm_Pr.addEventListener('submit', modifyProd, false);
      image_p.addEventListener('change', validateImage, false);
    } else{
      frm_Pr.attachEvent('onsubmit',modifyProd);
      image_p.attachEvent('onchange', validateImage);
    }
  }
//Temporisation pour l'affichage de l'image sans mouvement incongru
  setTimeout(function(){wind.style.display = 'block'; positionWindow(wind);},200);
  // Initialisation du bouton de fermeture de l'élément <div id="window">
  initCloseWindow();
  // Stoppe l'événement
  stopEvent(event);
  return;
}
/* REL - SP */
function confDelSP(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  var tr =  target.parentNode.parentNode;
  var id_sp = tr.getAttribute('id');
  var td1 = tr.getElementsByTagName('td')[0];
  var nom = td1.innerHTML;
  var td2 = tr.getElementsByTagName('td')[1];
  var nom2 = td2.innerHTML;
  if (window.confirm ('Voulez vous vraiment supprimer cette relation : ' +nom+' - '+nom2+ ' ?'))
  {
    var param = 'ID_SP=' + id_sp;
    actionForm ('../Php/index.php?EX=delSP', param);
    tr.parentNode.removeChild(tr);
  }
  window.location="../Php/index.php?EX=asign";
  // Stoppe l'événement
  stopEvent(event);
  return;
} // confirmDelete

function modifySPr(){
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  
  // Récupère la ligne de l'élément <button> cliqué
  var tr =  target.parentNode.parentNode;
  //Récupère le contenu de l'attribut id
  var id_sp = tr.getAttribute('id');

  // Instancie la variable param avec le paramètre ID_S
  var param = 'ID_SP=' + id_sp;
  
  var data = actionForm('../Php/index.php?EX=selectSP', param);
  var sub_c = actionForm('../Php/index.php?EX=selASub', '');
  var prod_c = actionForm('../Php/index.php?EX=selAllPr', '');

  //Récupère l'élément <div id="window">
  var wind = document.getElementById('window');
  var form = document.getElementById('frmAsignSP');
  if (form) wind.removeChild(form);

  form = document.createElement('form');
  form.setAttribute('id', 'frmAsignSP');
  var h2 = document.createElement('h2');
  var txth2 = document.createTextNode('Modifier une relation S-P');
  h2.appendChild(txth2);

  var fieldset = document.createElement('fieldset');
  var p1 = document.createElement('p');

  /* Élément input ID */
  var inputID = document.createElement('input');
  inputID.setAttribute('id','id_sp');
  inputID.setAttribute('type','hidden');
  inputID.setAttribute('name','ID_SP');
  inputID.setAttribute('value', id_sp);

  var labelSel_S = document.createElement('label');
  var lblT = document.createTextNode('Sous-catégorie');
  labelSel_S.setAttribute('for','subcat');
  labelSel_S.appendChild(lblT);

  var select_s = document.createElement('select');
  select_s.setAttribute('class','required');
  select_s.setAttribute('id','subcat');
  select_s.setAttribute('name','SUBCAT');

  for (var i = 0; i < sub_c.length; i++) {
    var option = document.createElement('option');
    if (data[0]['id_subcat']==sub_c[i]['id_subcat']) {
      option.setAttribute('value',sub_c[i]['id_subcat']);
      option.setAttribute('selected','selected');
      var txtOp= document.createTextNode(sub_c[i]['nom_subcat']);
      option.appendChild(txtOp);
    } else{
      option.setAttribute('value',sub_c[i]['id_subcat']);
      var txtOp= document.createTextNode(sub_c[i]['nom_subcat']);
      option.appendChild(txtOp);
    }
    select_s.appendChild(option);
  }

  p1.appendChild(labelSel_S);
  p1.appendChild(inputID);
  p1.appendChild(select_s);

  var lblSelP_c = document.createElement('label');
  var lblP_c = document.createTextNode('Produit');
  lblSelP_c.setAttribute('for','produit');
  lblSelP_c.appendChild(lblP_c);

  var selPro_c = document.createElement('select');
  selPro_c.setAttribute('class','required');
  selPro_c.setAttribute('id','produit');
  selPro_c.setAttribute('name','PRODUIT');

  for (var i = 0; i < prod_c.length; i++) {
    var optionP_c = document.createElement('option');
    if (data[0]['id_product']==prod_c[i]['id_product']) {
      optionP_c.setAttribute('value',prod_c[i]['id_product']);
      optionP_c.setAttribute('selected','selected');
      var txtOp= document.createTextNode(prod_c[i]['nom_prod']);
      optionP_c.appendChild(txtOp);
    } else{
      optionP_c.setAttribute('value',prod_c[i]['id_product']);
      var txtOp= document.createTextNode(prod_c[i]['nom_prod']);
      optionP_c.appendChild(txtOp);
    }
    selPro_c.appendChild(optionP_c);
  }

  var p2 = document.createElement('p');
  p2.appendChild(lblSelP_c);
  p2.appendChild(selPro_c);

  var p3 = document.createElement('p');
  p3.setAttribute('class','center');

  /* Élément input BUTTON */
  var inputSUM = document.createElement('input');
  inputSUM.setAttribute('type','submit');
  inputSUM.setAttribute('value','Ok');

  p3.appendChild(inputSUM);

  fieldset.appendChild(p1);
  fieldset.appendChild(p2);
  fieldset.appendChild(p3);

  var divErr = document.createElement('div');
  divErr.setAttribute('id','error');

  form.appendChild(h2);
  form.appendChild(fieldset);
  
  wind.appendChild(form);
  wind.appendChild(divErr);

  view('window');

  var frm_mSP = document.getElementById('frmAsignSP');
  if (frm_mSP) {
    if (frm_mSP.addEventListener) {
      frm_mSP.addEventListener('submit', modifyS_P, false);
    } else{
      frm_mSP.attachEvent('onsubmit',modifyS_P);
    }
  }
//Temporisation pour l'affichage de l'image sans mouvement incongru
  setTimeout(function(){wind.style.display = 'block'; positionWindow(wind);},200);
  // Initialisation du bouton de fermeture de l'élément <div id="window">
  initCloseWindow();
  // Stoppe l'événement
  stopEvent(event);
  return;
}



/* REL - SP */
function confDelCP(event)
{
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  var tr =  target.parentNode.parentNode;
  var id_sp = tr.getAttribute('id');
  var td1 = tr.getElementsByTagName('td')[0];
  var nom = td1.innerHTML;
  var td2 = tr.getElementsByTagName('td')[1];
  var nom2 = td2.innerHTML;
  if (window.confirm ('Voulez vous vraiment supprimer cette relation : ' +nom+' - '+nom2+ ' ?'))
  {
    var param = 'ID_CP=' + id_sp;
    actionForm ('../Php/index.php?EX=delCP', param);
    tr.parentNode.removeChild(tr);
  }
  window.location="../Php/index.php?EX=asignCP";
  // Stoppe l'événement
  stopEvent(event);
  return;
} // confirmDelete

function modifyCPr(){
  // Récupère l'élément <button> cliqué
  var target = event.target || event.srcElement;
  
  // Récupère la ligne de l'élément <button> cliqué
  var tr =  target.parentNode.parentNode;
  //Récupère le contenu de l'attribut id
  var id_cp = tr.getAttribute('id');

  // Instancie la variable param avec le paramètre ID_S
  var param = 'ID_CP=' + id_cp;

  var data = actionForm('../Php/index.php?EX=selectCP', param);
  var cate = actionForm('../Php/index.php?EX=selectAllCat', '');
  var prod = actionForm('../Php/index.php?EX=selAllPr', '');

  //Récupère l'élément <div id="window">
  var wind = document.getElementById('window');
  var form = document.getElementById('frmAsignCP');
  if (form) wind.removeChild(form);

  form = document.createElement('form');
  form.setAttribute('id', 'frmAsignCP');
  var h2 = document.createElement('h2');
  var txth2 = document.createTextNode('Modifier une relation C-P');
  h2.appendChild(txth2);

  var fieldset = document.createElement('fieldset');
  var p1 = document.createElement('p');

  /* Élément input ID */
  var inputID = document.createElement('input');
  inputID.setAttribute('id','id_cp');
  inputID.setAttribute('type','hidden');
  inputID.setAttribute('name','ID_CP');
  inputID.setAttribute('value', id_cp);

  var labelSel = document.createElement('label');
  var lblT = document.createTextNode('Catégorie');
  labelSel.setAttribute('for','categorie');
  labelSel.appendChild(lblT);

  var select = document.createElement('select');
  select.setAttribute('class','required');
  select.setAttribute('id','categorie');
  select.setAttribute('name','CATEGORIE');

  for (var i = 0; i < cate.length; i++) {
    var option = document.createElement('option');
    if (data[0]['id_categorie']==cate[i]['id_categorie']) {
      option.setAttribute('value',cate[i]['id_categorie']);
      option.setAttribute('selected','selected');
      var txtOp= document.createTextNode(cate[i]['nom_cat']);
      option.appendChild(txtOp);
    } else{
      option.setAttribute('value',cate[i]['id_categorie']);
      var txtOp= document.createTextNode(cate[i]['nom_cat']);
      option.appendChild(txtOp);
    }
    select.appendChild(option);
  }

  p1.appendChild(labelSel);
  p1.appendChild(inputID);
  p1.appendChild(select);

  var lblSelP = document.createElement('label');
  var lblP = document.createTextNode('Produit');
  lblSelP.setAttribute('for','produit');
  lblSelP.appendChild(lblP);

  var selPro = document.createElement('select');
  selPro.setAttribute('class','required');
  selPro.setAttribute('id','produit');
  selPro.setAttribute('name','PRODUIT');

  for (var i = 0; i < prod.length; i++) {
    var optionP = document.createElement('option');
    if (data[0]['id_product']==prod[i]['id_product']) {
      optionP.setAttribute('value',prod[i]['id_product']);
      optionP.setAttribute('selected','selected');
      var txtOp= document.createTextNode(prod[i]['nom_prod']);
      optionP.appendChild(txtOp);
    } else{
      optionP.setAttribute('value',prod[i]['id_product']);
      var txtOp= document.createTextNode(prod[i]['nom_prod']);
      optionP.appendChild(txtOp);
    }
    selPro.appendChild(optionP);
  }

  var p2 = document.createElement('p');
  p2.appendChild(lblSelP);
  p2.appendChild(selPro);

  var p3 = document.createElement('p');
  p3.setAttribute('class','center');

  /* Élément input BUTTON */
  var inputSUM = document.createElement('input');
  inputSUM.setAttribute('type','submit');
  inputSUM.setAttribute('value','Ok');

  p3.appendChild(inputSUM);

  fieldset.appendChild(p1);
  fieldset.appendChild(p2);
  fieldset.appendChild(p3);

  var divErr = document.createElement('div');
  divErr.setAttribute('id','error');

  form.appendChild(h2);
  form.appendChild(fieldset);
  
  wind.appendChild(form);
  wind.appendChild(divErr);

  view('window');

  var frm_mCP = document.getElementById('frmAsignCP');
  if (frm_mCP) {
    if (frm_mCP.addEventListener) {
      frm_mCP.addEventListener('submit', modifyC_P, false);
    } else{
      frm_mCP.attachEvent('onsubmit',modifyC_P);
    }
  }
//Temporisation pour l'affichage de l'image sans mouvement incongru
  setTimeout(function(){wind.style.display = 'block'; positionWindow(wind);},200);
  // Initialisation du bouton de fermeture de l'élément <div id="window">
  initCloseWindow();
  // Stoppe l'événement
  stopEvent(event);
  return;
}

function positionWindow(wind)
{
  // Recentrage horizontale
  wind.style.marginLeft = '-' + Math.floor(wind.clientWidth/2) + 'px';
  // Recentrage verticale
  wind.style.marginTop = '-' + Math.floor(wind.clientHeight/2) + 'px';
  
} // positionWindow(wind)

/**
 * Initialisation de l'écouteur de fermeture de l'élément <div id="window">
 * 
 * @return none
 */
function initCloseWindow()
{
  //Récupère l'élément <button id="close">
  var click_close = document.getElementById('close');
  if (click_close)
  {
    // Teste si la méthode addEventListener existe (Non IE)
    if (click_close.addEventListener)
    {
      // Associe à l'événement click la fonction anonyme pour mettre le display de l'élément <div id="window"> à none
      click_close.addEventListener('click', function(){document.getElementById('window').style.display = 'none';}, false);
    } 
    else
    {
      // Associe à l'événement click la fonction anonyme pour mettre le display de l'élément <div id="window"> à none
      click_close.attachEvent('onclick', function(){document.getElementById('window').style.display = 'none';});
    } 
  }
  
} // initCloseWindow()

function view(element) {
   var theDiv=document.getElementById(element);
   theDiv.style.display = 'block';
}
function noView(element) {
   var theDiv=document.getElementById(element);
   theDiv.style.display = 'none';
}



/***** OTHERS *****/
function key2Char(event)
{
    for (var prop in event)
    {
        switch (prop)
        {
            case 'charCode' : return String.fromCharCode(event.charCode);
            case 'keyCode'  : return String.fromCharCode(event.keyCode);
            case 'which'    : return String.fromCharCode(event.which);
        }
    }

} // key2Char(event)


function isInteger(event)
{
    // Expression régulière pour les entiers
    var valid = /[0-9]/;
    // Expression régulière pour les caractères spéciaux
    var speciaux = /[\x00\x0D]/;

    // Récupération du caractère frappé
    var car = key2Char(event);

    // Vérifie si le caractère frappé est un entier ou un caractère spécial
    if ((valid.test(car) || speciaux.test(car)))
    {
        return true;
    }

    // Stoppe l'événement
    stopEvent(event);

    return false;

} // isInteger(event)