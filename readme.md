UI Exercise Initial Screen• Allow the user to choose between sending money and reviewing their transaction history.Send Money Screen• Provide validation for both the To and Amount fields. The former should accept any valid email address while amount should only accept positive numbers• Provide correct currency formatting for the amount field. For example, if the user enters 1234.56 and the currency selected is USD, display $1,234.56.• Allow the user to change the currency type. Examples: • USD• EUR• JPY• Choosing a value for “What’s this payment for?” will provide clearindication of the current selection.• Allow the user to choose “Clear” to reset the form to its default state.• Selecting Next will move to “Loading Screen”Loading Screen• Provide a brief loading indicator as an overlay to simulate the time to make a request.• Move to Success Screen Success screen• Allow user to send more money or view their previous transactions. Transaction History screen• Display recent user transactions in an “infinitely scrolling” list. See “Node Server” below for more information.• You should determine your own approach for fetching data.• Allow the user to go back to the main screen.Node ServerYou should build a small, Node.js based HTTP server that delivers transaction data for your transaction history display.• You should determine how this data is structured and formatted.• Ensure that your server will serve a reasonably large set of data (at least250 transactions) and that for each run of the application, the data will be the same.
• You do not need to add any transactions done through the “Send Money” screens to your data.Ideas for ExpansionThe above exercise is sufficient for us to begin our conversation. However, if you’re interested, we encourage you to think about ways in which you can expand the scope of what we’ve provided here and implement (or, at least, be prepared to discuss how you would implement) any ideas that you find particularly interesting or you believe would showcase your talents and skills. To that end, we’ve provided some ideas below of ways this demo app could be expanded; however, feel free to formulate your own ideas as well.• Add unit testing• Consider caching for transaction data• Allow for transactions to be clicked to reveal more details about thetransaction• Utilize real PayPal APIs to log in and get transaction histories.-----------------What needs to be done still- $.post the form into the db [1]- $.get the data from the db and insert into the view [1]- currency button needs to be reworked [3]<!-- - the black opacity overlay needs to be set to a timer -->- the success focus for the inputs needs to be completed- the 'what type of payment' buttons need to be fixed to be either or [2]- required statements not working properly [4]- need to implement a auto load for the transaction to only load a handful at first and load more as it scrolls. [3]- add testing [5]- use middleware to flash the the spinner screen.[]