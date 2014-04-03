// Wait till the browser is ready to render the game (avoids glitches)
var myGameManager;
window.requestAnimationFrame(function () {
  myGameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
