// export const baseTimes = [
//   "17:00",
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
// ];
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};

export const initializeTimes = () => {
   const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    
    const val = fetchAPI(new Date(action.date))
    
    return val;
  }
  return state;
};
