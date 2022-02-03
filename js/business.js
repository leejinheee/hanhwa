/*business.js*/
$(document).ready(function(){

    /* business > 내용 */
    var $business = [
        ["slide01.jpg", "비스미야 신도시", "바그다드 동남부 비스마야", "1,830ha", "2012 ~ 2019", ""],
        ["slide02.jpg", "아레나 공연장", "필리핀마닐라", "7만 4000㎡", "2012 ~ 2015", "INC"],
    ];
    for(v of $business){
        $(".business .bus_cont").append(`
        <li class="swiper-slide">
            <div class="img" style="background-image: url(./img/business/${v[0]});"></div>

            <div class="txt">
                <h3>${v[1]}</h3>
                <ul>
                    <li><span>위치</span>${v[2]}</li>
                    <li><span>규모</span>${v[3]}</li>
                    <li><span>기간</span>${v[4]}</li>
                    <li><span>발주처</span>${v[5]}</li>
                </ul>
                <a href="#">자세히보기</a>
            </div>
        </li>
        `);
    }


    /* business > swiper */
    var swiper = new Swiper(".business .swiper", {
       //기본 셋팅
        //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
        direction: 'horizontal',
        //한번에 보여지는 페이지 숫자
        slidesPerView: 1,
        //페이지와 페이지 사이의 간격
        spaceBetween: 0,
        //드레그 기능 true 사용가능 false 사용불가
        debugger: true,
        //반복 기능 true 사용가능 false 사용불가
        loop: true,
        //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
        centeredSlides: true,
        // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
        // effect: 'fade',     
        

        //자동 스크를링 
        autoplay: { 
            //시간 1000 이 1초 
            delay: 3500, 
            disableOnInteraction: false, 
        },


        //방향표
        navigation: {
            //다음페이지 설정
            nextEl: '.swiper-button-next',
            //이전페이지 설정
            prevEl: '.swiper-button-prev',
        },
    });


    /* story */
    var $contList = [
        ["01_img.png", "01", "업무시설", "예술적이고 쾌적한 사무용 빌딩을<br>한화건설이 만듭니다"],
        ["02_img.png", "02", "레저시설", "아름다운 자연환경에 편리함이<br>조화를 이뤄 여유로운 레저생활을 창조합니다."],
        ["03_img.png", "03", "판매/영업시설", "시선과 발길이 머무는 공간을 완성합니다."],
        ["04_img.png", "04", "의료/교육시설", "최적의 의료환경, 최고의 교육환경을<br>만들어 갑니다."],
        ["05_img.png", "05", "특수시설", "대전 엑스포 한빛탑, 종합운동장, 서울역사 등<br>지역의 랜드마크를만들어갑니다.  "],
        ["06_img.png", "06", "리모델링", "시오래된 건물이 꿈에 그리던<br>아름다운 모습으로 재탄생합니다. "],
    ];
    for(v of $contList){
        $(".contList").append(`
        <div class="box" style="background-image: url(./img/business/${v[0]});">
            <h3><span>${v[1]}</span>${v[2]}</h3>
            <p>${v[3]}</p>
        </div>
        `);
    }
    




    
    
});


