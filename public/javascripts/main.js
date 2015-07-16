/*
 * regex to parse the currency input corectly
*/
$(".js-payment-amount-input").blur( function() {

  // regex to parse value
  this.value =
    turns the string into a floating point number ex 1.11
    parseFloat(
      this.value
        .replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// var a, b;
//    a = this.value;
//    this.value = parseInt(a).toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
//    //console.log(this.value);
//
//
//    console.log(this.value);

  // a.toLocaleString();
/*
  \B - Matches a non-word boundary
  ?= - lookahead - x(?=y) Matches 'x' only if 'x' is followed by 'y'.
  \d - Matches a digit character. Equivalent to [0-9].
  {n} - Matches exactly n occurrences of the preceding character. N must be a positive integer.
  + - Matches the preceding character 1 or more times. Equivalent to {1,}.
  ?! - negated lookahead - x(?!y) Matches 'x' only if 'x' is not followed by 'y'.
  /g -

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
*/
  // if regex returns NaN replace blank value
  if ( this.value == "NaN" ) {
    this.value = '';
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
 * Loop through the currency array
*/
function myCurrencyIndexOf(o) {
   for ( var i = 0; i < currencyData.length; i++ ) {
       if ( currencyData[i].currency == o ) {
           return i;
       }
   }
   return -1;
 };

/*
 * Inserts <li> list of values into the currency dropdown
*/
$.each( currencyData, function( key, val ) {

  var $li = $("<li name='currency'><a href='#'>" +
    val.currency + "</a></li>");

  $(".dropdown-menu").append( $li );
 });

/*
 * Identify which currency symbol and type was selected
*/
$(".dropdown-menu li").click( function() {
  // Check which currency was chosen from the loop
  var currentIndex = myCurrencyIndexOf( this.textContent );
  // Insert that index and pass it along to swap the currency symbol and type
  getCurrency( currencyData[currentIndex].currency, currencyData[currentIndex].symbol );
});

/*
 * Swap currency type and symbol
*/
function getCurrency(currency, symbol) {

  // hidden input to save currency symbol
  var $input = $("<input type='text' class='js-hidden-currency-symbol' value=" +
   symbol + " style='display:none' name='currencySymbol'>");

  $('.js-currency-btn').text( currency );
  // inserts visible currency symbol to form
  $('.js-currency-symbol').text( symbol );

  $('.js-hidden-currency-symbol').remove();
  $('.js-currency-btn-group').append( $input );
};

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
 * Watch the payment type and toggle the icons and font color
 * If valid then show the check mark when it loses focus
*/
$('#paymentOption1').change(
  function() {

    if ( $('#paymentOption1:checked').length === 1 ) {
      $('.js-payment-choice-type__pay-icon').hide();
      $('.js-payment-choice-type__send-icon').show();

      $('.js-payment-choice-type__pay-btn').removeClass( 'js-payment-option-active' );
      $(this).parent().addClass( 'js-payment-option-active' );
    }
  }
);

$('#paymentOption2').change(
  function() {

    if( $('#paymentOption2:checked').length === 1 ) {
      $('.js-payment-choice-type__send-icon').hide();
      $('.js-payment-choice-type__pay-icon').show();

      $('.js-payment-choice-type__send-btn').removeClass( 'js-payment-option-active' );
      $(this).parent().addClass( 'js-payment-option-active' );
    }
  }
);

/*
 * Transaction History Accordion
*/
$('.js-list-group-item_transactions').click( function(e) {
  e.preventDefault();

  if ( $(this).next().hasClass( 'js-list-group-item__transaction-show-inner-content' ) ) {

    $('.js-list-group-item__transaction-inner-content').removeClass( 'js-list-group-item__transaction-show-inner-content' );
  } else {

    $('.js-list-group-item__transaction-inner-content').removeClass( 'js-list-group-item__transaction-show-inner-content' );

    $(this).next().addClass( 'js-list-group-item__transaction-show-inner-content' );
  }
});

// Delete a transaction from the list and remove it from the db
$('.js-delete-list-group-item__btn').click( function() {
  var $elParent = $(this).parent();
  var $elParentPrevious = $(this).parent().prev();
  var id = $(this).parent().prev().attr("data-id");

  $.ajax({
    type: 'DELETE',
    url: '/transactions/' + id,
    data: id,
  }).success( function() {
    // remove the el from the DOM
    $elParent.remove();
    $elParentPrevious.remove();
  });
});
