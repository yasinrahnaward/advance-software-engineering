interface IEmployee{
    getYearsWorked():number;
}
class Employee implements IEmployee{
    private yearsWorked:number;
    constructor(metaDaata:{yearsWorked:number}){
        this.yearsWorked=metaDaata.yearsWorked;
    }
    getYearsWorked(): number {
        return this.yearsWorked;
    }
    
}
export default Employee