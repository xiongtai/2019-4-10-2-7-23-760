const ParkFeesPreMinute = 0.25;

module.exports = function main(inputs) {
    // write your code here...
    var distanceFees = calculateDistanceFees(inputs.distance);
    var parkFees = calculateParkFees(inputs.parkTime);
    var totalFees = distanceFees + parkFees;
    return Math.round(totalFees);
};

function calculateDistanceFees(distance) {
    if (distance > 0 && distance <= 2)
        return 6;
    if (distance > 2 && distance < 8)
        return 6 + (distance - 2) * 0.8;
    if (distance > 8)
        return 6 + 6 * 0.8 + (distance - 8) * 0.8 * (1 + 0.5);
}

function calculateParkFees(parkTime) {
    return parkTime * ParkFeesPreMinute;
}
