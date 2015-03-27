<?php
class VAside
{
  public function __construct(){}
  
  public function __destruct(){}
  
  public function showAsideLeft()
  {
    $this->info();
    
    $this->moment();
    
  } // showAsideLeft()

  public function showAsideRight()
  {
    $this->edito();
    
    $this->propos();
  	  
  } // showAsideRight()
  
  private function info()
  {
  	$vhtml = new VHtml();
  	$vhtml->showHtml('../Html/info.html');
  	 
  } // info()

  private function moment()
  {
  	$vhtml = new VHtml();
  	$vhtml->showHtml('../Html/moment.html');
  
  } // moment()

  private function edito()
  {
  	$vhtml = new VHtml();
  	$vhtml->showHtml('../Html/edito.html');
  
  } // edito()
  
  private function propos()
  {
  	$vhtml = new VHtml();
  	$vhtml->showHtml('../Html/propos.html');
  
  } // propos()
  
} // VAside
?>