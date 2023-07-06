export function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export const filterBooks = (
  filterType,
  searchValue,
  data,
  Subject,
  skip,
  limit
) => {
  var temp = [];
  if (filterType === "Author") {
    for (let i = 0; i < data.length; i++) {
      if (
        Subject === "All" &&
        data[i]["author"].toLowerCase().includes(searchValue.toLowerCase())
      ) {
        temp.push(data[i]);
      } else {
        if (
          Subject === data[i]["Subject"] &&
          data[i]["author"].toLowerCase().includes(searchValue.toLowerCase())
        ) {
          temp.push(data[i]);
        }
      }
    }
  } else if (filterType === "Title") {
    for (let i = 0; i < data.length; i++) {
      if (
        Subject === "All" &&
        data[i]["title"].toLowerCase().includes(searchValue.toLowerCase())
      ) {
        temp.push(data[i]);
      } else {
        if (
          Subject === data[i]["Subject"] &&
          data[i]["title"].toLowerCase().includes(searchValue.toLowerCase())
        ) {
          temp.push(data[i]);
        }
      }
    }
  } else if (filterType === "Date") {
    for (let i = 0; i < data.length; i++) {
      if (Subject === "All" && data[i]["date"].includes(searchValue)) {
        temp.push(data[i]);
      } else {
        if (
          Subject === data[i]["Subject"] &&
          data[i]["date"].includes(searchValue)
        ) {
          temp.push(data[i]);
        }
      }
    }
  }
  return { data: temp.slice(skip, skip + limit), totalLenght: temp.length };
};
