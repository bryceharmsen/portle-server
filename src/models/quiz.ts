export interface Quiz {
    answer: string;
    imagePath: string;
}

export interface QuizByDate {
    [date: string]: Quiz;
}

export const quizzes: QuizByDate = {
    "2025-07-06": {
        answer: "Glisan Street",
        imagePath: "public/assets/portland_Glisan.png",
    },
    "2025-07-07": {
        answer: "33rd Ave",
        imagePath: "public/assets/portland_33rdAve.png",
    },
    "2025-07-08": {
        answer: "I-84",
        imagePath: "public/assets/portland_I-84.png",
    },
    "2025-07-09": {
        answer: "Lombard",
        imagePath: "public/assets/portland_Lombard.png",
    },
};