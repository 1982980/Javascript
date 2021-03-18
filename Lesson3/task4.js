const last =  function(array, n) {
if (!n)
  return array[array.length-1];
if (n < 0)
  return [];
return array.slice(0, - n);
};

// дальше не понял
const last =  function(array, n) {
if (!n)
  return array.slice(-1);
if (n < 0)
  return [];
return array.slice(-n);
};

