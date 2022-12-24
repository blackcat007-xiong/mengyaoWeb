window.addEventListener('load', function() {
    // 表单验证代码,验证用户名,密码,邮箱,电话
    //1.选中4个元素
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    var email = document.querySelector("#email");
    var telephone = document.querySelector("#telephone");
    //2.定义正则
    var reg_username = /^\w{8,20}$/;
    var reg_password = /^\w{8,20}$/;
    var reg_email = /^\w+@\w+\.\w+$/;
    var reg_telephone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    //3.添加事件
    //验证用户名
    //添加一个失去焦点的事件侦听器
    username.addEventListener('blur', function() {
        //正则表达式验证文本框获取的数值
        var flag = reg_username.test(username.value);
        if (flag) {
            //如果正确边框灰色,后面添加正确的类success
            this.style.border = '1px solid #a6a6a6';
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            //如果错误边框红色,后面添加错误的类
            this.style.border = '1px solid red';
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
        }
    })

    //验证密码
    password.addEventListener('blur', function() {
        var flag = reg_password.test(password.value);
        if (flag) {
            this.style.border = '1px solid #a6a6a6';
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.style.border = '1px solid red';
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
        }
    })

    //验证邮箱
    email.addEventListener('blur', function() {
        var flag = reg_email.test(email.value);
        if (flag) {
            this.style.border = '1px solid #a6a6a6';
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.style.border = '1px solid red';
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
        }
    })

    //验证电话号码
    telephone.addEventListener('blur', function() {
        var flag = reg_telephone.test(telephone.value);
        if (flag) {
            this.style.border = '1px solid #a6a6a6';
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.style.border = '1px solid red';
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
        }
    })
})