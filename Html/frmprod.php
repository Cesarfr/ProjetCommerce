<h2>Ajouter un produit</h2>
<form id="frmAddProd" enctype="multipart/form-data">
    <fieldset>
        <p>
            <label for="nom_prod">Nom produit</label>
            <input type="text" class="required" id="nom_prod" name="NOM_PROD" maxlength="50" />
        </p>
        <p>
            <label for="ref">Réference</label>
            <input type="text" class="required" id="ref" name="REF" maxlength="10">
        </p>
        <p>
            <label for="desc">Description</label>
            <textarea name="DESC" id="desc" cols="30" rows="10" class="required"></textarea>
        </p>
        <p>
            <label for="image_p">Image</label>
            <input type="file" class="required" id="image_p" name="IMAGE_P">
            <div id="fileErr"></div>
        </p>
        <p class="center"><input type="submit" value="Ok" /></p>
    </fieldset>
</form>
<div id="error"></div><br><br>