/**
 * Created by h14022425 on 19/11/14.
 */

DEBUG_AJAX = true;
var src = new Array();
var i = 0;

src[i++] = 'ajax.js';
src[i++] = 'form.js';
src[i++] = 'contact.js';
src[i++] = 'session.js';
src[i++] = 'categories.js';
src[i++] = 'subcateg.js';
src[i++] = 'product.js';
src[i++] = 'sub_prod.js';
src[i++] = 'cat_prod.js';
src[i++] = 'init.js';
src[i++] = 'jquery.min.js';
src[i++] = 'buttonsCate.js';
src[i++] = 'buttonsSub.js';
src[i++] = 'buttonsProd.js';
src[i++] = 'buttonSP.js';
src[i++] = 'buttonCP.js';

for (var j = 0; j < i; ++j)
{
    document.write('<script src="../Js/' + src[j] + '"></script>');
}