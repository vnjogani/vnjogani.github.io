
$(document).ready(function(){

var x = $('<span id="heading">FSMUN | Foutainhead School Model United Nations</span><ul id="menu"><li><a href="about.html">about</a></li><li><a href="participate.html">participate</a></li><li><a href="team.html">team</a></li><li><a href="join.html">support</a></li><li><a href="resources.cshtml">resources</a></li></ul>');

$("body").prepend(x);

$.twitter.test(printSuccess);

});

function printSuccess(data, textStatus){

alert(data);

}
