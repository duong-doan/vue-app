const LocalStorage = () => {
    const getLocalStorage = (name) => {
        return JSON.parse(localStorage.getItem(name))
    }

    const setLocalStorage = (name, item) => {
        return localStorage.setItem(name, JSON.stringify(item))
    }

    return {
        getLocalStorage,
        setLocalStorage
    }
}

export default LocalStorage