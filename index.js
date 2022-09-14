const input = document.querySelector('button');

function addingEventListener() {
  input.addingEventListener('click', function(event) {
    return "clicked"
  });
}