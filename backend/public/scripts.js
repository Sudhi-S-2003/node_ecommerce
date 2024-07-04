function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
        const allElements = document.querySelectorAll('.code-snippet .container-fluid');
allElements.forEach(el => {
    if (el.id !== elementId) {
        el.style.display = 'none';
    }
});
    } else {
        element.style.display = 'none';
    }
}


function copyCode(elementId) {
  const codeElement = document.getElementById(elementId);
  const codeText = codeElement.textContent.trim();

  navigator.clipboard.writeText(codeText)
    .then(() => {
      alert('Code copied to clipboard!');
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });
}