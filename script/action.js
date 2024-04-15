document.querySelector('.hambuger').addEventListener('click', function() {
    this.classList.toggle('on');
    var modal = document.querySelector('.modal');
    var navbox = document.querySelector('.navbox');
    
    if (modal.style.opacity === '1' && navbox.classList.contains('on')) {
        modal.style.opacity = '0';
        navbox.classList.remove('on');
        setTimeout(function() {
            modal.style.display = 'none';
        }, 300); // CSS의 transition 시간과 동일한 값으로 설정
    } else {
        modal.style.display = 'block';
        setTimeout(function() {
            modal.style.opacity = '1';
            navbox.classList.add('on');
        }, 10); // setTimeout의 최소값
    }
});

// 서브페이지 구분 javascript

if($('div').hasClass('visual_sub')) {
    var windowUrl = window.location.href;
    console.log(windowUrl);
    var subURL = windowUrl.slice(-10,-8);
    var gnbIndex = parseInt(subURL);    // 문자열 숫자로 변경

    var gnbHtml  = $('header .gnb').html();
    console.log(gnbHtml)
    var nowGnbText= $('header .gnb > li > a').eq(gnbIndex-1).text();
    var lnbHtml = $('header .gnb > li').eq(gnbIndex-1).find('.lnb').html();
    console.log(lnbHtml)
    var nowlnbText = $('header .gnb > li').eq(gnbIndex-1).find('.lnb li').eq(gnbIndex-1).text();
    $('.visual_sub h2').text(nowGnbText);
    $('.visual_sub h3').text(nowlnbText);

    $('.section_sub .section_text h2').text(nowlnbText);

    // snb depth1 구하기

    // var depth1Html = '<li>'+nowGnbText+'</li>'
    //     depth1Html += gnbHtml;
    $('.snb .depth1').append(gnbHtml)
    $('.snb .depth1 .lnb').remove()
    $('.snb .depth2').append(lnbHtml)

    let depth1Index = $('.snb .depth1 li').index()
    console.log(depth1Index);

    
    $('.snb .depth1 li').each(function (){
        let snbLiIndex = $(this).index();
        console.log(snbLiIndex)
        $(this).attr('data-index',snbLiIndex)
    })
    

    $('.snb .depth1 li').on('click',function(){
        let clickIndex = $(this).data('index');
        console.log(clickIndex);

        let clickLnb = $('header .gnb > li').eq(clickIndex).find('.lnb').html();
        console.log(clickLnb);
        $('.snb .depth2').html(clickLnb);

        // 클릭한 요소를 맨 앞으로 이동
        $(this).prependTo('.snb .depth1');

        // 클릭한 요소를 제외한 나머지 요소들을 배열로 저장합니다.
        var $elements = $('.snb .depth1 li').not(this).toArray();

        // 배열을 data-index 값을 기준으로 정렬합니다.
        $elements.sort(function(a, b) {
            return $(a).data('index') - $(b).data('index');
        });

        // 정렬된 요소들을 DOM에 추가합니다.
        $('.snb .depth1').append($elements);
    })



    // snb 이미지 변경
    $('.snb a.home').mouseover(function(){
        var homeSrc = $(this).find('img').attr('src');
        console.log(homeSrc);
        var imgBox = ['images/icon_home.png', 'images/icon_home_rev.png']
        $(this).find('img').attr('src',imgBox[1])
    })
    $('.snb a.home').mouseout(function(){
        var imgBox = ['images/icon_home.png', 'images/icon_home_rev.png']
        $(this).find('img').attr('src',imgBox[0])
    })
}