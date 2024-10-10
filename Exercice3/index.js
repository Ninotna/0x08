function calculateAverage(numbers)
{
    if (!numbers || numbers.length === 0)
    {
        return "No numbers to calculate average";
    }

    let sum = 0;
    for (const num of numbers)
    {
        sum += num;
    }

    return (sum / numbers.length);
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
