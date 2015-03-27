<div id="window"><img id="close" src="../Img/close.png" alt="close" title="close" /><form id="frmAsignSP"></form></div>
<div id="admin">
	<h2>Administration des sous-catégories - produits</h2>
	<div id="nouvCat">
		Nouveau relation: <a href="index.php?EX=addSP">Nouvelle relation</a>
	</div>
	<table id="tabAsign">
		<thead>
			<tr>
				<th>Nom sous-catégorie</th>
				<th>Nom produit</th>
				<th>M</th>
				<th>E</th>
			</tr>
		</thead>
		<tbody>
			<?php 
				$mcomm = new MCommerce();
				$cat = $mcomm->selSP();
				foreach ($cat as $key ) {
					echo "<tr id='".$key['id_sp']."'><td>".$key['nom_subcat']."</td><td>".$key['nom_prod']."</td>
					<td class='center'><button class='button modifySP'>Modifier</button></td>
					<td class='center'><button class='button trashSP'>Poubelle</button></td>
					</tr>";
				}
			?>	
		</tbody>
	</table>
</div>