/*common.js*/
$(document).ready(function(){
    
    /* slider_01 */
    
    //#00. 공용 함수 구성
    function counting(){
        var $cur_page = $("#slider_01 ul li").eq(1).attr("rel");

        //모니터 화면에 보이는 슬라이드에 .active를 부여 -> 타이틀과 버튼이 나오도록 구성
        $("#slider_01 ul li").removeClass("active");
        $("#slider_01 ul li").eq(1).addClass("active");    
    }

    //#1. 자동 슬라이드 기능 구성
    var $lastSlide = $("#slider_01 ul li").last();
    $("#slider_01 ul").prepend($lastSlide);

    counting();

    setInterval(function(){
        var $hover = $("#slider_01").hasClass("hover");

        console.log($hover);
        var $stop = $("#slider_01 .slider_play").hasClass("stop");

        if($hover == true || $stop == true){
            //일시정지
        }else{
            //자동재생
            var $first = $("#slider_01 ul li").first();
            $("#slider_01 ul").stop().animate({"margin-left":"-200%"}, 300, function(){
                $("#slider_01 ul").append($first).css("margin-left","-100%");

                counting();

            });
        }
    }, 4000);

    //#3. 버튼에 의해 통제되는 자동 슬라이드의 재생과 정지 기능
    $("#slider_01 .slider_play").click(function(){
        var $state = $(this).hasClass("stop");  //클릭시 검사
        console.log($state);

        if($state == false){
            $(this).addClass("stop");
            $(this).html(`<img src="./img/btn_play.png" alt="">`);
            //시점상 슬라이드는 멈춰야해
        }else{
            $(this).removeClass("stop");
            $(this).html(`<img src="./img/btn_stop.png" alt="">`);
            //시점상 슬라이드를 자동으로 돌려라
        }
    });

    //#4. 화살표 기능 부여(prev : 이전이미지(좌측에 위치한 이미지가 우측으로 이동하면서 나온다) / next : 다음이미지(우측에 위치한 이미지가 좌측으로 이동하면서 나온다.))
    $("#slider_01 .prev").click(function(){
        var $last = $("#slider_01 ul li").last();
        $("#slider_01 ul").stop().animate({"margin-left":"0%"}, 300, function(){
            $("#slider_01 ul").prepend($last).css("margin-left", "-100%");

            counting();

        });
        return false;
    });

    $("#slider_01 .next").click(function(){
        var $first = $("#slider_01 ul li").first();
        $("#slider_01 ul").stop().animate({"margin-left":"-200%"}, 300, function(){
            $("#slider_01 ul").append($first).css("margin-left", "-100%");

            counting();

        });
        return false;
    });



    /* business */
    var $business = [
        ["main_icon01_off.png", "산업발전의 근간이 되는 도로,교량,철도 및 단지 조성 공사부터 생명의 근원인 맑고 깨끗한 물을 전국에 공급하기 위한 수처리 사업에 이르기까지 오늘도 한화건설은 국토 곳곳에 생명을 불어 넣습니다.", "main_icon01_off.png"],
        ["main_icon02_off.png", "둘러싼 한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로 예술성과 기능이 조화를 이룬 공간입니다. 최고의 효율성과 편의성이 구비된 공간 창조를 통해 행복한 생활과 쾌적한 여유까지 제공해 드립니다."],
        ["main_icon03_off.png", "한화건설이 창조하는 주거 공간에는 친환경적인 이상과 인간 중심의 주거 과학이 고스란히 살아 있습니다. 대한민국을 대표하는 최고 수준의 랜드마크에서 누리는 삶, 이 모든 꿈과 행복을 함께 나누고 싶습니다."],
        ["main_icon04_off.png", "발전 및 담수플랜트, 화공플랜트 등 국내 플랜트 사업의 선두 주자 한화건설은 사우디 현지법인을 설립하여 각종 플랜트 공사를 성공적으로 수행하고 있으며, 중동 및 동남아시장 등으로 사업 영역을 확장하고 있습니다."],
    ];
    for(v of $business){
        $("#business .cont").append(`
        <div class="box">
            <div class="iconImg"><img src="./img/${v[0]}" alt=""></div>
            <div class="txt">${v[1]}</div>
        </div>
        `);
    }

    $(".iconImg").mouseover(function(){
        var imgsrc=$(this).find("img").attr("src");
        imgsrc=imgsrc.replace("_off","_on");
        $(this).find("img").attr("src",imgsrc);
    }).mouseout(function(){
        var imgsrc=$(this).find("img").attr("src");
        imgsrc=imgsrc.replace("_on","_off");
        $(this).find("img").attr("src",imgsrc);
    });

    /*
    $(".iconImg").hover(function(){
        $(this).find("img").attr("src", $(this).attr("src").replace("_on.png", "_off.png"));
    });
    */



    /* bigBox */
    var $business = [
        ["business_img01.jpg"],
        ["business_img02.jpg"],
        ["business_img03.jpg"],
    ];
    for(v of $business){
        $("#bigBox").append(`
        <div class="boxImg" style="background-image: url(./img/${v[0]});">
            <div class="dark">
                <img src="./img/business_over_btn.png" alt="">
                <p>more</p>
            </div>
        </div>
        `);
    }



    /* story */
    var $business = [
        ["story_img01.jpg","한화건설, 수원 컨벤션센터 복합개발사업 민관협업 위한 업무협력 약정 체결", "한화건설(대표이사 최광호)은 11일 수원시청 상황실에서 수원 컨벤션센터 복합개발사업의 민관협업을 강화하기 위해..."],
        ["story_img02.jpg","한화건설, 수도권 내 집 마련의 이상형 ‘김포 풍무 꿈에그린 2차’ 9월 분양", "한화건설(대표 최광호)은 오는 9월 경기도 김포시 풍무5지구 3~5 블록 일원에 총 1,070세대 신축아파트 '김포 풍무 꿈에그린..."],
        ["story_img03.jpg","한화건설, 서울~세종고속도로 안성~구리 건설공사 제10공구 수주", "서울~세종고속도로 건설공사는 수도권 고속도로망 계획 중 남북의 5축을 완성하는 대규모 국책사업으로 기존의 경부고속도로..."],
    ];
    for(v of $business){
        $("#story .cont").append(`
        <div class="box">
            <div class="contImg" style="background-image: url(./img/${v[0]});"></div>
            <div class="txt">
                <p>${v[1]}</p>
                <p>${v[2]}</p>
            </div>
        </div>
        `);
    }

    
    
  
    
});