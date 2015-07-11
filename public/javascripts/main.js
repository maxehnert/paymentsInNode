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
 * Inserts <li> list of values into the currency dropdown
*/
$.each( currencyData, function( key, val ) {

  var $li = $("<li name='currency'><a href='#'>" +
    val.currency + "</a></li>");

  $(".dropdown-menu").append( $li );
 });

/*
 * Generate currency symbol and type and swap them depending on which is clicked
*/

$(".dropdown-menu li").click( function() {

 if ( this.textContent === currencyData[0].currency ) {

   getUSDSymbol();

 } else if ( this.textContent === currencyData[1].currency ) {

   getEURSymbol();

 } else if ( this.textContent === currencyData[2].currency ) {

   getJPYSymbol();
 };
});

function getUSDSymbol() {
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
};

function getEURSymbol() {
  var $span = $("<span class='js-currency-symbol' > "+ currencyData[1].symbol + "</span>");
  var $input = $("<input type='text' class='js-hidden-currency-symbol' value=" +
   currencyData[1].symbol + " style='display:none' name='currencySymbol'>");

  $('.js-currency-symbol').remove();
  $('.js-currency-btn').text( currencyData[1].currency );
  $('.js-input-amount-prepend').append( $span );

  $('.js-hidden-currency-symbol').remove();
  $('.js-currency-btn-group').append( $input );
};

function getJPYSymbol() {
  var $span = $("<span class='js-currency-symbol' > " + currencyData[2].symbol + "</span>");
  var $input = $("<input type='text' class='js-hidden-currency-symbol' value=" +
   currencyData[2].symbol + " style='display:none' name='currencySymbol'>");

  $('.js-currency-symbol').remove();
  $('.js-currency-btn').text( currencyData[2].currency );
  $('.js-input-amount-prepend').append( $span );

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
$('.js-next-page-link').click( function(e) {

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
*/
$('.js-payment-choice-type__send-btn').click( function(e) {
  e.preventDefault();

  $('.js-payment-choice-type__pay-btn').removeClass( 'js-payment-option-active' );
  $(this).addClass( 'js-payment-option-active' );
});

$('.js-payment-choice-type__pay-btn').click( function(e) {
  e.preventDefault();

  $('.js-payment-choice-type__send-btn').removeClass( 'js-payment-option-active' );
  $(this).addClass( 'js-payment-option-active' );
});


/*
 * Transaction History Accordion
*/
$('.js-list-group-item_transactions').click( function(e) {
  e.preventDefault();

  if ( $(this).next().hasClass('js-list-group-item__transaction-show-inner-content') ) {

    $('.js-list-group-item__transaction-inner-content').removeClass('js-list-group-item__transaction-show-inner-content');
  } else {

    $('.js-list-group-item__transaction-inner-content').removeClass('js-list-group-item__transaction-show-inner-content');

    $(this).next().addClass('js-list-group-item__transaction-show-inner-content');
  }
});

// Delete a transaction from the list and remove it from the db
$('.js-delete-list-group-item').click(function(){
  var $el = $(this).parent();
  var $el2 = $(this).parent().next();
  var id = $(this).parent().attr("data-id");

  $.ajax({
    type: 'DELETE',
    url: '/transactions/'+id,
    data: id,
  }).success(function(){
    $el.remove();
    $el2.remove();
  });
});
