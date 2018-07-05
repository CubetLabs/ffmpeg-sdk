const exec = require('child_process').exec;

function timeDifference(startTimeInMilliSeconds, endTimeInMilliSeconds){
  return formattedTime(timeInMilliSeconds(endTimeInMilliSeconds) - timeInMilliSeconds(startTimeInMilliSeconds));
}

function execute(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

function timeInMilliSeconds(formattedTime){
  let splitTime = formattedTime.split(':');
  let secondsSplit = splitTime[2].split('.');
  return (((parseInt(splitTime[0]) * 60 * 60) + (parseInt(splitTime[1]) * 60) + (parseInt(secondsSplit[0]))) * 1000) + (parseInt(secondsSplit[1]) || 0);
}

function formattedTime(milliSeconds) {
  if (isNaN(milliSeconds) || milliSeconds < 0) {
    return null;
  }
  let formattedDate = new Date(milliSeconds).toISOString();
  let formattedTime = formattedDate.split('1970-01-01T')[1];
  return formattedTime.split('Z')[0];
}

function slice(inputFilePath, outputFilePath, startTime, endTime){
  let duration = timeDifference(startTime, endTime);
  console.log('test', `ffmpeg -ss ${startTime} -i ${inputFilePath} -c copy -t ${duration} ${outputFilePath}`);
  return execute(`ffmpeg -ss ${startTime} -i ${inputFilePath} -c copy -t ${duration} ${outputFilePath} -y`);
}
