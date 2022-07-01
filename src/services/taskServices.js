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

      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      let hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
      let days = Math.floor(hours / 24);
      hours = hours - days * 24;
      let years = Math.floor(days / 365);
      days = days - years * 365;

      console.log(years);
      console.log(days);
      console.log(hours);
      console.log(minutes);
      console.log(seconds);

      if (years>1) message+=`${years} years`
      else if (years===1) message+=`${years} year`
    

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
