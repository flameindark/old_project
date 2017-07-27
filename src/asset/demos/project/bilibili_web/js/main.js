(function configRem() {
    var html = document.documentElement;
    var pxPerRem = html.getBoundingClientRect().width/12;
    html.style.fontSize = pxPerRem+'px';
})();
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    autoplay:3000
});
