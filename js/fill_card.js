function populate_card() {

  var squares = ["Active measures", "Alone with Trump", "Andrew McCabe", "Any Trump quote", "Assurances", "But sir", "Carter Page", "Classified", "Collusion", "Electoral College", "Fake News", "Golf", "Hack", "Her Emails", "I can't answer that", "Impeachment", "Incidental Collection", "Ivanka", "Jared", "Leaks", "Loyalty", "Mar-a-Lago", "Meddling", "Michael Flynn", "Moves to closed session", "Nixon", "Obstruction of justice", "Our Allies","Paul Manafort", "Putin", "Reality Winner", "Rod Rosenstein", "Russia", "Sean Spicer", "Sergey Kislyak", "Sessions", "Show Boat", "Steele Dossier", "Steve Bannon", "Tapes", "'The Cloud'", "The Media/MSM", "Travel Ban", "Treason", "Trump Tweets", "Turkey", "Ukraine", "Unmasking", "Watergate", "Whistle blower", "'Wiretappping'"]
  
  var black_text_list = ["Trump Tweets", "Fake News", "Steve Bannon", "Any Trump quote"]
  
  var counter = 1;

  
  for (r = 1; r <= 5; r++) {
  //loop through each row
      
      var row = document.getElementById("row" + r);
      
      for (c = 1; c <= 5; c++) {
      //loop through each column
                
          var tile = row.querySelector("#column" + c);
          //identify the current tile


          if (r != 3 || c != 3) {
              
              //randomishly select a value from the list              
              var i = getRandomInt(0,squares.length);
              //retrieve the value
              
              var para = document.createElement("P");
              var text_node = document.createTextNode(squares[i])
              //create the text for the square
              
              para.appendChild(text_node);
              tile.appendChild(para);
              squares.splice(i,1);
              //set text for the square
              
              var re = /[\s'-/]/gi;
              var img_name = text_node.textContent.toLowerCase().replace(re, '')
              //determine the (potential) background image name for the square
                            
              tile.style.backgroundImage = "url('./img/" + img_name+ ".png')";

              if (black_text_list.indexOf(text_node.textContent) != -1) {
                tile.style.color = "black";
                tile.style.textShadow = "2px 2px 6px white, -2px -2px 6px white";
              } else {
                tile.style.color = "white";  
                tile.style.textShadow = "2px 2px 6px black, -2px -2px 6px black";
              }

              tile.style.fontSize = "1.5em";
              tile.style.backgroundColor = "black";
              //load the background image (if available)
              
          } else {
              //middle tile is set to "FREE SQUARE"
              tile.innerHTML = "FREE SQUARE";
          }
          
          counter += 1;
          
      }
      
  }

    
  return true;  
};



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};



function LinkCheck(image_name)
{
    var url = "http://127.0.0.1:54154/img/" + image_name + ".png"
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
};