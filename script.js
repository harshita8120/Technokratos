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

//Opening and closing Profile button

// ---- Profile Box Toggle ----
const profileButton = document.querySelector('.profile');
const profileBox    = document.querySelector('.profile-box');

profileButton.addEventListener('click', toggleProfileBox);

function toggleProfileBox() {
  profileBox.classList.toggle('profile-box-visible');
}


//Trailer feature

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.years button');
  const videos  = document.querySelectorAll('video[data-year]');

  // Utility to hide all videos
  function hideAllVideos() {
    videos.forEach(video => video.classList.remove('active'));
  }

  // Show the specific video
  function showVideo(year) {
    const video = document.querySelector(`video[data-year="${year}"]`);
    if (video) {
      video.classList.add('active');
      video.currentTime = 0;  // Reset play position if needed
      video.play();           // Optionally start playback
    }
  }

  // Attach click handlers
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedYear = btn.getAttribute('data-year');
      hideAllVideos();
      showVideo(selectedYear);
    });
  });
});