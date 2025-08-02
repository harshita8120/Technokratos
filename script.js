//FAQ section
document
      .querySelectorAll('.faq-question')
      .forEach((btn) =>
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          item.classList.toggle('active');
        })
      );

      // Notification Popup
function openPopup() {
    document.querySelector('.popup').classList.add('popup-visible');
    document.querySelector('.gradient').classList.add('blur');
    popupAudio.currentTime = 0;
    popupAudio.play().catch(console.warn);

    //If clicks 'yes'

        document.querySelector('.yes-button').addEventListener('click', () => {
            score.wins=0; score.losses=0; score.ties=0;
            localStorage.removeItem('score');
            updateScoreElement();
            closePopup();
        }, { once: true });

    //If clicks 'no'

        document.querySelector('.no-button').addEventListener('click', () => {
            closePopup();
        }, { once: true });
}

function closePopup () {
    document.querySelector('.popup').classList.remove('popup-visible');
    document.querySelector('.gradient').classList.remove('blur');
}
    
document.querySelector('.restart').addEventListener('click', openPopup);   