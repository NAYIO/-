let capa = [];//所占容量
let sum;//包的总容量
let bag = [];
let counti = [];
let countj = [];
let countjcapa = [];
let count;
let idName = [];
let equleId = [];
let value = [];//所拥有的价值
let number = [];//所含物品的个数
let index;
let lst = {
    capacity : Array(),
    valueBag : Array(),
    numBag : Array(),
};
let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);//找出某数字在数组里出现的次数
//确定按钮
function submitbtn(){
    sum = Number($("#summ").val());
    console.log("sum"+sum);
    for(let i=1;i<=5;i++){
        capa[i-1] = Number($("#capa"+i).val());
    }
    for(let i=1;i<=5;i++){
        value[i-1] = Number($("#val"+i).val());
    }
    for(let i=1;i<=5;i++){
        number[i-1] = Number($("#num"+i).val());
    }
    //console.log(number);
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
//封装
var bagValue = {
    zeroOne : function(){
        count = 0;
        console.log("suma  "+sum);
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
        //console.log(bag);
        //console.log("max"+bag[sum]);
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
        //console.log(bag);
        //console.log("max"+bag[sum]);
    },
    multiBag : function(){
        count = 0;
        index = -1;
        let num = [];
        for(let i=0;i<capa.length;i++){
            num[i] = number[i];
            let c = 1;
            while(num[i]-c > 0){
                num[i] -= c;
                lst.capacity[++index] = c*capa[i];
                lst.valueBag[index] = c*value[i];
                lst.numBag[index] = i;
                c *= 2;
            }
            lst.capacity[++index] = num[i]*capa[i];
            lst.valueBag[index] = num[i]*value[i];
            lst.numBag[index] = i;
        }
        //console.log(lst);
        //console.log(index);
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
        //console.log(bag);
        //console.log("max"+bag[sum]);
    }
}
let record = [];
let a = 0;
function multiMove(){
    a = 0;
    let m = count;
    let temp = sum;
    //console.log(countj);
    while(m>=0){
        if(countj[m] === temp){
            temp = countjcapa[m];
            record[a++] = counti[m];
        }
        m--;
    }
    console.log("record"+record);
    console.log("a"+a);
    for(let i=0;i<a;i++){
        equleId[i] = idName[  lst.numBag[  record[i]  ]  ];
    }
    //console.log(equleId);
    let i = a - 1;
    while(i>=0){
        $(equleId[i]).stop(true,false).animate({top:"300px"},"slow");
        $(equleId[i]).css("height","150px");
        i--;
    }
}
function move(){
    a = 0;
    let m = count;
    let temp = sum;
    //console.log(countj);
    while(m>=0){
        if(countj[m] === temp){
            temp = countjcapa[m];
            record[a++] = counti[m];
        }
        m--;
    }
    console.log("record"+record);
    console.log("a"+a);
    for(let i=0;i<a;i++){
        equleId[i] = idName[ record[i]  ];
    }
    console.log(equleId);
    let i = a - 1;
    while(i>=0){
        $(equleId[i]).stop(true,false).animate({top:"300px"},"slow");
        //$(equleId[i]).animate({top:"300px"},"slow");
        $(equleId[i]).css("height","150px");
        i--;
    }
}
//复原
function recovery(){
    //console.log(record);
    let i = a - 1;
    while(i>=0){
        $(equleId[i]).animate({top:"0px"},"slow");
        $(equleId[i]).css("height","100px");
        i--;
    }  
    for(let i=0;i<capa.length;i++){
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]);
    }
   
    $("#bag-area").text("背包区域");
    $("#bag-area").css("line-height","197px");
    
}
//调用
$("#zero-one").click(function(){
    //console.log("sum1"+sum);
    for(let w = 0;w<=sum;w++){
        bag[w] = 0;
    }
    for(let i=0;i<capa.length;i++){
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]);
    }
    bagValue.zeroOne();
    move();
    $("#bag-area").text("01背包，装下的物品的总价值最大为"+bag[sum]);
    $("#bag-area").css("line-height","400px");
    for(let w = 0;w<record.length;w++){
        record[w] = -1;
    }
    
})
$("#complete-bag").click(function(){
    for(let w = 0;w<=sum;w++){
        bag[w] = 0;
    }
    for(let i=0;i<capa.length;i++){
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]);
    }
    bagValue.compleBag();
    move();
    //
    let culmul = [];
    for(let i=0;i<capa.length;i++){
        culmul[i] = counts(record,i);
    }
    //console.log(record);
    console.log("comp-culmul"+culmul);
    for(let i=0;i<capa.length;i++){
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]+"\nnum:"+culmul[i]);
    }
    //
    $("#bag-area").text("完全背包，装下的物品的总价值最大为"+bag[sum]);
    $("#bag-area").css("line-height","400px");
    for(let w = 0;w<record.length;w++){
        record[w] = -1;
    }
})
$("#multi-bag").click(function(){
    for(let w = 0;w<=sum;w++){
        bag[w] = 0;
    }
    for(let i=0;i<capa.length;i++){
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]+"\nnum:"+number[i]);
    }
    bagValue.multiBag();
    multiMove();
    //
    let culmul = [];
    let b = [];
    console.log("clicka"+a);
    for(let i=0;i<a;i++){
        b[i] =  lst.numBag[  record[i]  ];
    }
    for(let i=0;i<capa.length;i++){
        culmul[i] = counts(b,i);
    }
    console.log(b);
    console.log(culmul);
    for(let i=0;i<capa.length;i++){
        $(idName[i]).text("物品"+(i+1)+"\ncapa:"+capa[i]+"\nvalue:"+value[i]+"\nnum:"+culmul[i]);
    }
    $("#bag-area").text("多重背包，装下的物品的总价值最大为"+bag[sum]);
    $("#bag-area").css("line-height","400px");
    for(let w = 0;w<record.length;w++){
        record[w] = -1;
    }
})
$("#recover").click(function(){
    recovery();
})