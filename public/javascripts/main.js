

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
  $('.myForm')[0].reset();
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
    });
