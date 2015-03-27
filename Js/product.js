/**
 * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
 */
function insertProd(event)
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
    var file_photo = document.getElementById('image_p').value;
    var data = uploadForm('../Php/index.php?EX=insertProd', frm, 'IMAGE_P', file_photo);
    message = "<p class='success'>L\'image a été téléchargé avec succès.</p>";
    showMessage(message);
    setTimeout('redirect()',1000);
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)

function modifyProd(event)
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

  var verif = document.getElementById('image_p').value;
  var message = ""; 

  if (verif == '' || verif==null) {
    var formData = 'ID_PRODUCT=' + document.getElementById('id_product').value;
    formData += '&NOM_PROD=' + document.getElementById('nom_prod').value;
    formData += '&REF=' + document.getElementById('ref').value;
    formData += '&DESC=' + document.getElementById('desc').value;
    formData += '&IMAGE_P=' + document.getElementById('image_tmp').value;

    var data = actionForm('../Php/index.php?EX=modProd', formData);
    message = "<p class='success'>Le produit a été modifié avec succès!!</p>";
    showMessage(message);
    document.getElementById('frmMPR').reset();
    setTimeout('redirect()',1000);
  } else{
    var file_photo = document.getElementById('image_p').value;
    var data = uploadForm('../Php/index.php?EX=modProdI', frm, 'IMAGE_P', file_photo);
    message = "<p class='success'>L\'image a été téléchargé avec succès.</p>";
    showMessage(message);
    setTimeout('redirect()',1000);
  }
  
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // modifySubCat()

function validateImage(){
  var fileExtension = "";
  var file = document.getElementById('image_p').files[0];
  // alert(file);
  var fileName = file.name;
  // alert(fileName);
  fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
  if (isImage(fileExtension)) {
    var fileSize = file.size;
    var fileType = file.type;
    showMessage("<p class='warning'>Fichier à télécharger : "+fileName+", poid total: "+fileSize+" octets.</p>");
  } else{
    document.getElementById('image_p').value = '';
    message = "<p class='danger'>Le fichier n'est pas une image!!</p>";
    showMessage(message);
  }
}

function redirect () {
  location.href='../Php/index.php?EX=prod';
}
// Function pour montrer un message
function showMessage(message){
    document.getElementById('fileErr').innerHTML = message;
}
// Verification d'extension de l'image
function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'jpg': case 'gif': case 'png': case 'jpeg':
            return true;
        break;
        default:
            return false;
        break;
    }
}