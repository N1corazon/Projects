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

    mixCards(array) {
        let cards = array[0];
        let i = 1;

        while (this.searchArray(cards)) {
            let k = 0;
            while (k < 2) {
                let a = Math.floor(Math.random() * array[1]);
                let b = Math.floor(Math.random() * array[2]);
                if (cards[a][b] === null) {
                    cards[a][b] = i;
                    k++;
                }
            }
            i++;
        }
        return cards;
    }

    searchArray(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes(null)) {
                return true;
            }
        }
    }




}
