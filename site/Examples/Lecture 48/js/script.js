function Circle (radius){
  this.radius = radius;
}

Circle.prototype.getArea = function() {
  return Math.PI * Math.pow(this.radius,2);
  };

 var myCircle = new Circle(10);
 console.log (myCircle);
  var myCircle2 = new Circle(20);
 console.log (myCircle2);