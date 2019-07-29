$(document).on('click', '.devour', function(){
    var id = $(this).data('id')
    
    $.post('api/burger/' + id).then(location.reload());
})