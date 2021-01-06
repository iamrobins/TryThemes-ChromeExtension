document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("background").addEventListener("change", changeColors, false);
    document.getElementById("color").addEventListener("change", changeColors, false);

    let background = document.getElementById("background");
    let color = document.getElementById("color");

    let bgLabel = document.getElementById('bg_label');
    let cLabel = document.getElementById('c_label');

    function changeColors() {
      const Theme = {
        background: background.value,
        color: color.value
      }

      bgLabel.textContent = `Background: ${Theme.background}`;
      cLabel.textContent = `Color: ${Theme.color}`;

      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, Theme);
      });
    }
  },
  false
);

