<?php 
    $mcomm = new MCommerce();
    $values = $mcomm->selAllSub();
    $subs ="";
    for ($i=0; $i < count($values); $i++) { 
        $subs .= "<option value='".$values[$i]['id_subcat']."'>".$values[$i]['nom_subcat']."</option>";
    }

    # produits
    $values = $mcomm->selAllPro();
    $prods ="";
    for ($i=0; $i < count($values); $i++) { 
        $prods .= "<option value='".$values[$i]['id_product']."'>".$values[$i]['nom_prod']."</option>";
    }
?>
<h2>Ajouter une nouvelle relation S-P</h2>
<form id="frmAddSP">
    <fieldset>
        <p>
            <label for="subcat">Sous-catégorie</label>
            <select name="SUBCAT" id="subcat" class="required">
                <!-- <option value="" selected="selected" disabled="disabled">Sélectionnez</option> -->
                <?=$subs; ?>
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