document.getElementById('imageUrl').addEventListener('input', function() {
  const imageUrl = document.getElementById('imageUrl').value;
  document.getElementById('imageFrame').src = imageUrl;
});

document.getElementById('imageWidth').addEventListener('input', function() {
  const width = document.getElementById('imageWidth').value;
  document.getElementById('imageFrame').style.width = width + 'px';
});

document.getElementById('frameThickness').addEventListener('input', function() {
  const thickness = document.getElementById('frameThickness').value;
  document.getElementById('imageFrame').style.borderWidth = thickness + 'px';
});

document.getElementById('frameColor').addEventListener('input', function() {
  const color = document.getElementById('frameColor').value;
  document.getElementById('imageFrame').style.borderColor = color;
});

document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
