
$('.dropdown-menu li').click(function(){
  $('.CurrencySymbol').html( );
});



$( ".input-label" ).val( function(index, val) {
    return  + val ;
});


$(".amountInput").blur(function (){
  this.value =
  parseFloat(this.value.replace(/,/g, "")).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

});


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
 var $li = $("<li><a href='#'>"+val.currency+"</a></li>");
 $(".dropdown-menu").append($li);

 // var $span = $("<span>"+val.symbol+"</span>");
 // $('.inputAmountPrepend').append($span);
 });



// TEMPORARY FIX TO KEEP MOVING THINGS ALONG
// MUST FIX BEFORE SHIPPING

 $(".dropdown-menu li").click(function() {

   if(this.textContent == data[0].currency){
     var $span = $("<span class='CurrencySymbol' name='currencySymbol'> "+ data[0].symbol+"</span>");

     $('.CurrencySymbol').remove();
     $('.currencyBtn').text(data[0].currency);
     $('.inputAmountPrepend').append($span);

   }
   else if(this.textContent == data[1].currency){
     var $span = $("<span class='CurrencySymbol' name='currencySymbol'> "+ data[1].symbol+"</span>");

     $('.CurrencySymbol').remove();
     $('.currencyBtn').text(data[1].currency);
     $('.inputAmountPrepend').append($span);

   }
   else if(this.textContent == data[2].currency){
     var $span = $("<span class='CurrencySymbol' name='currencySymbol'> "+ data[2].symbol+"</span>");

     $('.CurrencySymbol').remove();
     $('.currencyBtn').text(data[2].currency);
     $('.inputAmountPrepend').append($span);

   };

 });



/*
 * Clear the Form out
*/
$('.clearFormButton').click(function(e) {
  e.preventDefault();
  $('.myForm')[0].reset();
});


$('.nextPageLink').click(function(e) {
  // send this commented out section to the middleware to handle
  // e.preventDefault();
  // $('.overlay1').addClass('overlay');
  // $('.overlay1').add("<i class='fa fa-spinner'></i>");

  // $.post('sendMoney.hbs', $('.myForm').serialize());
});
