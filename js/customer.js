/* customer.js */
$(document).ready(function(){

    /* se1 */
    var $business = [
        ["icon01.png", "꿈에그린 고객센터", "080 - 279 - 2400"],
        ["icon02.png", "꿈에그린 고객문의 > "],
        ["icon03.png", "꿈에그린 A/S문의 > "],
    ];
    for(v of $business){
        $(".apt .info").append(`
        <div class="box" style="background-image: url(./img/customer/${v[0]})">
            <a href="">
                <span>${v[1]}</span>
                <div class="num">${v[2]}</div>
            </a>
        </div>
        `);
    }
    




    
});
