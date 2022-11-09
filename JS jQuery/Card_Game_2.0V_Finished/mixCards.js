export default class MixCards {
    dimension(a, b) {
        if ((a * b) % 2 === 0) {
            if (a < 2) {
                a = 2;
            }
            if ((b = b || 0) < 2) {
                b = a;
            }
            let cards = new Array(a).fill(null);

            for (let i = 0; i < cards.length; i++) {
                cards[i] = new Array(b).fill(null);
            }
            return [cards, a, b];
        }
    }

    // mixCards(array) {
    //     let cards = array[0];
    //     let answers = array[0];
    //     let a, b, i = 0, k = 1;
    //     while (this.searchArray(cards) && this.searchArray(answers)) {
    //         console.log(questions[i]);
    //
    //         a = Math.floor(Math.random() * array[1]);
    //         b = Math.floor(Math.random() * array[2]);
    //         if (cards[a][b] === null && answers[a][b] === null) {
    //             cards[a][b] = questions[i][0];
    //             answers[a][b] = questions[i][1];
    //
    //
    //             i++;
    //         }
    //
    //     }
    //     console.log(answers);
    //     console.log(cards);
    //     return [cards, answers];
    //     // return questions;
    // }

    mixCards(array) {
        let cards = [], j = 0, answers = array[0], l = [], o = 0, n, a, b = [], i = 0, k = 1;
        let questions = [["What do cows drink?", "Water"], ["What are icebergs made of?", "Water"], ["What do carnivorous dinosaurs eat?", "Meat"], ["What dont elephants eat?", "Meat"], ["What does earth revolve around", "The sun"], ["What our planet cant live without?", "The sun"], ["What is one of the things that can destroy a forest", "Fire"], ["What is one of the most important discoveries of humanity?", "Fire"], ["How many planets can be found in our solar system?", "8"], ["Square of 64", "8"], ["6 * 0 = ?", "0"], ["(2 + 4) * 0 = ?", "0"], ["5 + 3 -1 = ?", "7"], ["2 + 2 + 3 = ?", "7"], ["6 * 2 = ?", "12"], ["5 * 2 + 2 = ?", "12"], ["4 + 1 = ?", "5"], ["3 + 2 = ?", "5"], ["3 * 3 = ?", "9"], ["4 + 5 = ?", "9"], ["3 * 2 = ?", "6"], ["3 + 3 = ?", "6"], ["5 * 2 = ?", "10"], ["20 - 10 = ?", "10"], ["13 - 2 = ?", "11"], ["15 - 4 = ?", "11"], ["13 + 6 = ?", "19"], ["8 + 11 = ?", "19"], ["15 + 3 = ?", "18"], ["9 + 9 = ?", "18"], ["15 + 8 = ?", "23"], ["21 + 2 = ?", "23"], ["23 * 2 = ?", "46"], ["20 * 2 + 6 = ?", "46"], ["10 * 5 = ?", "50"], ["12 * 4 + 2 = ?", "50"]];

        while (o < array[1] * array[2]) {
            n = Math.floor(Math.random() * questions.length);
            if (!l.includes(n)) {
                if (n % 2 === 0) {
                    cards.push(questions[n]);
                    cards.push(questions[n + 1]);
                    o = o + 2;
                    l.push(n);
                    l.push(n + 1);
                } else {
                    cards.push(questions[n]);
                    cards.push(questions[n - 1]);
                    o = o + 2;
                    l.push(n);
                    l.push(n - 1);
                }
            }
        }
        for (let i = 0; i < answers.length; i++) {
            for (let k = 0; k < answers[i].length; k++) {
                while (answers[i][k] === null) {
                    a = Math.floor(Math.random() * (array[1] * array[2]));
                    if (!b.includes(a)) {
                        answers[i][k] = cards[a];
                        b.push(a);

                    }
                }
            }
        }

        return answers;
    }

    searchArray(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes(null) || array[i].includes(undefined)) {
                return true;
            }
        }
        return false;
    }


}
