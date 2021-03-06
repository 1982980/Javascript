const is_array = function (input) {
  return Array.isArray(input);
};

//этот вариант у меня не работает
var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
