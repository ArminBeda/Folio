let calculate = () => {

      let eigenteil = document.getElementByName("calcEigenteil");
      let preis = document.getElementByClass("calcPreis");
      let miete = document.getElementByClass("calcMiete");
      let laufzeit = document.getElementByClass("calcLaufzeit");

      console.log(eigenteil.value);

        let restwert = preis - eigenteil;
        let rate = restwert/laufzeit;

        for (int i = 1; i < laufzeit || restwert > 0; i++) {
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

    let round = (double value, int places) => {
            if (places < 0) throw new IllegalArgumentException();

            let factor = (long) Math.pow(10, places);
            let = value * factor;
            let tmp = Math.round(value);
            return (double) tmp / factor;
        }
