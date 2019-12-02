let capa = [3,2,2,5,6];//所占容量
let n = capa.length;
let value = [6,3,5,4,20];//所拥有的价值
let number = [5,3,2,4,1];
let sum = 40;
let bag = [];
let counti = [];
let countj = [];
let countjcapa = [];
let count = 0;
let index = -1;
let lst = {
    capacity : Array(),
    valueBag : Array(),
    numBag : Array()
};
let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
for(let w = 0;w<=sum;w++){
    bag[w] = 0;
}
for(let i=0;i<capa.length;i++){
    let c = 1;
    while(number[i]-c > 0){
        number[i] -= c;
        lst.capacity[++index] = c*capa[i];
        lst.valueBag[index] = c*value[i];
        lst.numBag[index] = i;
        c *= 2;
    }
    lst.capacity[++index] = number[i]*capa[i];
    lst.valueBag[index] = number[i]*value[i];
    lst.numBag[index] = i;
}
console.log(lst);
console.log(index);
for(let i = 0;i<=index;i++){
    for(let j = sum;j>=0;j--){
        if(bag[j]<=bag[j-lst.capacity[i]]+lst.valueBag[i] && j>=lst.capacity[i]){
            bag[j] = bag[j-lst.capacity[i]]+lst.valueBag[i];
            counti[count] = i;
            countj[count] = j;
            countjcapa[count] = j-lst.capacity[i];
            count++;
        }
    }
}
console.log(bag);
console.log("max"+bag[sum]);
let record = [];
let a = 0;
    let m = count;
    let temp = sum;
    while(m>=0){
        if(countj[m] === temp){
            temp = countjcapa[m];
            record[a++] = counti[m];
        }
        m--;
    }
console.log(record);
let culmul = [];
let b = [];
for(let i=0;i<a;i++){
    b[i] =  lst.numBag[  record[i]  ];
}
for(let i=0;i<a;i++){
    culmul[i] = counts(b,i);
}
console.log(b);
console.log(culmul);
