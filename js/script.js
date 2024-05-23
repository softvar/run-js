window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const input1Value = urlParams.get('a');
  const input2Value = urlParams.get('b');

  if (input1Value !== null) {
      document.getElementById('input1').value = input1Value;
  }

  if (input2Value !== null) {
      document.getElementById('input2').value = input2Value;
  }

  document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const p = window.runjs.generateDeterministicHash(document.getElementById('input1').value, document.getElementById('input2').value);

    alert(p);
  });
};
