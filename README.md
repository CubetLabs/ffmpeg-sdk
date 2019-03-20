# ffmpeg-sdk
Minimal ffmpeg wrapper for NodeJS

## Features
 * Media file clipping
 * Media file splitting
 * Parsing audio from media files

## Installation 
`npm install ffmpeg-sdk`

## Usage and Examples

 * Clips video from input.mp4 from startTime to endTime  
```js
const ffmpeg = require('ffmpeg-sdk');

ffmpeg.clip('input.mp4', 'output.mp4', startTime, endTime)
.then(fileClipped => {
  console.log('File clip success.');
})
.catch(error => {
  console.log('File clip error.');
});
```

 * Splits input.mp4 into 3 clips.
```js
ffmpeg.split('input.mp4', 'output.mp4', [1000, 56770, 67880, 89909])
.then(fileClipped => {
  console.log('File split success.');
})
.catch(error => {
  console.log('File split error.');
});
```

 * Parse audio from input.mp4 and saves in output.mp3  
 ```js
 ffmpeg.parseAudio('input.mp4', 'output.mp3')
.then(audioParsed => {
  console.log('Auduo parse success.');
})
.catch(error => {
  console.log('Audio parse error.');
});
```