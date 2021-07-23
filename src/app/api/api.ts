export interface Question {
    id: number;
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Quizz {
    numberOfQuestions: string;
    category: string;
    difficulty: string;
    type: string;
}