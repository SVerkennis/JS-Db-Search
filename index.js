//add buttons
const addUserButton = document.getElementById("addUser");
addUserButton.addEventListener("click", () => addUser());

const undoUserButton = document.getElementById("undoUser");
undoUserButton.addEventListener("click", () => undoLastAddUser());

const findUsernameButton = document.getElementById("findUsername");
findUsernameButton.addEventListener("click", () => findUserByName(getSearchValue()));

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => searchDb(getSearchValue()));


// const findUserUsingFilterMethodButton = document.getElementById("findUserUsingFilterMethod");
// findUserUsingFilterMethodButton.addEventListener("click", () => findUserUsingFilterMethod(getSearchValue()));


const userDb = [
    {
        id: 1234,
        name: "Sabine"
    },
    {
        id: 2345,
        name: "Nina"
    },
    {
        id: 5145,
        name: "Aladin"
    },
    {
        id: 1924,
        name: "Heidi"
    }];


function addUser() {
    let newUser = {};
    newUser.id = Number(prompt("Enter user ID number:"));
    newUser.name = prompt("Choose a username:");
    userDb.push(newUser);
    console.log(userDb);
}

function undoLastAddUser() {
    const deleteUser = userDb.pop();
    console.log(deleteUser);
    console.log(userDb);
}

function getSearchValue() {
    return prompt("Enter a search parameter!");
}

function findUserByName(userName) {
    const searchValue = userName.toLowerCase()
    const foundUser = userDb.find(userDbEntry => userDbEntry.name.toLowerCase().includes(searchValue));
    console.log(foundUser);
}

function searchDb(searchValue) {
    const results = userDb.filter(userDbEntry => {
        const objectValues = Object.values(userDbEntry)
        return objectValues.find(value => (value + "").toLowerCase().includes(searchValue.toLowerCase()));
    });
    console.log("Results: ", results)
}



