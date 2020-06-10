//add buttons
const addUserButton = document.getElementById("addUserButton");
addUserButton.addEventListener("click", () => addUser());

const undoUserButton = document.getElementById("undoUser");
undoUserButton.addEventListener("click", () => undoLastAddUser());

const findUsernameButton = document.getElementById("findUsernameButton");
findUsernameButton.addEventListener("click", () => findUserByName(getSearchValue()));

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => searchDb(getSearchValue()));

const userNameInput = document.getElementById("userNameInput");
const userIdInput = document.getElementById("userIdInput");
const userSubscribe = document.getElementById("userSubscribe");



// const findUserUsingFilterMethodButton = document.getElementById("findUserUsingFilterMethod");
// findUserUsingFilterMethodButton.addEventListener("click", () => findUserUsingFilterMethod(getSearchValue()));


const userDb = [
    {
        id: 1234,
        name: "Sabine",
        subscribed: true
    },
    {
        id: 2345,
        name: "Nina",
        subscribed: true
    },
    {
        id: 5145,
        name: "Aladin",
        subscribed: false
    },
    {
        id: 1924,
        name: "Heidi",
        subscribed: false
    }];


function addUser() {
    let newUser = {};
    newUser.id = Number(userIdInput.value);
    newUser.name = userNameInput.value;

    userNameInput.value = "";
    userIdInput.value = "";
    newUser.subscribed = userSubscribe.checked;

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
        return objectValues.find(value =>  valueMatchesSearchString(value, searchValue));
    });
    console.log("Results: ", results)
}

function valueMatchesSearchString(value, searchString) {
    const convertedValue = value.toString().toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();
    return convertedValue.includes(lowerCaseSearchString);
}





/*function findUserIdsByName() {
    const name = getSearchValue();
    const array = userDb.filter(userDbEntry => userDbEntry.name.toLowerCase() === name.toLowerCase());
    const id = array.map(name => name.id);
    console.log(id);
    alert(id);
} */


