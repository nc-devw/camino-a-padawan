// GET USERS
function loadTable() {
  fetch("https://www.mecallapi.com/api/users")
    .then((data) => data.json())
    .then((data) => {
      var trHTML = "";
      for (let user of data) {
        trHTML += `
        <tr>
            <td><img width="50px" src="${user["avatar"]}" class="avatar"></td>
            <td>${user["fname"]}</td>
            <td>${user["lname"]}</td>
            <td>${user["username"]}</td>
            <td>
                <button type="button" class="btn btn-outline-danger" onclick="deleteUser(${user["id"]})">Del</button>
            </td>
        </tr>`;
      }
      document.getElementById("mytable").innerHTML = trHTML;
    })
    .catch((err) => console.log(`ERROR: ${err}`));
}

loadTable();

// SHOW MODAL CREATE USER
function showUserCreateBox() {
  Swal.fire({
    title: "Create User",
    html: `
        <input id="id" type="hidden" />
        <input id="fname" class="swal2-input" placeholder="First" />
        <input id="lname" class="swal2-input" placeholder="Last" />
        <input id="username" class="swal2-input" placeholder="Username" />
        <input id="email" class="swal2-input" placeholder="Email" />
      `,
    focusConfirm: false,
    preConfirm: () => {
      const fname = document.getElementById("fname").value;
      const lname = document.getElementById("lname").value;
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;

      userCreate({
        fname,
        lname,
        username,
        email,
        avatar: "https://www.mecallapi.com/users/cat.png",
      });
    },
  });
}

// POST USER CREATE
function createUser(user) {
  fetch("https://www.mecallapi.com/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .then((data) => {
      Swal.fire(data["message"]);
      loadTable();
    });
}

// DELETE USER
function deleteUser(id) {
  fetch("https://www.mecallapi.com/api/users/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((data) => data.json())
    .then((data) => {
      Swal.fire(data["message"]);
      loadTable();
    });
}
