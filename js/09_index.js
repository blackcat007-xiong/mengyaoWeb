window.addEventListener('load', function() {
    //num控制下一张图片的播放
    //circle控制着小圆圈的播放
    //1.获取两个按钮
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //2.鼠标一经过focus,就让两个按钮显示出来,离开隐藏
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {


        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            //手动调用事件
            arrow_r.click();
        }, 2000)
    })

    //3.动态生成小圆圈,有几张图片,就有几个圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    //遍历ul里面的li
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //记录当前小圆圈的索引号
        li.setAttribute('index', i)
        ol.appendChild(li);
        //4.小圆圈的排他思想
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //5.点击小圆圈移动图片,移动的是ul
            //ul移动的距离就是当前li的索引号乘以图片的宽度
            var index = this.getAttribute('index');
            //当我们点击了某个小li,就要把小li给num
            num = index;
            //当我们点击了某个小li,就要把小li给circle
            circle = index;
            animate(ul, -index * focusWidth);
        })

    }
    //把ol里面的第一个小li的类名设置成current
    ol.children[0].className = 'current';
    //6.克隆第一张图片,放在ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮,图片滚动一次
    var num = 0;
    //circle控制小圆圈的播放
    var circle = 0;
    //节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            //如果走到了最后的一张
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; //打开节流阀
            });
            //8.点击右侧按钮,小圆圈跟随一起变化,可以再声明一个变量控制小圆圈的播放
            circle++;
            //circle == 4 说明走到克隆的这张图片
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    })

    //9.左侧按钮控制轮播图
    arrow_l.addEventListener('click', function() {
        //如果走到了最后的一张
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';

        }
        num--;
        animate(ul, -num * focusWidth);
        //8.点击右侧按钮,小圆圈跟随一起变化,可以再声明一个变量控制小圆圈的播放
        circle--;
        //if circle小于0,说明第一张图片,小圆圈要改为第四个小圆圈,索引为3
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();
    })

    function circleChange() {
        //先清除其余小圆圈的类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小圆圈的类名
        ol.children[circle].className = 'current';
    }

    //10.自动播放轮播图
    var timer = setInterval(function() {
        //手动调用事件
        arrow_r.click();
    }, 2000)
})