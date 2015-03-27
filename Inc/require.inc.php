<?php
/**
 * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
 */
define ('DEBUG', true);
define('DATABASE', 'mysql:host=localhost;dbname=COMMERCE');
define('LOGIN', 'root');
define('PASSWORD', '');

function __autoload($class)
{
    switch ($class[0])
    {
        case 'V' : require_once('../View/'.$class.'.view.php');
            break;
        case 'M' : require_once('../Mod/'.$class.'.mod.php');
            break;
    }
    return;
}

function redimensionne($file_image)
{
    // Définition de la largeur et de la hauteur maximale
    $width_new = 600;
    $height_new = 600;

    // Calcul des nouvelles dimensions
    $tab = getimagesize($file_image);
    $width_old = $tab[0];
    $height_old = $tab[1];
    $mime_old = $tab['mime'];
    
    // Ratio pour la mise à l'échelle
    $ratio = $width_old/$height_old;

    // Redimensionnement suivant le ratio
    if ($width_new/$height_new > $ratio)
    {
        $width_new = $height_new*$ratio;
    }
    else
    {
        $height_new = $width_new/$ratio;
    }

    // Nouvelle image redimensionnée
    $image_new = imagecreatetruecolor($width_new, $height_new);
    
    // Création d'une image à partir du fichier d'origine et ssuivant le mime
    switch ($mime_old)
    {
        case 'image/png' :  $image_old = imagecreatefrompng($file_image); break;
        case 'image/jpeg' : $image_old = imagecreatefromjpeg($file_image); break;
        case 'image/gif' :  $image_old = imagecreatefromgif($file_image); break;
    }

    // Copie et redimensionne l'ancienne image dans la nouvelle
    imagecopyresampled($image_new, $image_old, 0, 0, 0, 0, $width_new, $height_new, $width_old, $height_old);

    // Retourne la nouvelle image redimensionnée (Attention ce n'est pas un fichier mais une image)
    return $image_new;

} // redimensionne($image_old)

if (DEBUG)
{
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    function debug($Tab)
    {
        echo '<pre>Tab';
        print_r($Tab);
        echo '</pre>';

    } // debug($Tab)
}
?>