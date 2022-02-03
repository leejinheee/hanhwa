/* prcenter.js */
$(document).ready(function(){

    /* story */
    var $business = [
        ["사회복지","세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", "content_img1.jpg"],
        ["문화예술","세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", "content_img2.jpg"],
        ["자원봉사","세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", "content_img3.jpg"],
    ];
    for(v of $business){
        $(".welfare").append(`
        <div class="box">
            <div class="txt">
                <h3>${v[0]}</h3>
                <p>${v[1]}</p>
            </div>
            
            <div class="img" style="background-image: url(./img/prcenter/${v[2]});"></div>
        </div> 
        `);
    }
    
});
