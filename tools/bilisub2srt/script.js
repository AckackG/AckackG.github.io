// Function to format seconds into the desired format
function formatSeconds(secondsStr) {
  const totalSeconds = parseInt(secondsStr, 10);
  if (isNaN(totalSeconds)) {
    return "Invalid input";
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((parseFloat(secondsStr) * 1000) % 1000);

  // Use String.padStart to ensure two digits for hours, minutes, seconds, and three digits for milliseconds
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")},${String(milliseconds).padStart(
    3,
    "0"
  )}`;
}

// Main function to process the JSON data
function main(jsonString) {
  const data = jsonString.body;
  const result = [];

  data.forEach((subtitle) => {
    let content = `${subtitle.sid}\n`;
    content += `${formatSeconds(subtitle.from)} --> ${formatSeconds(
      subtitle.to
    )}\n`;
    content += `${subtitle.content}\n\n`;
    result.push(content);
  });

  return result.join("");
}
