$( document ).ready( function ( ) {

  var words = [ "javascript", "monkey", "amazing", "pancake" ]

  var word = words[ Math.floor ( Math.random ( ) * words.length )]

  var guessesLeft = 0
  var wins = 0
  var losses = 0
  
  var answerArray = [ ]
  for( var i = 0; i < word.length; i++ ) {
    answerArray[i] = "  _  "
  }
  $( ".btn" ).on( "click" , function ( ) {
    $( "#game-space" ).html( answerArray )
    guessesLeft = 12
    $( "#guessesLeft" ).text( "12" )
    $( "#lettersGuessed" ).empty()
  })
  
  var remainingLetters = word.length
  var correctGuess = 0
  
  $( document ).keyup( function ( e ) {
    for( var i = 0; i < word.length; i++ ) {
      if( e.key === answerArray[i] ) {
        answerArray[i] = (e.key)
        correctGuess++
        }

      if( e.key !== answerArray[i] ) {
        $( "#lettersGuessed" ).append(" " + e.key + " " )
        guessesLeft--
        $( "#guessesLeft" ).text( guessesLeft )
        }
        break

      }
    })
    
    if( guessesLeft === 0) {
      $( "<h1>" ).html( "GAME OVER" )
    }
  
    if( correctGuess === word.length ) {
      $( "<h1>" ).html( "YOU WIN" )
    }
  
  
  
  
  })