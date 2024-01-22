function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  var label = section.previousElementSibling;

  if (section.style.maxHeight === '1300px') {
    section.style.maxHeight = '0';
  } else {
    section.style.maxHeight = '1300px';
  }
}
