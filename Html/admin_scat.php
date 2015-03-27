<div id="window"><img id="close" src="../Img/close.png" alt="close" title="close" /><form id="frmEdS"></form></div>
<div id="admin">
	<h2>Administration des sub-catégories</h2>
	<div id="nouvCat">
		Nouvelle sub-catégorie: <a href="index.php?EX=addSCat">Nouvelle sous-c</a>
	</div>
	<table id="tabscat">
		<thead>
			<tr>
				<th>Nom sub-catégorie</th>
				<th>Nom catégorie</th>
				<th>M</th>
				<th>E</th>
			</tr>
		</thead>
		<tbody>
			<?php 
			$mcomm = new MCommerce();
			$cat = $mcomm->selectAllSubCat();
			foreach ($cat as $key ) {
				echo "<tr id='".$key['id_subcat']."'><td>".$key['nom_subcat']."</td>"."<td>".$key['nom_cat']."</td>
				<td class='center'><button class='button modifySubCat'>Modification</button></td>
				<td class='center'><button class='button trashSubCat'>Poubelle</button></td>
				</tr>";
			}
			?>	
		</tbody>
	</table>
</div>
<!-- SQL = SELECT id_subcat, nom_subcat, nom_cat FROM SUBCATEG INNER JOIN CATEGORIE ON SUBCATEG.id_categorie=CATEGORIE.id_categorie -->