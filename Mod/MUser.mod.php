<?php 
/**
 * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
 */
class MUser
{
	private $conn;

	public function __construct(){
		$this->conn = new PDO(DATABASE, LOGIN, PASSWORD);
	}
	public function __destruct(){}

	public function setValue($_value)
	{
		$this->value = $_value;
	} // Set_value($_value)

	public function selectLogin(){
		$LOG = strip_tags($this->value['LOGIN']);
		$PWD = md5(strip_tags($this->value['PASSWORD']));
		$query = "SELECT prenom, nom FROM USER WHERE n_user=:LOGIN AND password=:PASSWORD";
		$result = $this->conn->prepare($query);

		$result->bindValue(':LOGIN', $LOG, PDO::PARAM_STR);
    	$result->bindValue(':PASSWORD', $PWD, PDO::PARAM_STR);

	    $result->execute();
	    return $result->fetchAll(PDO::FETCH_ASSOC);
	}
}
 ?>