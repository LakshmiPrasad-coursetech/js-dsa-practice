const scores = [10, 20, 30, 40, 50];

const logScore = (score) => console.log("Score over 40:,", score);

scores.forEach((elements) => {
    if (elements > 40) {
        logScore(elements);
    }
    }
    
);