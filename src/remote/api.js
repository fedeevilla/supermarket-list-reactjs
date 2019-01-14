export const getItems = () => {
  return JSON.parse(localStorage.getItem("items")) || [];
};

export const addItem = name => {
  const list = JSON.parse(localStorage.getItem("items")) || [];
  let maxId = 0;

  for (var i = 0; i < list.length; i++) {
    if (list[i].id > maxId) {
      maxId = list[i].id;
    }
  }

  let item = {
    id: maxId + 1,
    name
  };

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
