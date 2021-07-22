export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    pick_one: string[];
}

export interface Quizz {
    numberOfQuestions: string;
    category: string;
    difficulty: string;
    type: string;
}