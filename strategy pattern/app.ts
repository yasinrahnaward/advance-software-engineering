// interface

interface Fly {
  fly(): void;
}

interface Quick {
  quick(): void;
}
// // class
class nofly implements Fly {
  fly(): void {
    console.log("I can not fly");
  }
}

class fly implements Fly {
  fly(): void {
    console.log(" I can fly");
  }
}
class quick implements Quick {
  quick(): void {
    console.log(" I can quick");
  }
}
class noquick implements Quick {
  quick(): void {
    console.log("I have not quick");
  }
}
// injection
class duckbehavior {
  flyable: Fly;
  quickable: Quick;

  setfly(fly: Fly): void {
    this.flyable = fly;
  }

  setquick(quick: Quick): void {
    this.quickable = quick;
  }
  performfly(): void {
    this.flyable.fly();
  }
  performquick(): void {
    this.quickable.quick();
  }
}

let duckone = new duckbehavior();
duckone.setfly(new fly());
duckone.setquick(new noquick());
duckone.performfly();
duckone.performquick();
let ducktwo = new duckbehavior();
ducktwo.setfly(new nofly());
ducktwo.setquick(new quick());
ducktwo.performfly();
ducktwo.performquick();
