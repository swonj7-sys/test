$(function () {
    // 메뉴
    $('.main-menu').on('mouseover', function () {
        $(this).children('.sub-menu').stop().slideDown();
    })

    $('.main-menu').on('mouseleave', function () {
        $('.sub-menu').stop().slideUp();
    })


    // 이미지 슬라이드
    let i = 0;

    setInterval(function () {
        if (i < 2) i++;
        else i = 0;

        $('.image-slide>ul>li').fadeOut();
        $('.image-slide>ul>li').eq(i).fadeIn();
    }, 2000);


    // 탭
    $('.notice-gallery>ul>li').on('click', function(){
        $('.notice-gallery>ul>li').removeClass('tab-active');
        $(this).addClass('tab-active');

        let i = $(this).index();
        $('.tab-content').removeClass('tab-content-active');
        $('.tab-content').eq(i).addClass('tab-content-active');
    })


    // 팝업창
    $('.pop').on('click', function(){
        $('.popup-container').show();
    })

    $('.button-wrap>button').on('click', function(){
        $('.popup-container').hide();
    })
})