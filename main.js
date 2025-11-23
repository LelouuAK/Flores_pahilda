onload = () => {
    document.body.classList.remove("container");
    const audio = document.querySelector("audio");
    if (audio) {
      audio.volume = 0.9;
      audio.play().catch(() => {
        console.log("Autoplay bloqueado hasta interacción del usuario (clic/pulsación).");
      });
    }
  };