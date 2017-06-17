define(['jquery','cookie'],function($){
   $('#formId').click(function(){
        $.ajax({
            type:'post',
            url:'/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function(data){
                if(data.code==200){
                    //把登陆的用户信息存储到cookie里面
                    $.cookie('loginInfo',JSON.stringify(data.result),{path: '/'})
                    //登录成功，跳转到主页面
                    location.href='/index/index'; 
                }
            }
        });
        //阻止默认事件
        return false;
    });
})