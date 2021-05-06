$(function(){
    setTimeout(move,500)

    function move(){
        $(".get_ready , .allday , .everybody").addClass("on")
    }//move

    //라인업 윈도우
    
    $(window).scroll(function(){
		var top = $(document).scrollTop()
        console.log("top : ",top);
        if(top>200){
            $(".ph-1 , .jaebum").addClass("act")
        }else if(top<200){
            $(".ph-1 , .jaebum").removeClass("act")
        }

        if(top>400){
            $(".line02").addClass("act")
        }else if(top<400){
            $(".line02").removeClass("act")
        }

        if(top>720){
            $(".line03").addClass("act")
        }else if(top<720){
            $(".line03").removeClass("act")
        }
        })


    $(".sub_hov a, sub_nav").hover(function(){
        $(".sub_nav").stop().show()
    },function(){
        $(".sub_nav").stop().hide()
    })//메뉴 호버

    $(".line01 li").hover(function(){
        
        $(this).find("div , p").stop().fadeIn()
        
    },function(){
        $(this).find("div , p").stop().fadeOut()
    })//재범,ph-1
    
    $(".line02 li").hover(function(){
        
        $(this).find("div , p").stop().fadeIn()
        
    },function(){
        $(this).find("div , p").stop().fadeOut()
    })//청하 잇지 현아
    
    $(".line03 li").hover(function(){
        
        $(this).find("div , p").stop().fadeIn()
        
    },function(){
        $(this).find("div , p").stop().fadeOut()
    })//펜타곤 브레이브걸스 싸이퍼


    //라운지이미지 페이드아웃
    $(".lounge_left li").eq(0).show().siblings().hide()
    var now = 0;
    
    setInterval(function(){
        
        if(now<1){
            $(".lounge_left li").eq(now).fadeOut();
            now++;
            $(".lounge_left li").eq(now).fadeIn();
        }else{
            $(".lounge_left li").eq(now).fadeOut();
            now=0;
            $(".lounge_left li").eq(now).fadeIn();
        }  

        
    },2500)//setInterval
    
    
    //팝업
    $(".popup h1").click(function(){
        $(".popup").stop().hide()
    })

        
})//전체쿼리