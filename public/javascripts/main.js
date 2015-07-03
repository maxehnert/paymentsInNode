




// delete?
// $(".input-label").val( function(index, val) {
//     return  + val;
// });

/*
 * regex to parse the currency input corectly
*/
$(".js-payment-amount-input").blur(function() {
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
 // $('.js-input-amount-prepend').append($span);
 });

 $('.dropdown-menu li').click(function() {
   $('.js-currency-symbol').html( );
 });

// TEMPORARY FIX TO KEEP MOVING THINGS ALONG
// MUST FIX BEFORE SHIPPING

$(".dropdown-menu li").click(function() {

 if(this.textContent == data[0].currency){
   var $span = $("<span class='js-currency-symbol' > "+ data[0].symbol+"</span>");
   var $input = $("<input type='text' class='js-hidden-currency-symbol' value="+ data[0].symbol+" style='display:none' name='currencySymbol'>");


   $('.js-currency-symbol').remove();
   $('.js-currency-btn').text(data[0].currency);
   $('.js-input-amount-prepend').append($span);

   $('.js-hidden-currency-symbol').remove();
   $('.js-currency-btn-group').append($input);

 }
 else if(this.textContent == data[1].currency){
   var $span = $("<span class='js-currency-symbol' > "+ data[1].symbol+"</span>");
   var $input = $("<input type='text' class='js-hidden-currency-symbol' value="+ data[1].symbol+" style='display:none' name='currencySymbol'>");

   $('.js-currency-symbol').remove();
   $('.js-currency-btn').text(data[1].currency);
   $('.js-input-amount-prepend').append($span);

   $('.js-hidden-currency-symbol').remove();
   $('.js-currency-btn-group').append($input);
 }
 else if(this.textContent == data[2].currency){
   var $span = $("<span class='js-currency-symbol' > "+ data[2].symbol+"</span>");
   var $input = $("<input type='text' class='js-hidden-currency-symbol' value="+ data[2].symbol+" style='display:none' name='currencySymbol'>");

   $('.js-currency-symbol').remove();
   $('.js-currency-btn').text(data[2].currency);
   $('.js-input-amount-prepend').append($span);

   $('.js-hidden-currency-symbol').remove();
   $('.js-currency-btn-group').append($input);
 };

});

/*
 * Clear the Form field
*/
$('.js-clear-form-btn').click(function(e) {
  e.preventDefault();

  // Clears the form text inputs
  $('.js-send-form')[0].reset();

  // These two clear the radio active state
  $('label').removeClass('js-payment-option-active active');
  $('.fa-check').hide();
});

/*
 * Flash a Load Screen After POSTing
*/
$('.js-next-page-link').click(function() {
  $('.overlay').addClass('overlay__flash');
  $('.overlay i').addClass('fa fa-spinner fa-pulse fa-5x');
});


/*
 * Watch the email input for a valid response
 * If valid then show the check mark when it loses focus
*/
$('.js-email-input').change(
  function(e){
    e.preventDefault();

    if( $('.js-email-input')[0].checkValidity() ) {
      $('.js-email-valid-icon').show();
    }
    else {
      $('.js-email-valid-icon').hide();
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
      $('.js-payment-choice-type__pay-icon').hide();
      $('.js-payment-choice-type__send-icon').show();
      // $('.js-payment-choice-type__send-btn').addClass('js-payment-option-active');
    }
  }
);

$('#paymentOption2').change(
  function(e) {
    e.preventDefault();

    if( $('#paymentOption2:checked').length === 1) {
      $('.js-payment-choice-type__send-icon').hide();
      $('.js-payment-choice-type__pay-icon').show();
    }
  }
);

/*
 * Watch the payment type focus and toggle the font color
 *
 * This is a bit redundant so may come back to fix later based on
 * my todo list for the project
*/
$('.js-payment-choice-type__send-btn').click(function(){
  $('.js-payment-choice-type__pay-btn').removeClass('js-payment-option-active');
  $('.js-payment-choice-type__send-btn').addClass('js-payment-option-active');
});
$('.js-payment-choice-type__pay-btn').click(function(){
  $('.js-payment-choice-type__send-btn').removeClass('js-payment-option-active');
  $('.js-payment-choice-type__pay-btn').addClass('js-payment-option-active');
});
