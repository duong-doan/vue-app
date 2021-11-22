const useLocalStorage = () => {
  const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
  };

  const setLocalStorage = (name, item) => {
    return localStorage.setItem(name, JSON.stringify(item));
  };

  const removeLocalStorage = (name) => {
    return localStorage.removeItem(name);
  };

  return {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
  };
};

export default useLocalStorage;
