window.addEventListener('load', function() {
    var btn = document.querySelector('.btn');
    var text = document.querySelector('.textarea');
    var ul = document.querySelector('.list_ul');
    btn.onclick = function() {
        if (text.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            var li = document.createElement('li');
            li.innerHTML = text.value;
            // ul.appendChild(li);
            ul.insertBefore(li, ul.children[0]);
        }
    }
})