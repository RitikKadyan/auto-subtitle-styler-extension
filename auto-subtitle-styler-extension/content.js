function updateSubtitleStyle() {
  const videoPlayers = document.querySelectorAll('video');

  videoPlayers.forEach((video) => {
    const tracks = video.textTracks;

    if (tracks) {
      for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        if (track.kind === "subtitles" || track.kind === "captions") {
          track.mode = "showing"; // Ensure subtitles are showing

          const style = track.cue || new VTTCue(0, 0, '');
          // Set the subtitle style attributes
          style.backgroundOpacity = 0;
          style.edgeStyle = 'raised';

          track.addCue(style);
        }
      }
    }
  });
}

function updateYouTubeCaptions() {
    // Find YouTube subtitle elements
    const captions = document.querySelectorAll('.ytp-caption-segment, .ytp-caption-window-container');

    captions.forEach((caption) => {
        // Set the background to transparent (effectively 0% opacity)
        caption.style.backgroundColor = 'transparent';
        caption.style.background = 'transparent';
        
        // Add text-shadow to simulate a raised edge effect
        caption.style.textShadow = `
            1px 1px 2px black, 
            -1px -1px 2px black, 
            1px -1px 2px black, 
            -1px 1px 2px black
        `;
    });
}


// Run the function when the content script loads
updateSubtitleStyle();
updateYouTubeCaptions();

// Monitor for changes on YouTube and reapply the styles (because captions on YouTube are dynamic)
const observer = new MutationObserver(updateYouTubeCaptions);
observer.observe(document.body, { childList: true, subtree: true });