import * as fs from 'fs'

let fileContent: string | undefined;
const filePath = './data1.txt';
try{
const data = fs.readFileSync(filePath,'utf-8');
fileContent = data
console.log('File content:', fileContent);
}catch(error){
    console.error('Error reading the file:', error);
}

function compareNumbers(a:number, b:number) {
    return a - b;
  }

const convertData = (data:string) => {
    let leftSide:number[] = [];
    let rightSide:number[] = [];
    let distances:number[] = [];
const splitByLine = data.split(/\r?\n/);
const splitByColumn = splitByLine.map((x) => x.split(" "))
splitByColumn.forEach((x) => {
    leftSide.push(Number(x[0]));
    rightSide.push(Number(x[3]))}
)

    const sortedLeft = leftSide.sort(compareNumbers)
    const sortedRight = rightSide.sort(compareNumbers)

    sortedLeft.map((x, i) => {
        if(sortedRight[i] > x){
        const distanceValue = sortedRight[i] -x;
        distances.push(distanceValue);
    }if(sortedRight[i] < x){
        const distanceValue = x - sortedRight[i];
        distances.push(distanceValue);  
    }
    })

    const outcome = distances.reduce((prev, curr)=>prev + curr,0)

return {splitByColumn, sortedLeft, sortedRight, distances, outcome};
};

console.log(convertData(fileContent))