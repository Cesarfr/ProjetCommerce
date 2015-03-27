<?php
    global $page;
    $vnav = new VNav();
    $vaside = new VAside();
    $vpage = new $page['class']();
    /**
     * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
     */
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr">
<head>
    <meta charset="utf-8" />
    <title><?=$page['title']?></title>
    <link rel="stylesheet" type="text/css" href="../Css/projet.css" />
</head>

<body>

<header>
    <?php if (!isset($_SESSION['USER'])) {
        echo "<h1 class='carrerouge' id='carrerouge'>&nbsp;</h1>";
    } ?>
    <h1 id="logo" title="logo">Logo</h1>
    <div class="pub" id="<?=$page['bande']?>"><p>Bandeau</p></div>
    <nav>
        <?php $vnav->showNav() ?>
    </nav>
</header>
<br>
<aside>
    <?php $vaside->showAsideLeft() ?>
</aside>

<div id="content">
    <?php $vpage->$page['method']($page['arg']) ?>
</div><!-- id="content" -->

<aside>
    <?php $vaside->showAsideRight() ?>
</aside>

<footer>
    <p>Qui sommes nous ? | <a id="cont">Contact</a> | Copyright 2014 phpconsulting</p>
</footer>

<script src="../Js/operations.js"></script>
</body>
</html>
