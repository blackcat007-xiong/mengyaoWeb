 //为输入框绑定keyup事件
 $(function() {
     $('#ipt').on('keyup', function() {
         var keywords = $(this).val().trim();
         if (keywords <= 0) {
             return $('#suggest-list').empty().hide()
         }
         // console.log(keywords);
         getSuggestList(keywords);
     })

     function getSuggestList(kw) {
         $.ajax({
             url: 'https://suggest.taobao.com/sug?q=' + kw,
             dataType: 'jsonp',
             success: function(res) {
                 // console.log(res);
                 renderSuggestList(res);
             }
         })
     }

     // 渲染UI结构
     function renderSuggestList(res) {
         if (res.result.length <= 0) {
             return $('#suggest-list').empty().hide()
         }

         var htmlStr = template('tpl-suggestList', res)
         $('#suggest-list').html(htmlStr).show();
     }

 })