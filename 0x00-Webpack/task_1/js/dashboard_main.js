// js/dashboard_main.js
import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function () {
  // Create and append the HTML elements
  const $body = $('body');
  $body.append($('<p>').text('Holberton Dashboard'));
  $body.append($('<p>').text('Dashboard data for the students'));
  $body.append($('<button>').text('Click here to get started'));
  $body.append($('<p id="count"></p'));
  $body.append($('<p>').text('Copyright - Holberton School'));

  // Counter for button clicks
  let count = 0;

  // Function to update the counter and display it
  function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind the debounce function to the click event on the button
  $('button').on('click', debounce(updateCounter, 500)); // Adjust the debounce delay as needed
});
