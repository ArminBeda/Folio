function calculate () {

      let eigenteil = Number(document.getElementById("calcEigenteil").value);
      let preis = Number(document.getElementById("calcPreis").value);
      let miete = Number(document.getElementById("calcMiete").value);
      let laufzeit = Number(document.getElementById("calcLaufzeit").value);

      console.log(eigenteil);
      console.log(preis);
      console.log(miete);
      console.log(laufzeit);

        let restwert = preis - eigenteil;
        let rate = restwert/laufzeit;

        for (let i = 1; i < laufzeit || restwert > 0; i++) {
            if (i % 12 == 1) {
                console.log("--------------------");
                console.log((i/12 + 1) + ". JAHR");
                console.log("--------------------");
            }
            console.log("--------------------");
            console.log(i + ".Monat");
            console.log(" ");
            let kundeteil = 1 - restwert/preis;
            let bilalteil= restwert/preis;
            console.log("Restwert:" + round(restwert,2));
            console.log("Bezahlende Miete: "  + round(bilalteil*miete,2) );
            console.log("Eigentumsquote:");
            console.log( "        Kunde: " + round(kundeteil,2)*100 + "%");
            console.log( "        Immobilal: " + round(bilalteil,2)*100 + "%");
            console.log("Monatliche Ratenzahlung:" + round(rate,2));

           console.log("--------------------");

            restwert = restwert - rate;
        }

        console.log("--------------------");
        console.log((laufzeit + 1 )+ ".Monat");
        console.log(" ");
        let kundeteil = 1 - restwert/preis;
        let bilalteil= restwert/preis;
        console.log("Restwert:" + round(restwert,2));
        console.log("Bezahlende Miete: "  + round(bilalteil*miete,2) );
        console.log("Eigentumsquote:");
        console.log( "        Kunde: " + round(kundeteil,2)*100 + "%");
        console.log( "        Immobilal: " + round(bilalteil,2)*100 + "%");
        console.log("Monatliche Ratenzahlung:" + 0);

        console.log("--------------------");

    }

    function round ( value, places) {
            if (places < 0) throw new IllegalArgumentException();

            let factor = Math.pow(10, places);
            let = value * factor;
            let tmp = Math.round(value);
            return (tmp / factor);
        }
