# ffmpeg-sdk

##Usage

```js
const ffmpeg = require('ffmpeg-sdk');
ffmpeg.clip('input.mp4', 'output.mp4', startTime, endTime)
.then(fileClipped => {
  console.log('File clip success.');
})
.catch(error => {
  console.log('File clip error.');
});

split('input.mp4', 'output.mp4', [1000, 56770, 67880, 89909])
.then(fileClipped => {
  console.log('File split success.');
})
.catch(error => {
  console.log('File split error.');
});
```