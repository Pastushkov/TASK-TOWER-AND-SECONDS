const CheckOne = (array) => {
  let zero = 0;
  let start, finish;
  let f = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === 1) {
          start = i;
          finish = j;
          f = true;
          break;
        }
      }
      if (f) {
        for (let i = start; i < finish; i++) {
          if (array[i] === 0) zero += 1;
        }
      }
      f = false;
    }
  }
  return zero;
};

class taskServices {
  tower(towers) {
    try {
      let water = 0;
      if (towers.length <= 2) {
        return { water: 0 };
      }
      const array = [];
      const n = towers.length;
      const m = Math.max(...towers);

      for (let i = 0; i < m; i++) {
        array[i] = [];
        for (let j = 0; j < n; j++) {
          array[i][j] = 0;
        }
      }

      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          for (let k = 0; k < towers.length; k++) {
            if (j == k && i < towers[k]) {
              array[i][j] = 1;
            }
          }
        }
      }

      for (let i = 0; i < m; i++) {
        water += CheckOne(array[i]);
      }

      return {
        water,
      };
    } catch (e) {
      return {
        errorTower: e.toString(),
      };
    }
  }

  time(sec) {
    try {
      if (isNaN(sec)) {
        throw new Error("seconds must be number");
      }
      let seconds = parseInt(sec);

      if (sec === 0) {
        return {
          message: "now",
        };
      }
      let message = "";
      let years = Math.floor(seconds / (3600 * 24) / 365);
      let days = Math.floor(seconds / (3600 * 24) - years * 365);
      let hours = Math.floor((seconds % (3600 * 24)) / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      seconds = Math.floor(seconds % 60);

      console.log(years);
      console.log(days);
      console.log(hours);
      console.log(minutes);
      console.log(seconds);

      message += years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
      message += hours > 0 ? hours + (hours == 1 ? " hour, " : " hours, ") : "";
      message +=
        minutes > 0
          ? minutes + (minutes == 1 ? " minute, " : " minutes, ")
          : "";
      message +=
        seconds > 0 ? seconds + (seconds == 1 ? " second" : " seconds") : "";

      return {
        message,
      };
    } catch (e) {
      return {
        errorSeconds: e.toString(),
      };
    }
  }
}

module.exports = new taskServices();
