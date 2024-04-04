// Controller

updateClockMilitary();
setInterval(updateClockMilitary, 1000);

function updateClockMilitary() {

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    model.timeString = `${hours}:${minutes}:${seconds}`;

    updateView();
};


/* updateClockMeridiem();
setInterval(updateClockMeridiem, 1000);

function updateClockMeridiem() {

    const now = new Date();

    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    model.timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    updateView();
}; */


