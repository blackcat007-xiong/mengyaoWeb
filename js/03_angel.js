window.addEventListener('load', function() {
    var pic = document.querySelector('.angel');
    document.addEventListener('mousemove', function(e) {
        var x = e.pageX;
        var y = e.pageY;
        pic.style.left = x + 'px';
        pic.style.top = y + 'px';

    });
})