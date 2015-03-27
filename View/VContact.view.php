<?php
class VContact
{
  public function __construct(){}
  
  public function __destruct(){}
  
  public function showContact()
  {
    $vhtml = new VHtml();
    $vhtml->showHtml('../Html/contact.html');
    
  } // showAsideLeft()
  
} // VAside
?>