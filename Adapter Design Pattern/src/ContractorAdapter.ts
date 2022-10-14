import Employee from './IEmployee'
import Contractor from './IContractor'

class ContractorAdapter extends Employee{

    constructor(contractor:Contractor){
        super({yearsWorked:contractor.getHoursWorked()/2080})

    }

}

export default ContractorAdapter  