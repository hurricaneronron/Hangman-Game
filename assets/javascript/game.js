$( document ).ready( function ( ) {

  var wordBank = [ "javascript", "monkey", "amazing", "pancake" ]
  var guessesLeft = 0
  var wins = 0
  var losses = 0
  var remainingLetters = 0
  
  
  $( ".btn" ).on( "click" , function ( ) {
    var playWord = wordBank[ Math.floor( Math.random( ) * wordBank.length )]
    var wordDisplay = playWord.split( "" )
    for( var i = 0; i < playWord.length; i++ ) {
      wordDisplay[i] = "  _  "
    }
    $( "#game-space" ).html( wordDisplay )
    guessesLeft = 12
    remainingLetters = playWord.length
    $( "#guessesLeft" ).text( "12" )
    $( "#lettersGuessed" ).empty()
    $( "#page-heading" ).html( "Hangman Game!" )
    console.log(playWord)

  

  $( document ).keyup( function ( e ) {
    // var playString = playWord.split( "" )
    // console.log(playString)
    // for( var j = 0; j < playString.length; j++ ) {
    //   $( "#game-space").text(playString[j] = "<span>"
    // }

    // var charSpace = [j]
    // charSpace.attr( "class", "rightLetter")
    // console.log(charSpace)
    // charSpace.text(playString[i])
    
    var input = String.fromCharCode(e.keyCode)
    console.log(input)
    var char = input.toLowerCase()
    console.log(char)
    
    var str = playWord
    for( var i = 0; i < str.length; i++ ) {
      str[i] = " "
    }
    var check = str.includes( char )
    console.log(check)

    if( check === true ) {
      for( var i = 0; i < playWord.length; i++ ) {
        if (str[i] === char ) {
          wordDisplay[i] = char
          $( "#game-space" ).text( wordDisplay.join( " " ) )
        }
      }
      // for( var j = 0; j < playWord.length; j++ ) {
        // if( playWord[j] === char ) {
          // console.log(wordDisplay)
        // }
      // }
        remainingLetters--
      console.log( remainingLetters )
    }

    if( check === false ) {
      $( "#lettersGuessed" ).append( char )
      guessesLeft-
      $( "#guessesLeft" ).text( guessesLeft )
      }

    if( guessesLeft === 0) {
      $( "#page-heading" ).html( "<h1>GAME OVER</h1><h5>CLICK BUTTON TO PLAY AGAIN</h5>" )
      losses++
      $( "#losses" ).text( losses )
      guessesLeft = 12
      correctGuess = 0
    }
  
    if( remainingLetters === 0 ) {
      $( "#page-heading" ).html( "<h1>YOU WIN</h1><h5>CLICK BUTTON TO PLAY AGAIN</h5>" )
      wins++
      $( "#wins" ).text( wins )
      guessesLeft = 12
      correctGuess = 0
    }
  })
})   
  
  
  
  
  })