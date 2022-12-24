window.addEventListener('load', function() {
    function showTime() {
        var spans = document.querySelectorAll('span');
        var endTime = new Date('2022-12-25 12:00:00').getTime();
        var newTime = new Date().getTime();
        var diffTime = (endTime - newTime) / 1000;
        var day = parseInt(diffTime / 60 / 60 / 24);
        var honur = parseInt(diffTime / 60 / 60 % 24);
        var min = parseInt(diffTime / 60 % 60);
        var sen = parseInt(diffTime % 60);
        spans[0].innerText = day;
        spans[1].innerText = honur;
        spans[2].innerText = min;
        spans[3].innerText = sen;
    }
    setInterval(showTime, 1000)
})