/*common.js*/
$(document).ready(function(){
    $("#header").load("./header.html", function(){

        /* mMenu */
        $(".mMenu").click(function(){
            var $active = $(".allmenu").hasClass("active");
            if($active == false){
                $(".allmenu").addClass("active");
            }else{
                $(".allmenu").removeClass("active");
            }
        });
        $(".closeBtn").click(function(){
            $(".allmenu").removeClass("active");
        });  


        /* mobile : allmenu btn(서브메뉴) */
        //add,remove Class 버전
        $(".all_gnb > ul > li .btn").click(function(){
            var $active = $(this).hasClass("active");
            console.log($active);

            if($active == false){
                $(this).addClass("active");
                $(this).closest(".all_gnb > ul > li").find("ul").addClass("select");
            }else{
                $(this).removeClass("active");
                $(this).closest(".all_gnb > ul > li").find("ul").removeClass("select");
            }
        });

        
    /*
        //slide Down,Up 버전
        $(".all_gnb > ul > li .btn").click(function(){
            var $active = $(this).hasClass("active");
            console.log($active);

            if($active == false){
                $(this).addClass("active");
                $(this).closest(".all_gnb > ul > li").find("ul").slideDown();
            }else{
                $(this).removeClass("active");
                $(this).closest(".all_gnb > ul > li").find("ul").slideUp();
            }
        });
    */

    });



    $("#footer").load("./footer.html", function(){

        /* footer > family*/
        $(".familyOn img").click(function(){
            const $active = $(".familyCont").hasClass("active");
            if($active == false){
                $(".familyCont").addClass("active");                
            }else{
                $(".familyCont").removeClass("active");    
            }        
        });

    });


    /* pageTop */
    $("#pageTop").click(function(){
        $("html, body").animate({scrollTop : $("#header").offset().top}, 400);

        return false;
    });

    
});


