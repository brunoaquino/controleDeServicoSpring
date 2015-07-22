//erroFunction = function(msg) {
//	alert(msg.statusText);
//}
//sucessoFunction = function(msg) {
//}
//
//function call(url, data, sucesso, erro) {
//	if (sucesso != undefined) {
//		sucessoFunction = sucesso;
//	}
//	if (erro != undefined) {
//		erroFunction = erro;
//	}
//	return $.ajax({
//		type : 'POST',
//		url : url,
//		data : data,
//		dataType : 'json',
//		async : false
//	}).success(sucessoFunction).error(erroFunction);
//}

function call(url, data) {
	return $.ajax({
		type : 'POST',
		url : url,
		data : data,
		dataType : 'json',
		async : false
	});
}
