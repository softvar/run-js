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
    const complexHssh = window.runjs.generateDeterministicHash(getInputValue('input1'), getInputValue('input2'));

    document.getElementById('output1').textContent = complexHssh;

    const output1 = document.getElementById('output1');
    const copyIcon1 = document.getElementById('copyIcon1');

    if (output1.textContent.trim() !== "") {
        copyIcon1.style.display = 'inline';
    } else {
        copyIcon1.style.display = 'none';
    }
  });

  document.getElementById('inputForm2').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const complexHash = window.runjs.generateDeterministicHash(document.getElementById('input1').value, document.getElementById('input2').value);
    const result = getInputValue('input3') + complexHash + getInputValue('input5');

    document.getElementById('output2').textContent = result;

    const output2 = document.getElementById('output2');
    const copyIcon2 = document.getElementById('copyIcon2');

    if (output2.textContent.trim() !== "") {
        copyIcon2.style.display = 'inline';
    } else {
        copyIcon2.style.display = 'none';
    }
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

function copyToClipboard(outputId) {
    const outputElement = document.getElementById(outputId);
    const text = outputElement.textContent;

    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        alert('Error copying text to clipboard: ', JSON.stringify(err));
    });
}
