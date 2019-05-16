module.exports.gradeConvert = (grade) => {
    switch (grade) {
        case '12':
            return 'A';
        case '10':
            return 'B';
        case '7':
            return 'C';
        case '4':
            return 'D';
        case '02':
            return 'E';
        case '00':
            return 'Fx';
        case '-3':
            return 'F';
        default:
            return 'Invalid grade';
    }
}