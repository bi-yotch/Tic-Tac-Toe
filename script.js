$(document).ready(function() {

  for(var i=1; i<10; i++)
    $('ul').prepend('<li id="spot'+i+'"> </li>');

  var x = "x", o = "o", turns = 0;
  var spot1 = $('#spot1'), spot2 = $('#spot2'), spot3 = $('#spot3'), spot4 = $('#spot4'),
   spot5 = $('#spot5'), spot6 = $('#spot6'), spot7 = $('#spot7'), spot8 = $('#spot8'), spot9 = $('#spot9');

  $('#board li').on('click', function() {

    if($(this).hasClass('disable')) { /*alert('This spot is already filled!');*/ break; }
    else if(turns % 2 == 0) {
      turns++;
      $(this).text('O').addClass('disable o');

      check('o');
    }
    else if(turns % 2 == 1) {
      turns++;
      $(this).text('X').addClass('disable x');

      check('x');
    }

    if (turns%2 == 0)
      $('nobr').text("O's Turn").removeClass('x').addClass('o');
    else
      $('nobr').text("X's Turn").removeClass('o').addClass('x');

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
              resetContent('Winner: '+value.toUpperCase());
      else if(turns == 9)
        resetContent("It's a tie! Better luck next time!");
    }

    function resetContent(message) {
      if(message != "")
        alert(message);

      $('#board li').text(' ').removeClass('disable').removeClass('o').removeClass('x');
      $('nobr').text("O's Turn").removeClass('x').addClass('o');
      turns = 0;
    }

  });

});
