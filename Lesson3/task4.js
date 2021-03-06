const last =  function(array, n) {
  if (array == null)
  return void 0;
if (n == null)
  return array[array.length-1];
if (n < 0)
  return [];
return array.slice(0, - n);
};

// дальше не понял

