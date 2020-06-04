//href="app-promoactivador.html" target="_blank"

$('#bLogin').click(() => {
    if($('#usr').val().trim() == '' || $('#passHide').val().trim() == '')
        $('#datosError').show();

    if($('#usr').val() == 'USUARIO' && $('#passHide').val() == 'ITALIKA'){
        window.location="app-promoactivador.html"; 
    }else{
        $('#datosError').show();
    }    
});