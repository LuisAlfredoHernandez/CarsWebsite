function BrandsGetCurrentPage() {
    var p = parseInt($(".inner-sec4").data("page"));
    if(p == null || isNaN(p)) p = 0;
    return p;
};

function BrandsSetPage(p) {
    $(".inner-sec4").data("page", p);
    var pageWidth = 858;
    $(".inner-sec4 > DIV > UL").css("left", (pageWidth * p) * -1);
};

function BrandsCountPages() {
    return Math.ceil($(".inner-sec4 UL LI").length / 11);
};


$(".inner-sec4 boton-izq").on("click", function(){
    previaPagina();
});

$(".inner-sec4 boton-der").on("click", function(){
    siguientepagina();
});

function previaPagina() {
    var currPage = BrandsGetCurrentPage();
    var nextPage = currPage - 1;
    if(nextPage < 0) nextPage = (BrandsCountPages()-1);
    BrandsSetPage(nextPage);
};

function siguientePagina() {
    var currPage = BrandsGetCurrentPage();
    var nextPage = currPage + 1;
    if(nextPage >= BrandsCountPages()) nextPage = 0;
    BrandsSetPage(nextPage);
};
