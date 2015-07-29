function statusFormatter(value, row) {
	if(value){
		return "Ativo"
	}else{
		return "Inativo"
	}
}

function operateFormatter(value, row, index) {
    return [
        '<a class="edit ml10" href="javascript:void(0)" title="editar">',
            '<i class="glyphicon glyphicon-edit"></i>',
        '</a>',
        '<a class="remove ml10" href="javascript:void(0)" title="remover">',
            '<i class="glyphicon glyphicon-remove"></i>',
        '</a>'
            
].join('');
}


function operateFormatterPadrao(value, row, index) {
    return [
        '<a class="edit ml10" href="javascript:void(0)" title="Edit">',
            '<i class="glyphicon glyphicon-edit"></i>',
        '</a>',
        '<a class="remove ml10" href="javascript:void(0)" title="Remove" style="margin-left: 10px;">',
            '<i class="glyphicon glyphicon-remove"></i>',
        '</a>'
    ].join('');
}