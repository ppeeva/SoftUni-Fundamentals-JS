function solve(input) {
    input = input.map(Number);
    let employee1Efficiency = input[0];
    let employee2Efficiency = input[1];
    let employee3Efficiency = input[2];
    let studentsCount = input[3];

    let studentsPerHour = employee1Efficiency + employee2Efficiency + employee3Efficiency;
    let neededHours = studentsPerHour > 0 ? Math.ceil(studentsCount / studentsPerHour) : 0;
    let breaksCount = Math.floor(neededHours / 3);

    if (neededHours > 0 && breaksCount > 0 && neededHours % 3 == 0) {
        breaksCount--;
    }

    let totalHours = neededHours + breaksCount;
    console.log(`Time needed: ${totalHours}h.`);
}

solve(['0', '0', '0', '0']);
//Time needed: 0h.

solve(['5', '6', '4', '20']);
//Time needed: 2h.

solve(['1', '2', '3', '45']);
//Time needed: 10h.

solve(['3', '2', '5', '40']);
//Time needed: 5h.