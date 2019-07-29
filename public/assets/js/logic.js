// Update burger status
$(document).on('click', '.devour', function() {
    var id = $(this).data('id');

    // Pass data-id from click to server 
    // To be used in updating database
    $.post('api/burger/' + id).then(location.reload())
});

// Add burger
$(document).on('click', '.input-group-text', function() { 
    var input = $('.addBurger').val();
    
    if (input === '') {
        $('.error').html('<em>Please enter a non-empty burger name.</em>').removeClass('d-none');
    } else { 
        $('.error').addClass('d-none');
        $.post('api/burger', {addBurger:input}).then(location.reload())
    };

});