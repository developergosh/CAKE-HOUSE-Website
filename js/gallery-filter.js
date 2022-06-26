$('#nav > a').on('click', function () {
    let filter_class = $(this).attr('rel');
    if (filter_class === 'all') {
        show_all();
    } else {
        do_filter(filter_class);
    }
});

function do_filter(filter_class) {
    hide_all();
    $('.grid__item.' + filter_class).each((k, v) => {
        console.log(v);
        $(v).show();
    })
}

function show_all() {
    $('.grid__item').show();
}

function hide_all() {
    $('.grid__item').hide();
}
