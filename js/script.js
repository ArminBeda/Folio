function calculate () {





    var doc = new jsPDF();
    line = 20;



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
        let array = [];

        for (let i = 1; i <= laufzeit && restwert > 0; i++) {
            if (i % 12 == 1 ) {
                array = [];
                array[0] = "--------------------";
                array[1] = (round(i/12 + 1,0) + ". JAHR");
                array[2] = "--------------------";
                writeblock(array, doc);
            }
            array = [];
            array[0] = "--------------------";
            array[1] = (i + ".Monat");
            array[2] = (" ");
            let kundeteil = 1 - restwert/preis;
            let bilalteil= restwert/preis;
            array[3] = ("Restwert:" + round(restwert,2));
            array[4] = "Bezahlende Miete: "  + round(bilalteil*miete,2);
            array[5] = ("Eigentumsquote:");
            array[6] = ("        Kunde: " + round(kundeteil*100,2) + "%");
            array[7] = ("        Immobilal: " + round(bilalteil*100,2) + "%");
            array[8] = ("Monatliche Ratenzahlung:" + round(rate,2));

           array[9] = ("--------------------");

           writeblock(array, doc);

            restwert = restwert - rate;
        }

        array = [];
        array[0] = "--------------------";
        array[1] = (laufzeit + 1 )+ ".Monat";
        array[2] = " ";
        let kundeteil = 1 - restwert/preis;
        console.log(kundeteil);
        let bilalteil = restwert/preis;
        console.log(bilalteil);
        array[3] = ("Restwert:" + round(restwert,2));
        array[4] = ("Bezahlende Miete: "  + round(bilalteil*miete,2));
        array[5] = ("Eigentumsquote:");
        array[6] = ( "        Kunde: " + round(kundeteil,2)*100 + "%");
        array[7] = ( "        Immobilal: " + round(bilalteil,2)*100 + "%");
        array[8] = ("Monatliche Ratenzahlung:" + 0);

        array[9] = ("--------------------");

        writeblock(array,doc);

      //  doc.save('a4.pdf');

      var config = {
        apiKey: "AIzaSyAGjAYiw4Hr-IQusKVkmxVSKtmSCVKKfBw",
        authDomain: "wegprog.firebaseapp.com",
        databaseURL: "https://wegprog.firebaseio.com",
        projectId: "wegprog",
        storageBucket: "wegprog.appspot.com",
        messagingSenderId: "565810625989"
      };
      firebase.initializeApp(config);

        const ref = firebase.storage().ref('Tilgungsplan/' + ('tilgungsplan.pdf'));

        const metadata = { contentType: doc.type };

        console.log(metadata);
        const task = ref.put(doc);

        task
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then(url => console.log(url))

    }

    function round (num, decimals) {
      var t = Math.pow(10, decimals);
      return (Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);

    }




  function  writeblock (array, doc) {
      length = array.length;

      if(line + array.length*5 > 250) {
        line = 20;
        doc.addPage();
      }
      for (i = 0; i < length; i++) {
        doc.text(array[i], 20, line);
        line = line + 5;
      }

    }
