const GETUSERS = "http://localhost:3000/api/users";
// Get Users
function loadTable() {
  fetch(GETUSERS)
    .then((usersJSON) => {
      return usersJSON.json();
    })
    .then((users) => {
      var trHTML = "";
      for (let user of users) {
        trHTML += `
            <tr>
                <td><img width="50px" src="${user.avatar}" class="avatar"></td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.username}</td>
            </tr>
        `;
      }

      document.getElementById("mytable").innerHTML = trHTML;
    });
}

loadTable();
