const average = {
    name: 'average',
    avgOfFiveNumb(){
        let sum=0;
        for (let i=0; i<5; i++) {
            sum+=i;
            console.log(sum);
            var result=sum/5;
        }
        return this.result;
    }
}

const claculate = {
    name: 'calculate',
    res:this.result
    }
average.avgOfFiveNumb.call(claculate)