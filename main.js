var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrintArea = /** @class */ (function () {
    function PrintArea() {
    }
    PrintArea.print = function (shape) {
        console.log('Esta es el area: ' + shape.area());
    };
    return PrintArea;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(height, base) {
        this.height = height;
        this.base = base;
    }
    Rectangle.prototype.area = function () {
        return this.base * this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(lado) {
        var _this = _super.call(this, lado, lado) || this;
        _this.lado = lado;
        return _this;
    }
    return Square;
}(Rectangle));
var Circle = /** @class */ (function () {
    function Circle(radio) {
        this.radio = radio;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    return Circle;
}());
var circulo1 = new Circle(5);
console.log(circulo1.area());
var rect1 = new Rectangle(4, 6);
console.log(rect1.area());
var cuadr1 = new Square(8);
console.log(cuadr1.area());
PrintArea.print(circulo1);
