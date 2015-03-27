<?php
class VProducts
{
    public function __construct(){}

    public function __destruct(){}

    public function showProducts($_data)
    {
      if (count($_data)==0) {
        echo "<h2>Il n'y a pas produits</h2>";
    } else {
     echo '<h2>' . $_data[0]['nom_subcat'] . '</h2>';
     unset($_data[0]['nom_subcat']);
         foreach ($_data as $val)
         {
            $desc = substr($val['description'], 0, 150)." [...]";
            echo <<<HERE
            <article>
             <a href="../Php/index.php?EX=p{$val['nom_prod']}"><img src="../Img/{$val['image']}" alt="{$val['nom_prod']}" title="{$val['nom_prod']}" class='imgprod'/></a>
             <h3><a href="../Php/index.php?EX=p{$val['nom_prod']}">{$val['nom_prod']}</a></h3>
             <p>$desc</p>
         </article>
HERE;
        }
    }    

} // showProducts($_data)

} // VProducts
?>