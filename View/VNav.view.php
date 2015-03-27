<?php
    class VNav
    {
        public function __construct(){}

        public function __destruct(){}

        public function showNav()
        {

          $mcomm = new MCommerce();
          $catego = $mcomm->selectAllCat();
            
          $li = '';
          $ol = '<ol>';
          $olf = '</ol>';
          foreach ($catego as $val)
          {
            $li .= "<li><a href='../Php/index.php?EX=a".urlencode($val['nom_cat'])."'>".$val['nom_cat']."</a>";

            $idcat = $mcomm->selectIDCat($val['nom_cat']);
            $id = $idcat['id_categorie'];
            if ($id!=0) {
            $subC = $mcomm->selectSub($id);
                if (count($subC)!=0) {
                    $li.=$ol;
                    foreach ($subC as $v){
                        $li .= "<li><a href='../Php/index.php?EX=c".urlencode($v[0])."'>".$v[0].'</a></li>';
                    }
                    $li.=$olf;
                }
            }

            $li .='</li>';
          }
    
          $nav = "<ol>$li";
          if(isset($_SESSION['USER'])){
            $nav.="<li>
              <a>Administrateur</a>
              <ol>
                <li>
                  <a href='../Php/index.php?EX=cat'>Catégories</a>
                </li>
                <li>
                  <a href='../Php/index.php?EX=scat'>Sous-catégories</a>
                </li>
                <li>
                  <a href='../Php/index.php?EX=prod'>Products</a>
                </li>
                <li>
                  <a href='../Php/index.php?EX=asignCP'>Asign CAT-PROD</a>
                </li>
                <li>
                  <a href='../Php/index.php?EX=asign'>Asign SUBC-PRO</a>
                </li>
                <li>
                  <a href='../Php/index.php?EX=deconnect'>Deconnexion</a>
                </li>
              </ol>
            </li><li><b>".$_SESSION['USER']."</b></li>";
          }
          $nav.="</ol>";
          echo $nav;
        } // showNav()

    } // VNav
?>