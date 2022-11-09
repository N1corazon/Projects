export default class ColorSwitch{

    color(){//creates an array with six values
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

        let colorCom = [];
        for (let i = 0; i < 6; i++){
            let number = Math.floor(Math.random()*16);
            colorCom[i] = hex[number];
        }
        return colorCom;
    }

    colorToSting(){//turns array to a string
        let str = this.color().join("");
        console.log(str);
        return str;
    }


}