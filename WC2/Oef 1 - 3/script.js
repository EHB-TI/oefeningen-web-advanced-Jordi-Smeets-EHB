'use-strict'

let color ={
    nR:0,
    nG:0,
    nB:0,
    showColor() {
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`);

    },
    setColor(r,g,b){
        if (r>=0 && r <=255 && g>=0 && g <=255 && b>=0 && b <=255 )
        {
            console.log('success');
            this.nR = r;
            this.nG = g;
            this.nB = b;
            this.showColor();
        }
        else{
            console.log('geef geldige waarden in')

        }

    }

};

const red=prompt('Enter R-value')
const blue=prompt('Enter B-value')
const green=prompt('Enter G-value')

color.setColor(red,blue,green)