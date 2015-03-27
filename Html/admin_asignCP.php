<div id="window"><img id="close" src="../Img/close.png" alt="close" title="close" /><form id="frmAsignCP"></form></div>
<div id="admin">
	<h2>Administration des Catégories - produits</h2>
	<div id="nouvCat">
		Nouveau relation: <a href="index.php?EX=addCP">Nouvelle Relation C - P</a>
	</div>
	<table id="tabprod">
		<thead>
			<tr>
				<th>Nom catégorie</th>
				<th>Nom produit</th>
				<th>M</th>
				<th>E</th>
			</tr>
		</thead>
		<tbody>
			<?php 
				$mcomm = new MCommerce();
				$cat = $mcomm->selCP();
				foreach ($cat as $key ) {
					echo "<tr id='".$key['id_cp']."'><td>".$key['nom_cat']."</td><td>".$key['nom_prod']."</td>
					<td class='center'><button class='button modifyCP'>Modifier</button></td>
					<td class='center'><button class='button trashCP'>Poubelle</button></td>
					</tr>";
				}
			?>	
		</tbody>
	</table>
</div>