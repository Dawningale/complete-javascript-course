switch (day) {
    //switch -> strict comparisions
    case 'monday':
        console.log("Crying");
        console.log("Bitch");
        break;
    case 'tuesday':
        console.log("Survive");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Thrive');
        break;
    case 'friday':
    case 'saturday':
        //multiple cases count as OR-function
        console.log('Party');
        break;
    case 'sunday':
        console.log("Start crying");
        break;
    default:
        console.log("wrong input");
}

const currentDay = 'Thursday';

if (currentDay === 'Monday') {
    console.log();
} else if (currentDay === 'Tuesday') {
    console.log();
} else if (currentDay === 'Wednesday' || currentDay === 'Thursday') {
    console.log();
} else if (currentDay === 'Friday' || currentDay === 'Saturday') {
    console.log();
} else if (currentDay === 'Sunday') {
    console.log();
} else {
    console.log();
}