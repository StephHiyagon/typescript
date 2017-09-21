var Person = /** @class */ (function () {
    function Person(nombre, celular) {
        this.name = nombre;
        this.mobile = celular;
    }
    Person.prototype.getInfo = function () {
        document.body.innerHTML = "Mi nombre es " + this.name + " y mi celular es " + this.mobile;
    };
    return Person;
}());
var Rita = new Person('Rita', 958958654);
Rita.getInfo();
