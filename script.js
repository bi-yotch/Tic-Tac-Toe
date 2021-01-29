$(document).ready(function() {

  for(var i=1; i<10; i++)
    $('ul').prepend('<li id="spot'+i+'"> </li>');

  var x = "x", o = "o", turns = 0;

  var spot1 = $('#spot1'), spot2 = $('#spot2'), spot3 = $('#spot3'), spot4 = $('#spot4'),
   spot5 = $('#spot5'), spot6 = $('#spot6'), spot7 = $('#spot7'), spot8 = $('#spot8'), spot9 = $('#spot9');

  $('#board li').on('click', function() {
    if(check('o'))
          resetContent('Winner: O');
    else if(check('x'))
          resetContent('Winner: X');
    else if(turns == 9)
      resetContent("It's a tie! Better luck next time!");
    else if($(this).hasClass('disable')) { /*alert('This spot is already filled!');*/ }
    else if(turns % 2 == 0) {
      turns++;
      $(this).text('O');
      $(this).addClass('disable o');

      if(check('o')) {
        resetContent('Winner: O');
        turns = 0;
      }
      else if(turns == 9)
          resetContent("It's a tie! Better luck next time!");
    }
    else if(turns % 2 == 1) {
      turns++;
      $(this).text('X');
      $(this).addClass('disable x');

      if(check('x')) {
        resetContent('Winner: X');
        turns = 0;
      }
      else if(turns == 9)
        resetContent("It's a tie! Better luck next time!");
    }

    if (turns%2 == 0) {
      $('nobr').text("O's Turn");
      $('nobr').removeClass('x');
      $('nobr').addClass('o');
    }
    else {
      $('nobr').text("X's Turn");
      $('nobr').removeClass('o');
      $('nobr').addClass('x');
      }

    $('#reset').on('click', function() {
      resetContent("");
    });

    function check(value) {
      if(spot1.hasClass(value) && spot2.hasClass(value) && spot3.hasClass(value) ||
          spot4.hasClass(value) && spot5.hasClass(value) && spot6.hasClass(value) ||
          spot7.hasClass(value) && spot8.hasClass(value) && spot9.hasClass(value) ||
          spot1.hasClass(value) && spot4.hasClass(value) && spot7.hasClass(value) ||
          spot2.hasClass(value) && spot5.hasClass(value) && spot8.hasClass(value) ||
          spot3.hasClass(value) && spot6.hasClass(value) && spot9.hasClass(value) ||
          spot1.hasClass(value) && spot5.hasClass(value) && spot9.hasClass(value) ||
          spot3.hasClass(value) && spot5.hasClass(value) && spot7.hasClass(value) )
          return true;
      return false;
    }

    function resetContent(message) {
      if(message != "")
        alert(message);

      $('#board li').text(' ');
      $('#board li').removeClass('disable');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
      turns = 0;
    }

  });

});
