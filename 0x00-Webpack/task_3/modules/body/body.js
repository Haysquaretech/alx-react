import './body.css';
const $ = require('jquery');
const _ = require('lodash');

let count = 0;

$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));