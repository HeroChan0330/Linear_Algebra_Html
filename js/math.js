var arrange=Array();
var nums=Array();
var indexMapX=Array();
var indexMapY=Array();

function Check(num,bit){
    while(num>0){
        if(num%10==bit){
            return true;
        }
        num=parseInt(num/10);
    }
    return false;
}
function GetArrange(num,index,bits){
    if(index<bits){
        index++;
        for(var i=1;i<=bits;i++){
            if(Check(num,i)==false){
                GetArrange(num*10+i,index,bits);
            }
        }
    }
    else{
        arrange.push(num);
    }
}
function GetReserveNum(num){
    var res=0;
    while(num>0){
        var temp=parseInt(num/10);
        i=num%10;
        while(temp>0){
            if(temp%10>i){
                res++;
            }
            temp=parseInt(temp/10);
        }
        num=parseInt(num/10);
    }
    return res;
}
function CalculateDet(width){
    arrange=Array();
    var res=0;
    GetArrange(0,0,width);
    for(var i=0;i<arrange.length;i++){
        a=arrange[i];
        var reserveNum=GetReserveNum(a);
        var y=width,temp=-1;
        if(reserveNum%2==0) temp=1;
        while(a>0){
           var index=a%10;
           temp*=nums[indexMapY[y-1]][indexMapX[index-1]]; 
           y--;
           a=parseInt(a/10);
        }
        res+=temp;
        
    }
    return res;
}
function IndexMapInit(width){
    indexMapX=Array();
    indexMapX=Array();
    for(var i=0;i<width;i++){
        indexMapX.push(i);
        indexMapY.push(i);
    }
}
function SetIndexMap(width,x){
    indexMapX=Array();
    indexMapY=Array();
	for (var i = 0; i<width; i++){
        indexMapX.push(i);
        indexMapY.push(i);
    }
    indexMapX[x] = width;
}

function CalculateEquations(width){
    var res=Array();
    IndexMapInit(width);
    var det=CalculateDet(width);
    if(det==0) return NaN;
    for(var i=0;i<width;i++){
        SetIndexMap(width,i);
        var dn=CalculateDet(width);
        res[i]=dn/det;
    }
    return res;
}
function func(){
    // GetArrange(0,0,4);
    // for(var i=0;i<arrange.length;i++){
    //     console.log(arrange[i]);
    // }
    console.log(Calculate(3));
}