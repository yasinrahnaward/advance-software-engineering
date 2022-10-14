
import Employee from './IEmployee'
import Contractor from './IContractor'

import ContractorAdapter from './ContractorAdapter'

const employee1 =new Employee({yearsWorked:5})
const employee2 =new Employee({yearsWorked:10})
const contractor1=new Contractor({HoursWorked:2080*3})
const employee3 =new ContractorAdapter(contractor1)


const emplyeeList:Employee[]=[
    new Employee({yearsWorked:5}),
    employee2,
    employee3
]

console.log(employee3 instanceof Employee)