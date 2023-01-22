
export function loadData(key){
    try {
        let temp = JSON.parse(localStorage.getItem(key))
        return temp
    } catch (error) {
        return undefined
    }
}

export function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}
export function deleteData(key){
    localStorage.removeItem(key)

}