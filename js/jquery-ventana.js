$(document).ready(function(){
	rh($(window).height());
	$('#check_all').click(function(){
		var checkedStatus = this.checked;
		$('.tGeneral tbody tr').find('td:first :checkbox').each(function() {
			$(this).prop('checked', checkedStatus);
		});
	});
});

$(window).resize(function(){
	rh($(window).height());
});

function rh(h){
	var hEncabezado = $('header').outerHeight(true);
	var hFooter = $('footer').outerHeight(true);
	var hDocument = $(document).outerHeight(true);
	var hS = h - (hEncabezado+hFooter);
	$('section.contenido_principal div.contenedor').height(hS);

	if(hDocument>h) {
		$('footer').css('position','relative');
	} else {
		 $('footer').css('position','absolute');
	}
}