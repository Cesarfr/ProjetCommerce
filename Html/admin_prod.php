<div id="window"><img id="close" src="../Img/close.png" alt="close" title="close" /><form id="frmMPR"></form></div>
<div id="admin">
	<h2>Administration des produits</h2>
	<div id="nouvCat">
		Nouveau produit: <a href="index.php?EX=addProd">Nouveau Prod</a>
	</div>
	<table id="tabprod">
		<thead>
			<tr>
				<th>Nom product</th>
				<th>Réference</th>
				<th>Description</th>
				<th>Image</th>
				<th>M</th>
				<th>E</th>
			</tr>
		</thead>
		<tbody>
			<?php 
				$mcomm = new MCommerce();
				$cat = $mcomm->selectProds();
				foreach ($cat as $key ) {
					echo "<tr id='".$key['id_product']."'><td>".$key['nom_prod']."</td><td>".$key['ref']."</td><td>".substr($key['description'], 0, 50)."[...]
					</td><td><img class='imgprod' src='../Img/".$key['image']."' alt='".$key['nom_prod']."'/></td>
					<td class='center'><button class='button modifyProd'>Modification</button></td>
					<td class='center'><button class='button trashProd'>Poubelle</button></td>
					</tr>";
				}
			?>	
		</tbody>
	</table>
</div>