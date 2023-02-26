// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();

// Send a request to the current page's URL
request.open('GET', window.location.href, true);
request.send();

// Check for a 404 error response
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 404) {
    window.location.href = '../../index.html';
  }
}
