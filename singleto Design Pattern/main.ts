class Singleton{
    static _instance :Singleton;
    data:string;
    constructor(d:string)
    {
        this.data=d; 
    }
    static getInstance(d:string)
    {
         if(Singleton._instance==null)
         {
            Singleton._instance=new Singleton(d);
         }
         return Singleton._instance;
    }
}

const first=Singleton.getInstance("data");
console.log(first.data);
const second=Singleton.getInstance("data two");
console.log(second.data);

console.log(first===second);


