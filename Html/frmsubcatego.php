<?php 
    $mcomm = new MCommerce();
    $values = $mcomm->selAllByName();
    $options ="";
    for ($i=0; $i < count($values); $i++) { 
        $options .= "<option value='".$values[$i]['id_categorie']."'>".$values[$i]['nom_cat']."</option>";
    }
?>
<h2>Ajouter une sub-catégorie</h2>
<form id="frmAddScat">
    <fieldset>
        <p>
            <label for="nom_sub">Nom sub-catégorie</label>
            <input type="text" class="required" id="nom_sub" name="NOM_SUB" maxlength="50" />
        </p>
        <p>
            <label for="categorie">Catégorie</label>
            <select name="CATEGORIE" id="categorie">
                <!-- <option value="" selected="selected" disabled="disabled">Sélectionnez</option> -->
                <?=$options ?>
            </select>
        </p>
        <p class="center"><input type="submit" value="Ok" /></p>
    </fieldset>
</form>
<div id="error"></div>