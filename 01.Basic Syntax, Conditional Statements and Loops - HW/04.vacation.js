
function solve(people, type, dayOfWeek) {
    let pricePerPerson = 0;
    let totalPrice = 0;

    switch (type) {
        case "Students":
            if(dayOfWeek === "Friday"){
                pricePerPerson = 8.45;
            }
            else if (dayOfWeek === "Saturday") {
                pricePerPerson = 9.80;
            }
            else if (dayOfWeek === "Sunday") {
                pricePerPerson = 10.46;
            }

            totalPrice = people*pricePerPerson;

            if(people >= 30){
                totalPrice *= 0.85;
            }
            break;

        case "Business":
            if(dayOfWeek === "Friday"){
                pricePerPerson = 10.90;
            }
            else if (dayOfWeek === "Saturday") {
                pricePerPerson = 15.60;
            }
            else if (dayOfWeek === "Sunday") {
                pricePerPerson = 16;
            }

            totalPrice = people*pricePerPerson;

            if(people >= 100){
                totalPrice = (people-10)*pricePerPerson;
            }
            break;

        case "Regular":
            if(dayOfWeek === "Friday"){
                pricePerPerson = 15;
            }
            else if (dayOfWeek === "Saturday") {
                pricePerPerson = 20;
            }
            else if (dayOfWeek === "Sunday") {
                pricePerPerson = 22.50;
            }

            totalPrice = people*pricePerPerson;

            if(people >= 10 && people <= 20){
                totalPrice *= 0.95;
            }
            break;

        default:
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
// Total price: 266.73

solve(40, "Regular", "Saturday");
// Total price: 800.00