<div id="window"><img id="close" src="../Img/close.png" alt="close" title="close" /><form id="frmEdCat"></form></div>
<div id="admin">
	<h2>Administration des catégories</h2>
	<div id="nouvCat">
		Nouvelle catégorie: <a href="index.php?EX=addCat">Nouvelle Cat</a>
	</div>
	<table id="tabcat">
		<thead>
			<tr>
				<th>Nom catégorie</th>
				<th>M</th>
				<th>E</th>
			</tr>
		</thead>
		<tbody>
			<?php 
			$mcomm = new MCommerce();
			$cat = $mcomm->selAllCat();
			foreach ($cat as $key ) {
				echo "<tr id='".$key['id_categorie']."'><td>".$key['nom_cat']."</td>
				<td class='center'><button class='button modifyCat'>Modification</button></td>
				<td class='center'><button class='button trashCat'>Poubelle</button></td>
				</tr>";
			}
			?>	
		</tbody>
	</table>
</div>
