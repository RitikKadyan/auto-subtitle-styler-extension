# Auto Subtitle Styler Extension

A lightweight Chrome extension that automatically modifies the appearance of subtitles (captions) for video players across different platforms, including YouTube. The extension sets subtitle background opacity to 0% and applies a raised character edge for better readability.

## Features

- Automatically removes subtitle background (0% opacity) to prevent distractions.
- Adds a "raised edge" effect using multiple text shadows, improving subtitle visibility on any background.
- Supports native HTML5 video players and custom players like YouTube.
- Detects dynamic subtitle changes and re-applies styles using `MutationObserver`.
- Works seamlessly across multiple video streaming platforms.

## How It Works

- For **native video players** (using `textTracks`), the extension modifies subtitle styles directly through the `textTracks` API.
- For **YouTube** and other custom players, it targets subtitle elements directly in the DOM and applies custom CSS to achieve the desired styles.

## Installation

1. Clone or download the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the extension folder.
5. The extension will now automatically apply subtitle styles on supported video platforms.

## Platforms Supported

- YouTube
- Native HTML5 video players
- Other video platforms with custom players (e.g., streaming services)

## Contribution

Feel free to submit issues or contribute to improving the project. PRs are welcome!
