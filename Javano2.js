function moveGift() {
    const gift = document.createElement('div');
    gift.style.position = 'absolute';
    gift.style.top = '10%';
    gift.style.left = '10%';
    gift.style.width = '50px';
    gift.style.height = '50px';
    gift.style.backgroundColor = 'green';
    gift.style.transition = 'all 2s ease'; // Ustawienie animacji
  
    document.body.appendChild(gift);
  
    // Po kliknięciu, prezent zaczyna się poruszać
    gift.addEventListener('click', () => {
      gift.style.top = '80%'; // Zmiana pozycji na dole strony
      gift.style.left = '80%'; // Zmiana pozycji w prawo
    });
  }
  
  moveGift();