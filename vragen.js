//variabelen 
    var prijsDrank = 0;
    var prijsEten = 0;



//stop als u klaar bent met bestellen
while(welke != 'stop'){

            var welke = prompt('Wilt u drank of een snack toevoegen aan uw bestelling? als u stop invult gaat u naar u overzicht.');

            while (welke != 'drank' && welke != 'stop' && welke != 'snack'){

            alert('U heeft een fout gemaakt bij het bestellen!')

            welke = prompt('Wilt u drank of een snack toevoegen aan uw bestelling?')

        }
            


//dranken
while(welke == 'drank'){

        var soort = prompt('Wilt u Bier,Wijn of Fris?');

        while (soort != 'wijn' && soort != 'bier' && soort != 'fris'){

            alert('U heeft een fout gemaakt bij het bestellen!')

            soort = prompt('Wilt u Wijn,Bier of Fris?')
        }

            if(soort == 'bier'){
            	aantalBier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
            	prijsDrank = prijsDrank + 2 * aantalBier
            }

            if(soort == 'wijn'){
            	aantalWijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
            	prijsDrank = prijsDrank + 4 * aantalWijn
            }

            if(soort == 'fris'){
            	aantalFris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
            	prijsDrank = prijsDrank + 1 * aantalFris
            }
            
            welke = prompt('Wilt u drank of een snack toevoegen aan uw bestelling?');
        
        }

//snacks
if (welke == 'snack'){

	    var bitterbal = prompt('wilt u 8 of 16 bitterballen?')

	    while (bitterbal != '8' && bitterbal != '16'){

	     	alert('Maak alleen een keuze tussen 8 of 16 bitterballen. De snacks zijn niet toegevoegd aan de bestelling.')
            
            bitterbal = prompt('wilt u 8 of 16 bitterballen?')
	    }

	        if(bitterbal == '8'){
            	aantalSchalen = prompt('hoeveel schalen van 8 porties wilt u?')
            	prijsEten = prijsEten + 6 * aantalSchalen
            }

            if(bitterbal == '16'){
            	aantalSchalen = prompt('hoeveel schalen van 16 porties wilt u?')
            	prijsEten = prijsEten + 11 * aantalSchalen
            }

      }
}

//stop code
	document.write('<h2>Aspendos</h2>')
if(welke == 'stop'){
    //text voor op page
    document.write('<h3>Hier vind u uw bestelling en alle prijzen.</h3>')

    if(soort == 'wijn'){
        
   document.write('U heeft ' +aantalWijn)
   document.write('x ' +soort)
   document.write(' besteld en is in totaal: ' +prijsDrank)
   document.write(',-')
   document.write('<br>')
        
   }

   if(soort == 'bier'){
   document.write('U heeft ' +aantalBier)
   document.write('x ' +soort)
   document.write(' besteld en is in totaal: ' +prijsDrank)
   document.write(',-')
   document.write('<br>')

   }

   if(soort == 'fris'){
   document.write('U heeft ' +aantalFris)
   document.write('x ' +soort)
   document.write(' besteld en is in totaal: ' +prijsDrank)
   document.write(',-')
   document.write('<br>')

   }

   if(bitterbal == '16'){
        
   document.write('U heeft ' +bitterbal)
   document.write(' bitterballen genomen en ' +aantalSchalen)
   document.write(' schalen besteld het in totaal: ' +prijsEten)
   document.write(',-')
   document.write('<br>')
        
   }

   if(bitterbal == '8'){
        
   document.write('U heeft ' +bitterbal)
   document.write(' bitterballen genomen en ' +aantalSchalen)
   document.write(' schalen besteld het in totaal: ' +prijsEten)
   document.write(',-')
   document.write('<br>')
        
   }  

   document.write('<hr style="border-top: dotted 2px;" />')
   document.write('Het kost in totaal: ' +((prijsEten) + (prijsDrank)))
   document.write(',-')

}






	  

