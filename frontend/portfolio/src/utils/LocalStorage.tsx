const SetLocalStorage = (key: string, value: string) => {
  const storage = localStorage.setItem(key, value)
  return storage
}

const GetLocalStorage = (key: string) => {
  const storage = localStorage.getItem(key)
  return storage
}

const RemoveLocalStorage = (key: string) => {
  const storage = localStorage.removeItem(key)
  return storage
}

export { 
  SetLocalStorage,
  GetLocalStorage,
  RemoveLocalStorage,
}