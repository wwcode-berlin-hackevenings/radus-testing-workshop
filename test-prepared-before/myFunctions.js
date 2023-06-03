const dataGrip = {
  getData() {
    //We connect to our API can return data
    const data = fetch("http://myapi.com/get");
    return data[0];
  },
};

function myGame(slice1, slice2) {
  if (slice1 + slice2 <= 100) {
    return slice1 + slice2;
  } else {
    return 0;
  }
}

function getFirstCharacter() {
  const data = dataGrip.getData();
  return data[0];
}

function shortenString(str, maxLength = 10) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength - 3) + "...";
  }
}

function formatFileSize(size) {
  var format = ["Bytes", "KB", "MB", "GB"];
  let i = 0;

  while (size > 900) {
    size /= 1024;
    i++;
  }

  return Math.round(size * 100) / 100 + " " + format[i];
}

module.exports = {
  dataGrip,
  myGame,
  getFirstCharacter,
  shortenString,
  formatFileSize,
};
