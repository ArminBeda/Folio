window.addEventListener("load",() =>{

        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;

          let database = firebase.database();
          database.ref('tilgung').orderByChild('name').on("value", function(snapshot) {
            snapshot.forEach(function(data) {
              key = data.key;
              name2 = data.val().name;
              if ('Neue Aktivität' == name2) {

              }

            });
          });
});





function calculate () {





    var doc = new jsPDF();
    line = 20;



      let eigenteil = Number(document.getElementById("calcEigenteil").value);
      let preis = Number(document.getElementById("calcPreis").value);
      let miete = Number(document.getElementById("calcMiete").value);
      let laufzeit = Number(document.getElementById("calcLaufzeit").value);
      let resultcalc = document.getElementById("resultcalc");
      resultcalc.innerHTML ="";

      if (document.getElementById("calcPreis").value < document.getElementById("calcEigenteil").value ) {
        resultcalc.innerHTML +=  "Preis ist kleiner als Eigenteil! Das heißt, du brauchst kein Finanzierung";
        window.alter("Preis ist kleiner als Eigenteil! Das heißt, du brauchst kein Finanzierung");
      }
      else {


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




        doc.setProperties({
            title: 'Tilgungsplan' + new Date() + ".pdf",
            subject: 'Info about PDF',
            author: 'PDFAuthor',
            keywords: 'generated, javascript, web 2.0, ajax',
            creator: 'My Company'
        });

        window.open(doc.output('bloburl'), '_blank');
/*
        var string = doc.output('datauristring');
        var iframe = "<iframe id='download' width='100%' height='100%' src='" + string + "'   style='display:grid; position:absolute'></iframe>";
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();

        doc.save('a4.pdf')*/

}

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

    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.12),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    function changeRange() {
      let range = document.getElementById("rechnungrange");
      let monat = range.value;
      let selected = document.getElementById("ranger" + monat);
      selected.selected = "selected";

    }

    function changeSelect() {
      let select = document.getElementById("calcLaufzeit");
      let range = document.getElementById("rechnungrange");
      range.value = select.options[select.selectedIndex].value;R
    }

    console.log(isnumber('joachin'));
    console.log(isnumber('123'));

    function isnumber(number) {
      try {
        let num = Number(number);
        return true;
      }
    catch(err) {
        return false;
    }
      }


    //Ebene 8 Formular
    /**
 * Funktion zur Überprüfung des Kontaktformulars. Wird beim Abschicken des
 * Formulars aufgerufen.
 */
 let validateForm2 = event => {
 // Variablen für das Prüfergebnis
 let form = event.target;
 let okay = true;
 let message = "";

let resultcalc = document.getElementById("resultcalc");
resultcalc.innerHTML = "";

 if (form.firstname.value == "") {
     okay = false;
     message += "Geben Sie bitte Ihren Vornamen ein. <br />";
 }
 if (form.lastname.value == "") {
     okay = false;
     message += "Geben Sie bitte Ihren Nachnamen ein. <br />";
 }
 if (form.email.value == "") {
     okay = false;
     message += "Geben Sie bitte eine gültige E-Mail Addresse ein. <br />";
 }
 if (form.handynummer.value == "") {
     okay = false;
     message += "Geben Sie bitte ihre Handynummer an. <br />";
 }
 if (form.strasse.value == "") {
     okay = false;
     message += "Geben Sie bitte den Namen ihrer Straße an. <br />";
 }
 if (form.hausnummer.value == "") {
     okay = false;
     message += "Geben Sie bitte ihre Hausnummer an. <br />";
 }
 if (form.land.value == "") {
     okay = false;
     message += "Geben Sie bitte ihren Wohnort an. <br />";
 }
 if (document.getElementById("calcMiete").value == "") {
     okay = false;
    message += "Geben Sie bitte die Mieten in Kalkulator an. <br />";

 } else if (isNaN(document.getElementById("calcMiete").value)) {
     okay = false;
     message += "Miete soll ein Zahl sein <br />";
 }

 if (document.getElementById("calcLaufzeit").value == 0) {
     okay = false;
     message += "Geben Sie bitte die Laufzeit in Kalkulator an. <br />";
 }

 if (document.getElementById("calcEigenteil").value == 0) {
     okay = false;
     message += "Geben Sie bitte die Eigenteil in Kalkulator an. <br />";
 }

 if (document.getElementById("calcPreis").value == 0) {
     okay = false;
     message += "Geben Sie bitte die Preis in Kalkulator an. <br />";
 }

  if (document.getElementById("calcPreis").value < document.getElementById("calcEigenteil").value ) {
    okay = false;
    message += "Preis ist kleiner als Eigenteil! Das heißt, du brauchst kein Finanzierung<br />";
    resultcalc.innerHTML +=  "Preis ist kleiner als Eigenteil! Das heißt, du brauchst kein Finanzierung";
  }







 // Ergebnis anzeigen
 let resultElement = document.getElementById("result2");
 let antrag = document.getElementById("antraghiddenbutton");
 if (okay) {
     message = "Vielen Dank für Ihre Antrag! <br /> Wir setzen uns mit Ihnen bald in Verbindung. <br/> Unten können Sie Ihre Tilgungsplan herunterladen.";
     resultElement.classList.add("okay");
     antraghiddenbutton.style.display = "block";
     let postData = {
     firstname: form.firstname.value,
     lastname: form.lastname.value,
     email: form.email.value,
     handynummer: form.handynummer.value,
     strass: form.strasse.value,
     hausnummer: form.hausnummer.value,
     land: form.land.value,
     miete: document.getElementById("calcMiete").value,
     laufzeit: document.getElementById("calcLaufzeit").value,
     eigenteil: document.getElementById("calcEigenteil").value,
   };

   let newPostKey = firebase.database().ref().child('tilgung').push().key;

   let updates= {};
   updates['/tilgung/' + newPostKey] = postData;

   firebase.database().ref().update(updates);

 } else {
    resultElement.classList.remove("okay");
    antraghiddenbutton.style.display = "none"
 }

 resultElement.innerHTML = message;

 // Formular nicht abschicken
 //if (!okay) {
 event.preventDefault();
 //}
 }

let validateForm = event => {
    // Variablen für das Prüfergebnis
    let form = event.target;
    let okay = true;
    let message = "";



    // Vorname muss vorhanden sein
    if (form.firstname.value == "") {
        okay = false;
        message += "Geben Sie bitte Ihren Vornamen ein. <br />";
    }

    // Nachname muss vorhanden sein
    if (form.lastname.value == "") {
        okay = false;
        message += "Geben Sie bitte Ihren Nachnamen ein. <br />";
    }

    // E-Mail muss vorhanden sein und zusätzlich ein @ enthalten
    if (form.email.value == "" || !form.email.value.includes("@")) {
        okay = false;
        message += "Geben Sie bitte eine gültige E-Mailadresse ein. <br />";
    }

    // Eine Nachricht muss vorhanden sein
    if (form.message.value == "") {
        okay = false;
        message += "Geben Sie bitte eine Nachricht ein. <br />";
    }


    // Eine Betreff mus vorhanden sein
    if (form.message.subject == "") {
            okay = false;
            message += "Geben Sie bitte eine Nachricht ein. <br />";
        }


    // Ergebnis anzeigen
    let resultElement = document.getElementById("result");


    if (okay) {
        message = "Vielen Dank für Ihre Nachricht!";
        resultElement.classList.add("okay");

        console.log(form.firstname.value);
        console.log(form.lastname.value);
        console.log(form.email.value);
        console.log(document.getElementById("subject"));
        console.log(form.message.value);

        let postData2 = {
          firstname : form.firstname.value,
          lastname : form.lastname.value,
          email: form.email.value,
          subject : document.getElementById("subject"),
          message: form.message.value,
      };
      console.log(postData2);


      let newPostKey2 = firebase.database().ref().child('nachrichten').push().key;

      console.log(newPostKey2);

      let updates = {};
      updates['/nachrichten/' + newPostKey2] = postData2;

      console.log(updates);



      firebase.database().ref().update(updates);

    } else {
        resultElement.classList.remove("okay");
    }

    resultElement.innerHTML = message;

    // Formular nicht abschicken
    //if (!okay) {
    event.preventDefault();
    //}
}

//Ebene 8 Formular
/**
* Funktion zur Überprüfung des Kontaktformulars. Wird beim Abschicken des
* Formulars aufgerufen.
*/




//Ebene 8 Formular
/**
* Funktion zur Überprüfung des Kontaktformulars. Wird beim Abschicken des
* Formulars aufgerufen.
*/
