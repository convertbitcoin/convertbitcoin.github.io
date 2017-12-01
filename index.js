$("#test").change(function() {
    var doge = $(this).val();
    $.getJSON("https://www.cryptonator.com/api/ticker/btc-usd", function(data) {
        if (doge == "1") {
            document.getElementById("first").innerHTML = "BTC";
            document.getElementById("second").innerHTML = "USD";
            var btc1 = data.ticker.price;

            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * btc1;

                document.getElementById("USD").value = usd;
            });

            $('#USD').change(function() {
                var usd2 = $('#USD').val();
                var usd3 = usd2 / btc1;
                document.getElementById("BTC").value = usd3;
            });

        }

        if (doge == "2") {
            var btc1 = data.ticker.price;
            document.getElementById("first").innerHTML = "mBTC";
            document.getElementById("second").innerHTML = "BTC";
            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * 0.001

                document.getElementById("USD").value = usd;
            });

            $('#USD').change(function() {

                var usd2 = $('#USD').val();
                var usd3 = usd2 / 0.001;
                document.getElementById("BTC").value = usd3;
            });
        }
        if (doge == "3") {
            var btc1 = data.ticker.price;
            document.getElementById("first").innerHTML = "Satoshi";
            document.getElementById("second").innerHTML = "BTC";
            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * 0.00000001;

                document.getElementById("USD").value = usd;
            });

            $('#USD').change(function() {

                var usd2 = $('#USD').val();
                var usd3 = usd2 / 0.00000001;
                document.getElementById("BTC").value = usd3;
            });
        }
        if (doge == "4") {
            var btc1 = data.ticker.price;
            document.getElementById("first").innerHTML = "Bits";
            document.getElementById("second").innerHTML = "BTC";
            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * 0.000001;

                document.getElementById("USD").value = usd;
            });

            $('#USD').change(function() {

                var usd2 = $('#USD').val();
                var usd3 = usd2 / 0.000001;
                document.getElementById("BTC").value = usd3;
            });
        }
        if (doge == "5") {
            var btc1 = data.ticker.price;
            document.getElementById("first").innerHTML = "Bits";
            document.getElementById("second").innerHTML = "USD";
            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * 0.000001;

                var total = usd * btc1;
                var cat = (total).toFixed(2);
                document.getElementById("USD").value = cat;
            });

            $('#USD').change(function() {

                var usd2 = $('#USD').val();
                var usd3 = usd2 / btc1;
                var done = usd3 * (1 / .000001);
                //var usd32 = usd3/.000001;
                document.getElementById("BTC").value = done;
            });
        }
        if (doge == "6") {
            var btc1 = data.ticker.price;
            document.getElementById("first").innerHTML = "mBTC";
            document.getElementById("second").innerHTML = "USD";
            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * 0.001;

                var total = usd * btc1;
                var cat = (total).toFixed(2);
                document.getElementById("USD").value = cat;
            });

            $('#USD').change(function() {

                var usd2 = $('#USD').val();
                var usd3 = usd2 / btc1;
                var done = usd3 * (1 / .001);
                var cat = (done).toFixed(2);
                //var usd32 = usd3/.000001;
                document.getElementById("BTC").value = cat;
            });
        }
        if (doge == "7") {
            var btc1 = data.ticker.price;
            document.getElementById("first").innerHTML = "Satoshi";
            document.getElementById("second").innerHTML = "USD";
            $('#BTC').change(function() {
                var btc = $('#BTC').val();

                var usd = btc * 0.00000001;

                var total = usd * btc1;
                var cat = (total).toFixed(2);
                document.getElementById("USD").value = cat;
            });

            $('#USD').change(function() {

                var usd2 = $('#USD').val();
                var usd3 = usd2 / btc1;
                var done = usd3 * (1 / .00000001);
                var cat = (done).toFixed(2);
                //var usd32 = usd3/.000001;
                document.getElementById("BTC").value = cat;
            });
        }
    });
});