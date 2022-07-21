function printCompanies(input) {
    let companies = {};

    for (let line of input) {
        let [company, employee] = line.split(' -> ');

        if (companies.hasOwnProperty(company) == false) {
            companies[company] = new Set();
        }

        companies[company].add(employee);
    }

    for (let company of Object.keys(companies).sort()) {
        console.log(company);
        for (let employee of companies[company]) {
            console.log('--', employee);
        }
    }
}

printCompanies([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);

/*
HP 
-- BB12345 
Microsoft 
-- CC12345 
SoftUni 
-- AA12345 
-- BB12345
*/

printCompanies([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);

/*
Lenovo 
-- XX23456 
Movement 
-- DD11111 
SoftUni 
-- AA12345 
-- CC12344
*/