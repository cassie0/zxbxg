 <?php 
    // print_r($_SERVER);
    // var_dump($_SERVER);

    //路径
    $path = 'index';
    //文件名称
    $fileName='index';
    //判断数组中是否包含对应的key
    if(array_key_exists('PATH_INFO',$_SERVER)){
        //获取URL中的路径
        $url=$_SERVER['PATH_INFO'];  // /index/login
        $str=substr($url, 1);   //从第1个字符开始截取字符串到末尾
        $pathinfo=explode('/', $str);  //根据/分割字符串，得到一个数组
        if(count($pathinfo)==2){
            //用新路径覆盖原来的路径
            //两层路径
            $path=$pathinfo[0];
            $fileName=$pathinfo[1];
        }else{
            $fileName='login';
        }
    }
    //在当前页面嵌入另一个页面
    include('/view/'.$path.'/'.$fileName.'.html');

 ?>