<?php 
    $mcomm = new MCommerce();
    $values = $mcomm->selAllByName();
    $cate ="";
    for ($i=0; $i < count($values); $i++) { 
        $cate .= "<option value='".$values[$i]['id_categorie']."'>".$values[$i]['nom_cat']."</option>";
    }

    # produits
    $values = $mcomm->selAllPro();
    $prods ="";
    for ($i=0; $i < count($values); $i++) { 
        $prods .= "<option value='".$values[$i]['id_product']."'>".$values[$i]['nom_prod']."</option>";
    }
?>
<h2>Ajouter une nouvelle relation C-P</h2>
<form id="frmAddCP">
    <fieldset>
        <p>
            <label for="categorie">Catégorie</label>
            <select name="CATEGORIE" id="categorie" class="required">
                <!-- <option value="" selected="selected" disabled="disabled">Sélectionnez</option> -->
                <?=$cate; ?>
            </select>
        </p>
        <p>
            <label for="produit">Produit</label>
            <select name="PRODUIT" id="produit" class="required">
                <!-- <option value="" selected="selected" disabled="disabled">Sélectionnez</option> -->
                <?=$prods; ?>
            </select>
        </p>
        <p class="center"><input type="submit" value="Ok" /></p>
    </fieldset>
</form>
<div id="error"></div><br><br>