export async function getUsersSaved(key) {
  const myUsers = await localStorage.getItem(key);

  let usersSaved = JSON.parse(myUsers) || [];

  return usersSaved;
}

export async function saveUsers(key, newUser) {
  let usersStored = await getUsersSaved(key);

  const userAlreadyExist = usersStored.some((user) => user.id === newUser.id);

  if (userAlreadyExist) {
    console.log("Usuário já cadastrado!");
    return;
  }

  usersStored.push(newUser);

  await localStorage.setItem(key, JSON.stringify(usersStored));
  console.log("Usuário cadastrado com sucesso!");
}
