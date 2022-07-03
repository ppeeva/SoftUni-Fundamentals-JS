function createEmployees(input){
    let employees = [];

    for(let name of input){
        let employee = { name: name, number: name.length};
        employees.push(employee);
    }

    for(let employee of employees){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

createEmployees([
    'Silas Butler',    
    'Adnaan Buckley',    
    'Juan Peterson',    
    'Brendan Villarreal']);
/*
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18
*/

console.log('-------------------');

createEmployees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland']);
/*
Name: Samuel Jackson -- Personal Number: 14
Name: Will Smith -- Personal Number: 10
Name: Bruce Willis -- Personal Number: 12
Name: Tom Holland -- Personal Number: 11
*/