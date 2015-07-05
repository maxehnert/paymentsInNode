/*
 * regex to parse the currency input corectly
*/
$(".js-payment-amount-input").blur( function() {

  // regex to parse value
  this.value =
    parseFloat(
      this.value
        .replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // if regex returns NaN replace blank value
  if ( this.value == "NaN" ) {
    this.value = "";
  }

});

var currencyData = [
  {
    "currency": "USD",
    "symbol" : "$"
  },
  {
    "currency": "EUR",
    "symbol" : "€"
  },
  {
    "currency": "JPY",
    "symbol" : "¥"
  }
];

/*
 * Inserts <li> list of values into the currency dropdown
*/
$.each( currencyData, function( key, val ) {
  var $li = $("<li name='currency'><a href='#'>" +
    val.currency + "</a></li>");

  $(".dropdown-menu").append( $li );
 });

// FIXME
// TEMPORARY FIX TO KEEP MOVING THINGS ALONG

$(".dropdown-menu li").click( function() {

 if ( this.textContent == currencyData[0].currency ) {

   // inserts visible currency symbol to form
   var $span = $("<span class='js-currency-symbol' > " + currencyData[0].symbol + "</span>");

   // hidden input to save currency symbol
   var $input = $("<input type='text' class='js-hidden-currency-symbol' value=" +
    currencyData[0].symbol + " style='display:none' name='currencySymbol'>");


   $('.js-currency-symbol').remove();
   $('.js-currency-btn').text( currencyData[0].currency );
   $('.js-input-amount-prepend').append( $span );

   $('.js-hidden-currency-symbol').remove();
   $('.js-currency-btn-group').append( $input );

 } else if ( this.textContent == currencyData[1].currency ) {
   var $span = $("<span class='js-currency-symbol' > "+ currencyData[1].symbol + "</span>");
   var $input = $("<input type='text' class='js-hidden-currency-symbol' value=" +
    currencyData[1].symbol + " style='display:none' name='currencySymbol'>");

   $('.js-currency-symbol').remove();
   $('.js-currency-btn').text( currencyData[1].currency );
   $('.js-input-amount-prepend').append( $span );

   $('.js-hidden-currency-symbol').remove();
   $('.js-currency-btn-group').append( $input );

 } else if ( this.textContent == currencyData[2].currency ) {
   var $span = $("<span class='js-currency-symbol' > " + currencyData[2].symbol + "</span>");
   var $input = $("<input type='text' class='js-hidden-currency-symbol' value=" +
    currencyData[2].symbol + " style='display:none' name='currencySymbol'>");

   $('.js-currency-symbol').remove();
   $('.js-currency-btn').text( currencyData[2].currency );
   $('.js-input-amount-prepend').append( $span );

   $('.js-hidden-currency-symbol').remove();
   $('.js-currency-btn-group').append( $input );
 };

});

/* TEST SECTION*/
// for( var i=0; i<= currencyData.length -1; i++){
// console.log(currencyData[i].currency)
// }
//  "USD
//   EUR
//   JPY"
//
// for( var i=0; i<= currencyData.length -1; i++){
// console.log(currencyData[i].symbol)
// }
//  "$
//   €
//   ¥"
//
// for( var i = 0; i <= currencyData.length - 1; i++) {
//
// }

/* END TEST SECTION*/

/*
 * Clear the Form field
*/
$('.js-clear-form-btn').click( function(e) {
  e.preventDefault();

  // Clears the form text inputs
  $('.js-send-form')[0].reset();

  // These two clear the radio active state
  $('label').removeClass( 'js-payment-option-active active' );
  $('.fa-check').hide();
});

/*
 * Flash a Load Screen After POSTing
*/
$('.js-next-page-link').click( function() {
  $('.overlay').addClass( 'overlay__flash' );
  $('.overlay i').addClass( 'fa fa-spinner fa-pulse fa-5x' );
});


/*
 * Watch the email input for a valid response
 * If valid then show the check mark when it loses focus
*/
$('.js-email-input').change(
  function(e){
    e.preventDefault();

    if ( $('.js-email-input')[0].checkValidity() ) {
      $('.js-email-valid-icon').show();
    } else {
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

    if ( $('#paymentOption1:checked').length === 1 ) {
      $('.js-payment-choice-type__pay-icon').hide();
      $('.js-payment-choice-type__send-icon').show();
      // $('.js-payment-choice-type__send-btn').addClass('js-payment-option-active');
    }
  }
);

$('#paymentOption2').change(
  function(e) {
    e.preventDefault();

    if( $('#paymentOption2:checked').length === 1 ) {
      $('.js-payment-choice-type__send-icon').hide();
      $('.js-payment-choice-type__pay-icon').show();
    }
  }
);

/*
 * Watch the payment type focus and toggle the font color
 *
 * FIXME:
 * This is a bit redundant so may come back to fix later based on
 * my todo list for the project
*/
$('.js-payment-choice-type__send-btn').click( function() {
  $('.js-payment-choice-type__pay-btn').removeClass( 'js-payment-option-active' );
  $('.js-payment-choice-type__send-btn').addClass( 'js-payment-option-active' );
});

$('.js-payment-choice-type__pay-btn').click( function() {
  $('.js-payment-choice-type__send-btn').removeClass( 'js-payment-option-active' );
  $('.js-payment-choice-type__pay-btn').addClass( 'js-payment-option-active' );
});
