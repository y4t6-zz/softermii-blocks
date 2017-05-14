$('.jsSlider').slick({
  infinite: true,
  prevArrow: $('.c-slider__arrows li:first-child'),
  nextArrow: $('.c-slider__arrows li:nth-child(2)')
});
var i = 0;
$('.c-slider__nav li').on('click', function(){
    var filterKey = $(this).text();
    $('.jsSlider').slick('slickFilter', function() {
        console.log($(this).data('item').indexOf(filterKey));
        if ($(this).data('item').indexOf(filterKey) != "-1") {
            return true;
        } else {
            return false;
        }
    });
});


$("body").click(function(e) {
	if (e.target.className.indexOf("jsSearchGroup") != -1 || e.target.className == 'jsSearchInput') {
        $(".c-top__search-group").addClass('is-active');
        $('.jsSearchInput').focus();
	} else {
        $(".c-top__search-group").removeClass('is-active')
	}
    /* c-currency toggle */
    if (e.target.className == 'c-currency__button') {
        $(".c-currency").toggleClass('is-active');
    } else {
        $(".c-currency").removeClass('is-active');
    }
});
$('.c-top__search-button').click(function() {
    if ($('.jsSearchInput').val()) {
        $('.c-top__search-form').submit();
    }
});
$('.c-slider__nav li').click(function(e) {
    var self = $(this);
    self.siblings().removeClass('is-active');
    self.addClass('is-active');
});

/* c-currency */
$('.c-currency__list li').click(function() {
    var currentCurrency, selectedCurrency, currentCurrencyBtn;
    currentCurrencyBtn = $('.c-currency__button');
    selectedCurrency = $(this).text();
    currentCurrency = currentCurrencyBtn.text();
    currentCurrencyBtn.text(selectedCurrency);
    $(this).text(currentCurrency);
})
/* END c-currency */
