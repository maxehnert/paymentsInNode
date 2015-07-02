

$('.dropdown-menu li').click(function() {
  $('.CurrencySymbol').html( );
});


// delete?
// $(".input-label").val( function(index, val) {
//     return  + val;
// });

/*
 * regex to parse the currency input corectly
*/
$(".amountInput").blur(function() {
  this.value =
    parseFloat(
      this.value
        .replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// yuck a global var called data
var data = [{
  "currency": "USD",
  "symbol" : "$"
},{
  "currency": "EUR",
  "symbol" : "€"
},{
  "currency": "JPY",
  "symbol" : "¥"
}];

 $.each( data, function( key, val ) {
 var $li = $("<li name='currency'><a href='#'>"+val.currency+"</a></li>");
 $(".dropdown-menu").append($li);

 // var $span = $("<span>"+val.symbol+"</span>");
 // $('.inputAmountPrepend').append($span);
 });



// TEMPORARY FIX TO KEEP MOVING THINGS ALONG
// MUST FIX BEFORE SHIPPING

 $(".dropdown-menu li").click(function() {

   if(this.textContent == data[0].currency){
     var $span = $("<span class='CurrencySymbol' > "+ data[0].symbol+"</span>");
     var $input = $("<input type='text' class='hiddenCurrencySymbol' value="+ data[0].symbol+" style='display:none' name='currencySymbol'>");


     $('.CurrencySymbol').remove();
     $('.currencyBtn').text(data[0].currency);
     $('.inputAmountPrepend').append($span);

     $('.hiddenCurrencySymbol').remove();
     $('.currencyBtnGroup').append($input);

   }
   else if(this.textContent == data[1].currency){
     var $span = $("<span class='CurrencySymbol' > "+ data[1].symbol+"</span>");
     var $input = $("<input type='text' class='hiddenCurrencySymbol' value="+ data[1].symbol+" style='display:none' name='currencySymbol'>");

     $('.CurrencySymbol').remove();
     $('.currencyBtn').text(data[1].currency);
     $('.inputAmountPrepend').append($span);

     $('.hiddenCurrencySymbol').remove();
     $('.currencyBtnGroup').append($input);
   }
   else if(this.textContent == data[2].currency){
     var $span = $("<span class='CurrencySymbol' > "+ data[2].symbol+"</span>");
     var $input = $("<input type='text' class='hiddenCurrencySymbol' value="+ data[2].symbol+" style='display:none' name='currencySymbol'>");

     $('.CurrencySymbol').remove();
     $('.currencyBtn').text(data[2].currency);
     $('.inputAmountPrepend').append($span);

     $('.hiddenCurrencySymbol').remove();
     $('.currencyBtnGroup').append($input);
   };

 });

/*
 * Clear the Form field
*/
$('.clearFormButton').click(function(e) {
  e.preventDefault();
  $('.sendForm')[0].reset();
  $('.payingForGoodsChoice input[type=radio]').prop('checked', false);
});


/*
 * Watch the email input for a valid response
 * If valid then show the check mark when it loses focus
*/
$('.emailInput').change(
  function(e){
    e.preventDefault();

    if( $('.emailInput')[0].checkValidity() ) {
      $('.emailGlyphicon').show();
    }
    else {
      $('.emailGlyphicon').hide();
    }
  }
);

/*
 * Watch the payment type and toggle the icons and
 * If valid then show the check mark when it loses focus
*/
$('#paymentOption1').change(
  function(e) {
    e.preventDefault();

    if( $('#paymentOption1:checked').length === 1) {
      $('.paymentOption2Icon').hide();
      $('.paymentOption1Icon').show();
      // $('.sendingMoneyChoice').addClass('paymentOptionActive1');
    }
  }
);

$('#paymentOption2').change(
  function(e) {
    e.preventDefault();

    if( $('#paymentOption2:checked').length === 1) {
      $('.paymentOption1Icon').hide();
      $('.paymentOption2Icon').show();
    }
  }
);

/*
 * Watch the payment type focus and toggle the font color
 *
 * This is a bit redundant so may come back to fix later based on
 * my todo list for the project
*/
$('.sendingMoneyChoice').click(function(){
  $('.payingForGoodsChoice').removeClass('paymentOptionActive');
  $('.sendingMoneyChoice').addClass('paymentOptionActive');
});
$('.payingForGoodsChoice').click(function(){
  $('.sendingMoneyChoice').removeClass('paymentOptionActive');
  $('.payingForGoodsChoice').addClass('paymentOptionActive');
})
