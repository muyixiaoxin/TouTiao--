export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    console.log(err, '转换失败')

    return data
  }
}
export const setItem = (name, value) => {
  const data = typeof value === 'object' ? JSON.stringify(value) : value
  window.localStorage.setItem(name, data)
}
export const removeItem = name => {
  return window.localStorage.removeItem(name)
}
