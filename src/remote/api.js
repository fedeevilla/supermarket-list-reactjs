export const getItems = () => {
  return JSON.parse(localStorage.getItem("items")) || [];
};

export const addItem = name => {
  const list = JSON.parse(localStorage.getItem("items")) || [];
  let max = 0;

  for (var i = 0; i < list.length; i++) {
    if (list[i].id > max) {
      max = list[i].id;
    }
  }

  let item = {};
  item.id = max + 1;
  item.name = name;

  let listAux = list.concat(item);
  localStorage.setItem("items", JSON.stringify(listAux));
  return listAux;
};

export const removeItem = id => {
  let listAux = JSON.parse(localStorage.getItem("items")).filter(
    t => t.id !== id
  );
  localStorage.setItem("items", JSON.stringify(listAux));
  return listAux;
};
