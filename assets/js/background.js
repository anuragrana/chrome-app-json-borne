chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('myPage.html', {
    'outerBounds': {
      'width': 1100,
      'height': 650
    }
  });
});