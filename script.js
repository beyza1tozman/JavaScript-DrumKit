document.addEventListener("keydown", (event) => {
  const key = event.key; // Get the key pressed
  const audio = document.getElementById(`sound${key.toUpperCase()}`);
  if (audio) {
    audio.currentTime = 0; // Rewind to the beginning (optional)
    audio.play();
    const button = document.querySelector(`[data-key="${key.toUpperCase()}"]`);
    button.classList.add("active"); // Add the active class

    // Remove the active class after a short delay (e.g., 300 milliseconds)
    setTimeout(() => {
      button.classList.remove("active");
    }, 400);
  }
});
