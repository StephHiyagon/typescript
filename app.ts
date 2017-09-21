interface Student {
  name : string;
  mobile: number;
}

class Person implements Student {
  name: string;
  mobile:number;

  constructor(nombre:string, celular:number){
    this.name = nombre;
    this.mobile = celular;
  }

  getInfo(){
    document.body.innerHTML = `Mi nombre es ${this.name} y mi celular es ${this.mobile}`
  }
}

var Rita = new Person ('Rita', 958958654);
Rita.getInfo();
