<?php
class VHtml
{
    public function _constructor(){}

    public function _destructor(){}

    public function showHtml($_html)
    {
        (file_exists($_html)) ? include($_html) : include('../Html/unknown.html');

    } // showHtml($_html)

} // VHtml
?>