window.addEventListener('load', function() {
    //注册功能
    var submit = document.querySelector('.submit');
    var msg = document.querySelector('#Msg');
    submit.addEventListener('click', function() {
        var u_name = username.value;
        var p_wd = password.value;
        localStorage.setItem('username', u_name);
        localStorage.setItem('password', p_wd);
        alert('注册成功,请登录');
    })

})