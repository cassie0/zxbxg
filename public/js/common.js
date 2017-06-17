define(['jquery','cookie'],function($){
	//控制左侧菜单的展开和折叠
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//实现退出功能
	$("#logout").click(function(){
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function(data){
                // $.removeCookie('loginInfo',{path: '/'});
                location.href='/login';
                // console.log(loginInfo);
                // if(code==200){
                // //     
                // // }
            }
        })
    })
    //获取请求路径
    var pathname = location.pathname;
    // console.log(pathname);
    // console.log($.cookie('PHPSESSID'));
    //判断登录与否用户要通过 PHPSESSID
    if(pathname != '/login' && !$.cookie('PHPSESSID')){
        //没有登录要重新跳转到登录页面
        location.href='/login';
    }
    //获取登录用户的cookie信息
    var loginInfo = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'))
    if(loginInfo){
        //渲染页面
        $(".aside .profile").find('img').attr('src',loginInfo.tc_avatar);
        $(".aside .profile").find('h4').text(loginInfo.tc_name);
    }

})

