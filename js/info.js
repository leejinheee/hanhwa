/* info.js */
$(document).ready(function(){

    /* management */
    var $management = [
        ["환경경영", "[Environmental Management]", "인간과 환경이 조화로운 세상을 열어가고 환경보전을 최우선으로 생가하는 기업"],
        ["윤리경영", "[Ethical Management]", "기업의 이익에 앞서서 정직과 신용을 바탕으로 고객과 사회, 국가에 대한 의무를 우선하는 윤리경영 실현"],
        ["인재경영", "[Human resources management]", "인재경영을 통해 임직원의 지식과 창의력, 도덕성이 최고로 실현될 수 있도록 역량 집중"]
    ];
    for(v of $management){
        $(".list").append(`
        <li>
            <h4>${v[0]}</h4>
            <span>${v[1]}</span>
            <p>${v[2]}</p>
        </li>
        `);
    }
    
});
