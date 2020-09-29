module.exports = function each(obj, fn) {
  return Object.keys(obj).forEach((key) => {
    const value = obj[key];
    return fn(key, value);
  });
};
