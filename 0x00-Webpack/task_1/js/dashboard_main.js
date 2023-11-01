import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let clickCount = 0;

  function updateCounter() {
    clickCount += 1;
    $('#count').text(clickCount + ' clicks on the button');
  }

  $('#startButton').on('click', debounce(updateCounter, 300));
});
