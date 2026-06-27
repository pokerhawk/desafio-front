export const getCache = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const setCache = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
