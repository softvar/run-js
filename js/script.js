window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const input1Value = urlParams.get('a');
  const input2Value = urlParams.get('b');

  function getInputValue(input) {
    return document.getElementById(input).value;
  }

  if (input1Value !== null) {
      document.getElementById('input1').value = input1Value;
  }

  if (input2Value !== null) {
      document.getElementById('input2').value = input2Value;
  }

  document.getElementById('inputForm1').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const p = window.runjs.generateDeterministicHash(getInputValue('input1'), getInputValue('input2'));

    alert(p);
  });

  document.getElementById('inputForm2').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const p = window.runjs.generateDeterministicHash(document.getElementById('input1').value, document.getElementById('input2').value);

    const result = getInputValue('input3') + (p || getInputValue('input4')) + getInputValue('input5')

    console.log(result);
  });
};

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
