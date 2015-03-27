<?php
class VProduct
{
  public function __construct(){}
  
  public function __destruct(){}
  
  public function showProduct($_data)
  {
    echo <<<HERE
    <h2>{$_data['nom_prod']}</h2>
    <p class="ref">Réf : {$_data['ref']}</p>
    <img src="../Img/{$_data['image']}" alt="{$_data['nom_prod']}" title="{$_data['nom_prod']}"  class='imgprodM' />
    <p>{$_data['description']}</p>
HERE;
  	
  } // showProduct($_data)
  
} // VProduct
?>