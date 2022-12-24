window.addEventListener('click', function() {
    //本地存储登陆网站
    var u_name = document.querySelector('#username');
    var p_word = document.querySelector('#password');
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    var btn = document.querySelector('.btn');
    var form = document.querySelector('form');
    //当按钮点击后,根据本地存储的用户名和密码,比较是否相当,若相等,跳转到主页
    btn.addEventListener('click', function() {
        if (u_name.value == username && p_word.value == password) {
            form.action = './index.html';
        }
    })
})