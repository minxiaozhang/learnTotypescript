
class Hello {
  private  _name:string;

    tell(){
        return this.name;
    }
    get name():string{
        return this._name
    }
    set name(newname:string) {
       this._name=newname
    }
}

var  h=new Hello();
h.name="csdf"
alert(h.tell())
