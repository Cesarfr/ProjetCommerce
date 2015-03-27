<?php
    header ('Content-Type: text/html; charset=utf-8');
    require('../Inc/require.inc.php');
    session_start();
    error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
    /**
     * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
     * @var [type]
     */
    $EX = isset($_REQUEST['EX']) ? $_REQUEST['EX'] : 'home';

    switch($EX)
    {
      case 'home' : home(); break;
      case 'cat' : cat(); break;
      case 'scat' : scat(); break;
      case 'prod' : prod(); break;
      case 'asign' : asign(); break;
      case 'asignCP' : asignCP(); break;

      case 'login' : login(); break;
      case 'doLogin' : doLogin(); exit;
      case 'initSe' : initSe(); exit;
      case 'deconnect'  : deconnect(); break;

      case 'product' : product(); break;
      case 'contact' : contact(); break;
      case 'insertCont' : insertCont(); exit;

      case 'addCat' : addCat(); break;
      case 'editCat' : editCat(); exit;
      case 'insertCate' : insertCate(); exit;
      case 'selectCat' : selectCat(); exit;
      case 'deleteCate' : deleteCate(); exit;

      case 'addSCat' : addSCat(); break;
      case 'insSubCate' : insSubCate(); exit;
      case 'selectAllCat' : selectAllCat(); exit;
      case 'selectSub' : selectSub(); exit;
      case 'editSub' : editSub(); exit;
      case 'delSubCat' : delSubCat(); exit;

      case 'addProd' : addProd(); break;
      case 'insertProd' : insertProd(); exit;
      case 'delProd'  : delProd(); exit;
      case 'searchProd' : searchProd(); exit;
      case 'modProd'  : modProd(); exit;
      case 'modProdI'  : modProdI(); exit;

      case 'selAllPr' : selAllPr(); exit;
      case 'selASub' : selASub(); exit;
      case 'selectCP' : selectCP(); exit;
      case 'selectSP' : selectSP(); exit;
      
      case 'addSP'  : addSP(); break;
      case 'insertSP' : insertSP(); exit;
      case 'delSP'  : delSP(); exit;
      case 'updateSP' : updateSP(); exit;

      case 'addCP'  : addCP(); break;
      case 'insertCP' : insertCP(); exit;
      case 'delCP'  : delCP(); exit;
      case 'updateCP' : updateCP(); exit;

      default : evaluator($EX);
    }

    require('../View/layout.view.php');

    function evaluator($EX){
      $mcomm = new MCommerce();

      if (substr($EX, 0,1)=="p") {
        $prod = $mcomm->selectProd(substr($EX, 1, strlen($EX)));
        //var_dump($prod);
        if($prod==false){
          home();
        }else{ 
          proIn($prod); 
        //var_dump($value);
        }
      } else if(substr($EX, 0,1)=="c"){

        $value = $mcomm->selectAllSCat(substr($EX, 1, strlen($EX))); 

        if($value==false){
          home();
        }else{ 
          product($value); 
        //var_dump($value);
        }
      } else if(substr($EX, 0,1)=="a"){
        //echo trim($EX);
        $valueP = $mcomm->selAllProd(trim(substr($EX, 1, strlen($EX)))); 

        if($valueP==false){
          global $page;

          $page['title'] = 'Catégorie Vide';
          $page['bande'] = '';
          $page['class'] = 'VHtml';
          $page['method'] = 'showHtml';
          $page['arg'] = '../Html/vide.html';
        }else{ 
          allprod($valueP); 
        // var_dump($valueP);
        }
      }
    }

    function login()
    {
      global $page;

        $page['title'] = 'Login';
        $page['bande'] = '';
        $page['class'] = 'VHtml';
        $page['method'] = 'showHtml';
        $page['arg'] = '../Html/login.php';
    }

    function doLogin(){
      $value = $_POST;
      $mus = new MUser();
      $mus->setValue($value);
      $res = $mus->selectLogin();
      echo json_encode($res);
    }
    function initSe(){
      $_SESSION['USER']=$_GET['prenom'].' '.$_GET['nom'];
      header('Location: ../Php');
    }
    function deconnect()
    {
      unset($_SESSION['USER']);
      session_destroy();
      header('Location: ../Php');
    } 
    function cat(){
      global $page;

      $page['title'] = 'Administration des catégories';
      $page['bande'] = 'bandeau3';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/admin_cat.php';
    }
    function scat(){
      global $page;

      $page['title'] = 'Administration des sous-catégories';
      $page['bande'] = 'bandeau1';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/admin_scat.php';
    }
    function prod(){
      global $page;

      $page['title'] = 'Administration products';
      $page['bande'] = 'bandeau3';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/admin_prod.php';
    }
    function asign(){
      global $page;

      $page['title'] = 'Asignation des relations S-P';
      $page['bande'] = 'bandeau1';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/admin_asign.php';
    }
    function asignCP(){
      global $page;

      $page['title'] = 'Asignation des relations C-P';
      $page['bande'] = 'bandeau2';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/admin_asignCP.php';
    }
    function home()
    {
        global $page;

        $page['title'] = 'E-WWW';
        $page['bande'] = '';
        $page['class'] = 'VHtml';
        $page['method'] = 'showHtml';
        $page['arg'] = '../Html/home.html';
    }
    function addCat()
    {
        global $page;

        $page['title'] = 'Ajouter une catégorie';
        $page['bande'] = 'bandeau1';
        $page['class'] = 'VHtml';
        $page['method'] = 'showHtml';
        $page['arg'] = '../Html/frmcatego.php';
    }
    function insertCate(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->insertCat();
      
      echo json_encode($value);
    }
    function selectCat(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->selCat();
      echo json_encode($val);
    }

    function editCat(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->updateCat();
      // var_dump($mcomm);
      echo json_encode($value);
    }

    function deleteCate(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->delCat();
      
      echo json_encode($value);
    }

    function aroma()
    {
        global $page;

        $page['title'] = 'Aromaterapie';
        $page['bande'] = 'bandeau1';
        $page['class'] = 'VHtml';
        $page['method'] = 'showHtml';
        $page['arg'] = '../Html/aroma.html';
    }
    function contact()
    {
      // global $page;

      // $page['title'] = 'Contact';
      // $page['bande'] = 'bandeau3';
      // $page['class'] = 'VContact';
      // $page['method'] = 'showContact';
      // $page['arg'] = '../Html/contact.html';
      $vhtml = new VHtml();
      $vhtml->showHtml('../Html/contact.html');
    }
    function insertCont(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->insertCon();
      
      echo json_encode($val);
    }

    function product($val){
      $mcomm = new MCommerce();
      $the_values = $mcomm->selectAllPro($val[0]);
      global $page; 
      if (count($the_values)==0) {
        $page['title'] = 'Sub-catégorie Vide';
      }else{
        $page['title'] = $the_values[0]['nom_subcat'];
      }
      
      $page['bande'] = 'bandeau1';
      $page['class'] = 'VProducts';
      $page['method'] = 'showProducts';
      $page['arg'] = $the_values;
        
    } 

    function proIn($val){
      
      global $page; 
      $page['title'] = $val['nom_prod'];
      $page['bande'] = 'bandeau2';
      $page['class'] = 'VProduct';
      $page['method'] = 'showProduct';
      $page['arg'] = $val;
        
    } 
    function allprod($val){
      global $page; 
      $page['title'] = $val[0]['nom_cat'];
      $page['bande'] = 'bandeau1';
      $page['class'] = 'VProducts';
      $page['method'] = 'showProducts';
      $nom = $val[0]['nom_cat'];
      unset($val[0]['nom_cat']);
      $val[0]['nom_subcat'] = $nom;
      $page['arg'] = $val;
        
    } 

    function delSubCat(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->delSubC();
      
      echo json_encode($value);
    }
    /** Subcat **/
    function addSCat(){
      global $page;

        $page['title'] = 'Ajouter une sub-catégorie';
        $page['bande'] = 'bandeau1';
        $page['class'] = 'VHtml';
        $page['method'] = 'showHtml';
        $page['arg'] = '../Html/frmsubcatego.php';
    }
    function insSubCate()
    {
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->insertSubCat();
      
      echo json_encode($value);
    }
    function selectAllCat(){
      $mcomm = new MCommerce();
      $values = $mcomm->selAllByName();
      echo json_encode($values);
    }
    function selAllPr(){
      $mcomm = new MCommerce();
      $values = $mcomm->selAllPro();
      echo json_encode($values);
    }
    function selASub(){
      $mcomm = new MCommerce();
      $values = $mcomm->selAllSub();
      echo json_encode($values);
    }
    function selectSub(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->selSub();
      echo json_encode($val);
    }
    function editSub(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->updateSub();
      echo json_encode($value);
    }

    /** PRODUITS **/
    function addProd()
    {
        global $page;

        $page['title'] = 'Ajouter un produit';
        $page['bande'] = 'bandeau1';
        $page['class'] = 'VHtml';
        $page['method'] = 'showHtml';
        $page['arg'] = '../Html/frmprod.php';
    }
    // function insert_image($_FILES)
    // {
    //   $image_new = redimensionne($_FILES['IMAGE_P']['tmp_name']);
        
    //   $file = '../Img/' .  $_FILES['IMAGE_P']['name'];
        
    //   imagepng($image_new, $file, 0);

    //   $_POST['IMAGE'] = $_FILES['IMAGE_P']['name'];
      
    // } // insert_image($_FILES)
    function insertProd()
    {
      $image_new = redimensionne($_FILES['IMAGE_P']['tmp_name']);
      $file = '../Img/'.$_FILES['IMAGE_P']['name'];
      imagepng($image_new, $file, 0);
      $_POST['IMAGE'] = $_FILES['IMAGE_P']['name'];
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->insertPro();
      echo json_encode($val);
    }
    function delProd(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->delProd();
      unlink('../Img/'.$_POST['IMAGE']);
      echo json_encode($value);
    }
    function searchProd(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->selProd();
      echo json_encode($val);
    }
    function modProd(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->updateProd();
      echo json_encode($value);
    }
    function modProdI()
    {
      $image_new = redimensionne($_FILES['IMAGE_P']['tmp_name']);
      $file = '../Img/'.$_FILES['IMAGE_P']['name'];
      imagepng($image_new, $file, 0);
      $_POST['IMAGE_P'] = $_FILES['IMAGE_P']['name'];
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->updateProd();
      unlink('../Img/'.$_POST['IMAGE_TMP']);
      echo json_encode($val);
    }
    /** Rel - SP **/
    function addSP(){
      global $page;

      $page['title'] = 'Ajouter une relation SP';
      $page['bande'] = 'bandeau2';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/frmSP.php';
    }
    function delSP(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->delSP();
      echo json_encode($value);
    }
    function insertSP()
    {
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->insertSP();
      
      echo json_encode($value);
    }
    function selectSP(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->selSPID();
      echo json_encode($val);
    }
    function updateSP(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->updSP();
      
      echo json_encode($value);
    }

    /** Rel - CP **/
    function addCP(){
      global $page;

      $page['title'] = 'Ajouter une relation CP';
      $page['bande'] = 'bandeau3';
      $page['class'] = 'VHtml';
      $page['method'] = 'showHtml';
      $page['arg'] = '../Html/frmCP.php';
    }
    function delCP(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->delCP();
      echo json_encode($value);
    }
    function insertCP()
    {
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->insertCP();
      
      echo json_encode($value);
    }
    function selectCP(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $val = $mcomm->selCPID();
      echo json_encode($val);
    }
    function updateCP(){
      $value = $_POST;
      $mcomm = new MCommerce();
      $mcomm->setValue($value);
      $mcomm->updCP();
      
      echo json_encode($value);
    }
?>