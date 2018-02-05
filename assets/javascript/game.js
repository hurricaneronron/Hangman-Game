$( document ).ready( function ( ) {

  var wordBank = [ "javascript", "monkey", "amazing", "pancake" ]
  var wins = 0
  var losses = 0
  var guessesLeft = 0
  
  
  $( ".btn" ).on( "click" , function ( ) {
    var playWord = wordBank[ Math.floor( Math.random( ) * wordBank.length )]
    var wordDisplay = playWord.split( "" )
    for( var i = 0; i < playWord.length; i++ ) {
      wordDisplay[i] = "  _  "
    }
    guessesLeft = 12
    var remainingLetters = playWord.length
    remainingLetters = playWord.length
    $( "#game-space" ).html( wordDisplay )
    $( "#guessesLeft" ).text( "12" )
    $( "#lettersGuessed" ).empty()
    $( "#page-heading" ).html( "Hangman Game!" )
    console.log("playWord: " + playWord)
    console.log("RemainingLetters: " + remainingLetters)
    console.log("GuessesLeft: " + guessesLeft)
    console.log("wins: " + wins)
    console.log("Losses: " + losses)
    
    $( document ).keyup( function ( e ) {
      var input = String.fromCharCode(e.keyCode)
      console.log("Input: " + input)
      var char = input.toLowerCase()
      console.log("char: " + char)
      
      var str = playWord
      for( var i = 0; i < str.length; i++ ) {
        str[i] = " "
      }
      var check = str.includes( char )
      console.log("check: " + check)
      
      if( check === true ) {
        for( var i = 0; i < playWord.length; i++ ) {
          if (str[i] === char ) {
            wordDisplay[i] = char
            $( "#game-space" ).text( wordDisplay.join( " " ) )
            remainingLetters--
          }
        }
        console.log( "RemainingLetters: " + remainingLetters )
      }
      
      if( check === false ) {
        guessesLeft--
        $( "#guessesLeft" ).text( guessesLeft )
        $( "#lettersGuessed" ).append( " " + char + " " )
      }
      
      if( guessesLeft === 0) {
        $( "#page-heading" ).html( "<h1>GAME OVER</h1><h5>CLICK BUTTON TO PLAY AGAIN</h5>" )
        losses++
        $( "#losses" ).text( losses )
      }
      
      if( remainingLetters === 0 ) {
        $( "#page-heading" ).html( "<h1>YOU WIN</h1><h5>CLICK BUTTON TO PLAY AGAIN</h5>" )
        wins++
        $( "#wins" ).text( wins )
      }
    })
  })   
})