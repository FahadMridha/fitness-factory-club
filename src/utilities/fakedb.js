const addToDb = value => {
    localStorage.setItem("time", JSON.stringify(value))
}
const displayUi = () => {
    let getStoratedItem = localStorage.getItem("time")
    if (getStoratedItem) {
        getStoratedItem = JSON.parse(getStoratedItem)
    }
    return getStoratedItem
}
export {
    addToDb,
    displayUi
}