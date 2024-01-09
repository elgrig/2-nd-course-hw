function checkSeason(userNumber) {
    userNumber = Number(prompt('Введите номер месяца'));
    if (userNumber >= 1 && userNumber <=2 || userNumber === 12) {
        alert('Зима');
        console.log('Зима');
    } else if (userNumber >= 3 && userNumber <= 5) {
        alert('Весна');
        console.log('Весна');
    } else if (userNumber >= 6 && userNumber <= 8) {
        alert('Лето');
        console.log('Лето');
    } else if (userNumber >= 9 && userNumber <= 11) {
        alert('Осень');
        console.log('Осень');
    } else {
        alert('game over. Попробуйте ещё раз!');
        console.log('game over. Попробуйте ещё раз!');
    }
}
