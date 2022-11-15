let url = "https://jsonplaceholder.typicode.com/users";

let UsersArray = [];
function FetchUser(CallBack) {
  fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      CallBack(null, json);
    })
    .catch((error) => {
      CallBack(error, null);
    });
}

FetchUser((error, users) => {
  if (error) {
    console.log(error);
    return;
  }
  UsersArray = users;
  console.log(UsersArray);
  AddTable(UsersArray);
});

function AddTable(UsersArray) {
  let col = ["Name", "E-mail", "Street", "City", "Phone Number"];
  const Table = document.createElement("Table");
  Table.border = "1";
  let tr = Table.insertRow(-1);
  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  for (let i = 0; i < UsersArray.length; i++) {
    tr = Table.insertRow(-1);
    let tabelCell1 = tr.insertCell(-1);
    let tabelCell2 = tr.insertCell(-1);
    let tabelCell3 = tr.insertCell(-1);
    let tabelCell4 = tr.insertCell(-1);
    let tabelCell5 = tr.insertCell(-1);
    tabelCell1.innerHTML = UsersArray[i].name;
    tabelCell2.innerHTML = UsersArray[i].email;
    tabelCell3.innerHTML = UsersArray[i].address.street;
    tabelCell4.innerHTML = UsersArray[i].address.city;
    tabelCell5.innerHTML = UsersArray[i].phone;
  }

  const divShowData = document.getElementById("myDynamicTable");
  divShowData.innerHTML = "";
  divShowData.appendChild(Table);
}
