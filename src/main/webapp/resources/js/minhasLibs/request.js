function call(url, data) {
	return $.ajax({
		type : 'POST',
		url : url,
		data : data,
		dataType : 'json',
		async : false
	});
}
