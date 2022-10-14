interface IContractor{
    getHoursWorked():number;
}

class Contractor implements IContractor{
    private HoursWorked:number;
    constructor(metaData:{HoursWorked:number}){
        this.HoursWorked=metaData.HoursWorked;
    }
    getHoursWorked(): number {
        return this.HoursWorked;
    }
    
}
export default Contractor
