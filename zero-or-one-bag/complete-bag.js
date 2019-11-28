let capa = [3,2,2,5,9];//所占容量
let n = capa.length;
let value = [6,3,5,4,20];//所拥有的价值
let sum = 12;
let bag = [];
let counti = [];
let countj = [];
let countjcapa = [];
let count = 0;
for(let w = 0;w<=sum;w++){
    bag[w] = 0;
}
for(let i=0;i<=n;i++){
    for(let j=0;j<=sum;j++){
        if(j>=capa[i] && bag[j]<bag[j-capa[i]]+value[i]){
            bag[j] = bag[j-capa[i]]+value[i];
            //console.log(bag[j]);
            counti[count] = i;
            countj[count] = j;
            countjcapa[count] = j-capa[i];
            count++;
        }
    }
}
console.log(count);
console.log(counti);
console.log(countj);
console.log(countjcapa);
console.log(bag[sum]);