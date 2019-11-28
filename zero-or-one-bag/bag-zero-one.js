let capa = [3,2,2,5,9];//所占容量
let n = capa.length;
let value = [6,3,5,4,36];//所拥有的价值
let sum = 12;//包的总容量
let bag = [];
let counti = [];
let countj = [];
let countjcapa = [];
let count = 0;
for(let w = 0;w<=sum;w++){
    bag[w] = 0;
}
let idName = [];
let equleId = [];
for(let i=0;i<n;i++){
    switch(i){
        case 0:idName[i] = "#objOne";break;
        case 1:idName[i] = "#objTwo";break;
        case 2:idName[i] = "#objThree";break;
        case 3:idName[i] = "#objFour";break;
        case 4:idName[i] = "#objFive";break;
    }
    $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]);
}
//主要函数，求价值最大化的函数
$("#zero-one").click(function(){
    for(let i = 0;i<=n;i++){
        for(let j = sum;j>=0;j--){
            if(bag[j]<bag[j-capa[i]]+value[i] && j>=capa[i]){
                bag[j] = bag[j-capa[i]]+value[i];
                counti[count] = i;
                countj[count] = j;
                countjcapa[count] = j-capa[i];
                count++;
            }
        }
    }
    console.log(bag[sum]);
    let m = count;
    let record = [];
    let a = 0;
    let temp = sum;
    while(m>=0){
        if(countj[m] === temp){
            temp = countjcapa[m];
            record[a++] = counti[m];
        }
        m--;
    }
    console.log(record);
    for(let i=0;i<record.length;i++){
        equleId[i] = idName[record[i]];
    }
    console.log(equleId);
    $(document).ready(function(){
        $("#zero-one").dblclick(function(){
            let i = record.length - 1;
            while(i>=0){
                $(equleId[i]).animate({top:"500px"},"slow");
                i--;
            }
            $("#zero-one").text("01背包，装下的物品的总价值最大为"+bag[sum]);
        });
    });
})
$("#complete-bag").click(function(){
    for(let i = 0;i<=n;i++){
        for(let j = 0;j<=sum;j++){
            if(bag[j]<bag[j-capa[i]]+value[i] && j>=capa[i]){
                bag[j] = bag[j-capa[i]]+value[i];
                counti[count] = i;
                countj[count] = j;
                countjcapa[count] = j-capa[i];
                count++;
            }
        }
    }
    console.log(bag[sum]);
    let m = count;
    let record = [];
    let a = 0;
    let temp = sum;
    while(m>=0){
        if(countj[m] === temp){
            temp = countjcapa[m];
            record[a++] = counti[m];
        }
        m--;
    }
    console.log(record);
    for(let i=0;i<record.length;i++){
        equleId[i] = idName[record[i]];
    }
    console.log(equleId);
    $(document).ready(function(){
        $("#complete-bag").dblclick(function(){
            let i = record.length - 1;
            while(i>=0){
                $(equleId[i]).animate({top:"500px"},"slow");
                i--;
            }
            $("#complete-bag").text("完全背包，装下的物品的总价值最大为"+bag[sum]);
        });
    });
})


