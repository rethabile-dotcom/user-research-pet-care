function showSlide(n) {
  for (let i =1; i <= 7; i++) {
    const slide = document.getElementById('slide' + i);
    slide.style.display = (i === n) ? 'flex' : 'none';
}
}
showSlide(1);