(function (window) {
  var chaitanyaGreeter = {};
  chaitanyaGreeter.name = "Chaitanya";
  var greeting = "Hello ";
  chaitanyaGreeter.sayHello = function () {
    console.log(greeting + chaitanyaGreeter.name);
  }

  window.chaitanyaGreeter = chaitanyaGreeter;

})(window);
