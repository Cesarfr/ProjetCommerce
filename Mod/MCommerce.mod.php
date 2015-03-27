<?php 

class MCommerce{

	private $conn;

	public function __construct(){
		$this->conn = new PDO(DATABASE, LOGIN, PASSWORD);
	}
	public function __destruct(){}

	public function setValue($_value)
  {
    $this->value = $_value;
  } // Set_value($_value)

  public function selectAllCat(){
  	$query = 'SELECT nom_cat FROM CATEGORIE';
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll();
  }
  public function selAllCat(){
  	$query = 'SELECT * FROM CATEGORIE';
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll();
  }
  public function selectIDCat($var){
  	$query = "SELECT id_categorie FROM CATEGORIE WHERE nom_cat=:VAR";
    $result = $this->conn->prepare($query);
    $result->bindValue(':VAR', $var, PDO::PARAM_STR);
    $result->execute();
    return $result->fetch();
  }

  public function insertCat()
  {
    $NOM = strip_tags($this->value['NOM_CATE']);
    $query = "INSERT INTO CATEGORIE (nom_cat) VALUES(:NOM)";
    $result = $this->conn->prepare($query);
    $result->bindValue(':NOM', $NOM, PDO::PARAM_STR);
    $result->execute();
    return $result;

  } // insertCat()

  public function selCat()
  {
    $ID = $this->value['ID_CATEGORIE'];
    $query = "SELECT nom_cat FROM CATEGORIE WHERE id_categorie=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll();

  } //
  public function updateCat()
  {
  	$ID = strip_tags($this->value['ID_CATEGORIE']);
  	$NOM = strip_tags($this->value['NOM_CATE']);
    $query = "UPDATE CATEGORIE SET nom_cat=:NOM WHERE id_categorie=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->bindValue(':NOM', $NOM, PDO::PARAM_STR);
    $result->execute();
    return $result;
  }
  public function delCat()
  {
    $ID = strip_tags($this->value['ID_CATEGORIE']);
    $query = "DELETE FROM CATEGORIE WHERE id_categorie=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;

  } 
  public function selectAllSCat($cat){
  	$query = "SELECT id_subcat FROM SUBCATEG WHERE nom_subcat=:CAT";
    $result = $this->conn->prepare($query);
    $result->bindValue(':CAT', $cat, PDO::PARAM_STR);
    $result->execute();
    return $result->fetch();
  }

  public function selectAllPro($idsub){
  	$query = "SELECT nom_subcat, nom_prod, description, image FROM PRODUCT 
    INNER JOIN SUB_PROD ON PRODUCT.id_product=SUB_PROD.id_product 
    INNER JOIN SUBCATEG ON SUB_PROD.id_subcat=SUBCATEG.id_subcat 
    WHERE SUBCATEG.id_subcat=:IDSUB";
    $result = $this->conn->prepare($query);
    $result->bindValue(':IDSUB', $idsub, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll();
  }

  public function selAllProd($namecat){
  	$query = "SELECT nom_cat, nom_prod, description, image FROM PRODUCT 
  	INNER JOIN CATEG_PROD ON PRODUCT.id_product=CATEG_PROD.id_product 
  	INNER JOIN CATEGORIE ON CATEGORIE.id_categorie=CATEG_PROD.id_categorie 
  	WHERE nom_cat LIKE '$namecat%';";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll();
  }

  public function selectProd($var){
  	$query = "SELECT nom_prod, ref, description, image FROM PRODUCT WHERE nom_prod=:VAR";
    $result = $this->conn->prepare($query);
    $result->bindValue(':VAR', $var, PDO::PARAM_STR);
    $result->execute();
    return $result->fetch();
  }

  public function selectSub($otra){
  	$query = "SELECT nom_subcat FROM SUBCATEG WHERE id_categorie=:OTRA";
    $result = $this->conn->prepare($query);
    $result->bindValue(':OTRA', $otra, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll();
  }

  public function insertCon()
  {
    $NOM = strip_tags($this->value['NOM']);
    $PRENOM = strip_tags($this->value['PRENOM']);
    $EMAIL = strip_tags($this->value['EMAIL']);  
    $TEL = strip_tags($this->value['TEL']);  
    $MOB = strip_tags($this->value['MOB']);  
    $query = "INSERT INTO CONTACT (NOM, PRENOM, EMAIL, TEL, MOB) values(:NOM, :PRENOM, :EMAIL, :TEL, :MOB)";
    $result = $this->conn->prepare($query);
    $result->bindValue(':NOM', $NOM, PDO::PARAM_STR);
    $result->bindValue(':PRENOM', $PRENOM, PDO::PARAM_STR);
    $result->bindValue(':EMAIL', $EMAIL, PDO::PARAM_STR);
    $result->bindValue(':TEL', $TEL, PDO::PARAM_STR);
    $result->bindValue(':MOB', $MOB, PDO::PARAM_STR);
    
    	//sendMail($NOM,$PRENOM,$EMAIL);
    return $result->execute();

  } // Insert($_data)
  public function sendMail($n, $p, $mail){
    $to = $mail;
    $subject = "Contact E-WWW";
    $message="<!DOCTYPE html>
    <html lang='fr'>
    <head>
      <meta charset='UTF-8'>
      <title>Contact E-WWW</title>
    </head>
    <body>
      <h5>".date('l jS \of F Y')."</h5>
      <h1 style='color: blue;'>M. Mdme. Mlle.".$n." ".$p.",</h1>
      <p style='font-size: 12pt;'>Merci pour contacter à notre enterprise en un moment nous nous mettons en contact avec vous</p>
      <p style='font-size: 9pt; font-weight: bold;'>Ne pas répondre à ce message s\'il vous plaît.</p>
    </body>
    </html>";
    $headers="MIME-Version: 1.0"."\r\n";
    $headers.="Content-type: text/html; charset=utf-8"."\r\n";
    $headers.="To: $mail"."\r\n";
    $headers.="From: contact@ewww.fr"."\r\n";
    mail($to, $subject, $message, $headers);
	}// sendMail()

	/* FUNCTIONS SUB CATEGORIES */
	public function selectAllSubCat()
	{
		$query = "SELECT id_subcat, nom_subcat, nom_cat 
   FROM SUBCATEG INNER JOIN CATEGORIE ON 
   SUBCATEG.id_categorie=CATEGORIE.id_categorie";
   $result = $this->conn->prepare($query);
   $result->execute();
   return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function delSubC()
  {
   $ID = strip_tags($this->value['ID_SUBCAT']);
   $query = "DELETE FROM SUBCATEG WHERE id_subcat=:ID";
   $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
   $result->execute();
   return $result;
  } 

  public function selAllByName()
  {
  	$query = "SELECT id_categorie, nom_cat FROM CATEGORIE";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public function insertSubCat()
  {
    $NOM = strip_tags($this->value['NOM_SUB']);
    $ID_CAT = strip_tags($this->value['ID_CAT']);
    $query = "INSERT INTO SUBCATEG (nom_subcat, id_categorie) VALUES(:NOM, :ID_CAT)";
    $result = $this->conn->prepare($query);
    $result->bindValue(':NOM', $NOM, PDO::PARAM_STR);
    $result->bindValue(':ID_CAT', $ID_CAT, PDO::PARAM_STR);
    $result->execute();
    return $result;

  }

  public function selSub(){
    $ID_S = strip_tags($this->value['ID_S']);
    $query = "SELECT nom_subcat, id_categorie FROM SUBCATEG WHERE id_subcat=:ID_S";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_S', $ID_S, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function updateSub()
  {
  	$ID = strip_tags($this->value['ID_SUB']);
  	$NOM = strip_tags($this->value['NOM_SUB']);
  	$ID_C = strip_tags($this->value['ID_CAT']);
    $query = "UPDATE SUBCATEG SET nom_subcat=:NOM, id_categorie=:ID_C WHERE id_subcat=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':NOM', $NOM, PDO::PARAM_STR);
    $result->bindValue(':ID_C', $ID_C, PDO::PARAM_STR);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;
  }

  /**** FUNCTIONS PRODUITS ****/
  public function selectProds(){
  	$query = "SELECT * FROM PRODUCT";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function insertPro(){
    $NOM_PROD = strip_tags($this->value['NOM_PROD']);
    $REF = strip_tags($this->value['REF']);
    $DESC = strip_tags($this->value['DESC']);
    $IMAGE = strip_tags($this->value['IMAGE']);

    $query = "INSERT INTO PRODUCT (nom_prod, ref, description, image) VALUES(:NOM_PROD, :REF, :DESCR,:IMAGE)";
    $result = $this->conn->prepare($query);
    $result->bindValue(':NOM_PROD', $NOM_PROD, PDO::PARAM_STR);
    $result->bindValue(':REF', $REF, PDO::PARAM_STR);
    $result->bindValue(':DESCR', $DESC, PDO::PARAM_STR);
    $result->bindValue(':IMAGE', $IMAGE, PDO::PARAM_STR);
    
    return $result->execute();
  }
  public function delProd()
  {
    $ID = strip_tags($this->value['ID_PROD']);
    $query = "DELETE FROM PRODUCT WHERE id_product=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;
  } 
  public function selProd(){
    $ID_PR = $this->value['ID_PR'];
    $query = "SELECT * FROM PRODUCT WHERE id_product=:ID_PR";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_PR', $ID_PR, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function updateProd(){
    $ID_PR = strip_tags($this->value['ID_PRODUCT']);
    $NOM_PROD = strip_tags($this->value['NOM_PROD']);
    $REF = strip_tags($this->value['REF']);
    $DESC = strip_tags($this->value['DESC']);
    $IMAGE = strip_tags($this->value['IMAGE_P']);

    $query = "UPDATE PRODUCT SET nom_prod=:NOM_PROD, ref=:REF, description=:DESCR, image=:IMAGE WHERE id_product=:ID_PR";
    $result = $this->conn->prepare($query);
    $result->bindValue(':NOM_PROD', $NOM_PROD, PDO::PARAM_STR);
    $result->bindValue(':REF', $REF, PDO::PARAM_STR);
    $result->bindValue(':DESCR', $DESC, PDO::PARAM_STR);
    $result->bindValue(':IMAGE', $IMAGE, PDO::PARAM_STR);
    $result->bindValue(':ID_PR', $ID_PR, PDO::PARAM_STR);
    
    return $result->execute();
  }

  /**** FUNCTIONS SUB-C - PRODUITS ****/
  public function selSP(){
    $query = "SELECT id_sp, nom_subcat, nom_prod FROM PRODUCT INNER JOIN SUB_PROD ON PRODUCT.id_product=SUB_PROD.id_product 
    INNER JOIN SUBCATEG ON SUB_PROD.id_subcat=SUBCATEG.id_subcat";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public function selAllSub()
  {
    $query = "SELECT id_subcat, nom_subcat FROM SUBCATEG";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function selAllPro()
  {
    $query = "SELECT id_product, nom_prod FROM PRODUCT";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function delSP()
  {
    $ID = strip_tags($this->value['ID_SP']);
    $query = "DELETE FROM SUB_PROD WHERE id_sp=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;
  }
  public function insertSP()
  {
    $ID_SUB = strip_tags($this->value['ID_SUB']);
    $ID_PROD = strip_tags($this->value['ID_PROD']);
    $query = "INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(:ID_SUB, :ID_PROD)";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_SUB', $ID_SUB, PDO::PARAM_STR);
    $result->bindValue(':ID_PROD', $ID_PROD, PDO::PARAM_STR);
    $result->execute();
    return $result;

  }
  public function selSPID()
  {
    $ID_SP = strip_tags($this->value['ID_SP']);
    $query = "SELECT id_subcat, id_product FROM SUB_PROD WHERE id_sp=:ID_SP";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_SP', $ID_SP, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public function updSP()
  {
    $ID = strip_tags($this->value['ID_SP']);
    $ID_SUB = strip_tags($this->value['ID_SUB']);
    $ID_PROD = strip_tags($this->value['ID_PROD']);
    $query = "UPDATE SUB_PROD SET id_subcat=:ID_SUB, id_product=:ID_PROD WHERE id_sp=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_SUB', $ID_SUB, PDO::PARAM_STR);
    $result->bindValue(':ID_PROD', $ID_PROD, PDO::PARAM_STR);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;
  }

  /**** FUNCTIONS CAT - PRODUITS ****/
  public function selCP(){
    $query = "SELECT id_cp, nom_cat, nom_prod FROM PRODUCT INNER JOIN CATEG_PROD ON PRODUCT.id_product=CATEG_PROD.id_product 
    INNER JOIN CATEGORIE ON CATEG_PROD.id_categorie=CATEGORIE.id_categorie";
    $result = $this->conn->prepare($query);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  #selAllByName()
  public function delCP()
  {
    $ID = strip_tags($this->value['ID_CP']);
    $query = "DELETE FROM CATEG_PROD WHERE id_cp=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;
  }
  public function insertCP()
  {
    $ID_CAT = strip_tags($this->value['ID_CAT']);
    $ID_PROD = strip_tags($this->value['ID_PROD']);
    $query = "INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(:ID_CAT, :ID_PROD)";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_CAT', $ID_CAT, PDO::PARAM_STR);
    $result->bindValue(':ID_PROD', $ID_PROD, PDO::PARAM_STR);
    $result->execute();
    return $result;

  }
  public function selCPID()
  {
    $ID_CP = strip_tags($this->value['ID_CP']);
    $query = "SELECT id_categorie, id_product FROM CATEG_PROD WHERE id_cp=:ID_CP";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_CP', $ID_CP, PDO::PARAM_STR);
    $result->execute();
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
  public function updCP()
  {
    $ID = strip_tags($this->value['ID_CP']);
    $ID_CAT = strip_tags($this->value['ID_CAT']);
    $ID_PROD = strip_tags($this->value['ID_PROD']);
    $query = "UPDATE CATEG_PROD SET id_categorie=:ID_CAT, id_product=:ID_PROD WHERE id_cp=:ID";
    $result = $this->conn->prepare($query);
    $result->bindValue(':ID_CAT', $ID_CAT, PDO::PARAM_STR);
    $result->bindValue(':ID_PROD', $ID_PROD, PDO::PARAM_STR);
    $result->bindValue(':ID', $ID, PDO::PARAM_STR);
    $result->execute();
    return $result;
  }
}
?>