let capa = [];//所占容量
let sum = 12;//包的总容量
let bag = [];
let counti = [];
let countj = [];
let countjcapa = [];
let count;
for(let w = 0;w<=sum;w++){
    bag[w] = 0;
}
let idName = [];
let equleId = [];
let value = [];//所拥有的价值
let number = [];//所含物品的个数
function submitbtn(){
    for(let i=1;i<=5;i++){
        capa[i-1] = Number($("#capa"+i).val());
    }
    for(let i=1;i<=5;i++){
        value[i-1] = Number($("#val"+i).val());
    }
    for(let i=1;i<=5;i++){
        number[i-1] = Number($("#num"+i).val());
    }
    for(let i=0;i<capa.length;i++){
        switch(i){
            case 0:idName[i] = "#objOne";break;
            case 1:idName[i] = "#objTwo";break;
            case 2:idName[i] = "#objThree";break;
            case 3:idName[i] = "#objFour";break;
            case 4:idName[i] = "#objFive";break;
        }
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]);
    }
}
function ZeroOne_Pack(cost,weight,n){
    for(let i=n; i>=cost; i--)
        dp[i] = Math.max(dp[i],dp[i-cost] + weight);
}
void Complete_Pack(cost,weight,n)//把完全背包封装成函数
{
    for(let i=cost; i<=n; i++)
        dp[i] = Math.max(dp[i],dp[i-cost] + weight);
}
//封装
var bagValue = {
    zeroOne : function(){
        count = 0;
        for(let i = 0;i<=capa.length;i++){
            for(let j = sum;j>=0;j--){
                if(bag[j]<=bag[j-capa[i]]+value[i] && j>=capa[i]){
                    bag[j] = bag[j-capa[i]]+value[i];
                    counti[count] = i;
                    countj[count] = j;
                    countjcapa[count] = j-capa[i];
                    count++;
                }
            }
        }
        console.log(bag);
        console.log("max"+bag[sum]);
    },
    compleBag : function(){
        count = 0;
        for(let i=0;i<=capa.length;i++){
            for(let j=0;j<=sum;j++){
                if(j>=capa[i] && bag[j]<bag[j-capa[i]]+value[i]){
                    bag[j] = bag[j-capa[i]]+value[i];
                    counti[count] = i;
                    countj[count] = j;
                    countjcapa[count] = j-capa[i];
                    count++;
                }
            }
        }
        console.log(bag);
        console.log("max"+bag[sum]);
    },
    multiBag : function(){
        count = 0;
        for(let i=0;i<capa.length;i++){
            if(sum<=number[i]*capa[i]){
                Complete_Pack(capa[i],value[i],sum); 
            }
            else{
                    let k = 1;
                    while(k < number[i]){
                        ZeroOne_Pack(k*capa[i],k*value[i],sum);
                        number[i] -= k;
                        
                    }
                    ZeroOne_Pack(num[i]*c[i],num[i]*w[i],m);
                }
        }
    }
}
let record = [];
let a = 0;
function move(){
    a = 0;
    let m = count;

    let temp = sum;
    while(m>=0){
        if(countj[m] === temp){
            temp = countjcapa[m];
            record[a++] = counti[m];
        }
        m--;
    }
    for(let i=0;i<a;i++){
        equleId[i] = idName[record[i]];
    }
    let i = a - 1;
    while(i>=0){
        $(equleId[i]).animate({top:"400px"},"slow");
        i--;
    }
}
//复原
function recovery(){
    console.log(record);
    let i = a - 1;
    while(i>=0){
        $(equleId[i]).animate({top:"0px"},"slow");
        i--;
    }  
}
//调用
$("#zero-one").click(function(){
    bagValue.zeroOne();
    move();
    $("#bag-area").text("01背包，装下的物品的总价值最大为"+bag[sum]);
    for(let w = 0;w<=sum;w++){
        bag[w] = 0;
    }
})
$("#complete-bag").click(function(){
    bagValue.compleBag();
    move();
    $("#bag-area").text("完全背包，装下的物品的总价值最大为"+bag[sum]);
    for(let w = 0;w<=sum;w++){
        bag[w] = 0;
    }
})
$("#recover").click(function(){
    recovery();
})