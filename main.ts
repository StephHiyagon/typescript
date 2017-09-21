interface Shape {
  area(): number;
}

class PrintArea {

    static print(shape: Shape){
      console.log('Esta es el area: ' + shape.area())
    }
}

class Rectangle implements Shape {

  constructor(protected height: number, protected base: number) { }

  area() {
    return this.base * this.height;
  }
}

class Square extends Rectangle {

  constructor(private lado: number) {
    super(lado, lado);
  }
}


class Circle implements Shape {

  constructor(private radio: number) { }

  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

var circulo1 = new Circle(5);
console.log(circulo1.area());
var rect1= new Rectangle(4,6);
console.log(rect1.area());
var cuadr1= new Square(8);
console.log(cuadr1.area());
PrintArea.print(circulo1);
