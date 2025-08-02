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

const popupAudio = document.getElementById('popupSound');

function openPopup() {
    document.querySelector('.notification').classList.add('notification-visible');
    popupAudio.currentTime = 0;
    popupAudio.play().catch(console.warn);

    //If clicks 'X'

        document.querySelector('.cross-button').addEventListener('click', () => {
            closePopup();
        }, { once: true });
}

function closePopup () {
    document.querySelector('.notification').classList.remove('notification-visible');
}
    
document.querySelector('.notification-button').addEventListener('click', openPopup);   