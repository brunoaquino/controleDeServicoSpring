var modulo = angular.module('csAdmin', ['minhasDiretivas','ngAnimate']);


function trataMensagemDeErro(msg){
if(msg.responseText != undefined){
	alert(JSON.parse(msg.responseText).mensagemDeErro);
}}