const grades = [99, 80, 70, 90, 85];
//find the first grade that is less than 80
const firstLowGrade = grades.find((grade) => grade < 80);
console.log(firstLowGrade); // 70

//find the index of the forst grade that is over 80
const firstHighGradeIndex = grades.findIndex((grade) => grade > 80);
console.log(firstHighGradeIndex); // 0