var x=0;
var y=1;
var z=43;

var arry=[];
arry=[0,1,43];

arry.push(23);
arry.push("twenty-three");
arry.push({});
arry.push([1,2,undefined,null,false]);

console.log(arry[0]);

for(var i=0;i<arry.length;i++){
    console.log(arry[i]);
}

arry[0]="zero";

arry.length=100;

console.log(arry);

arry.length=5;

console.log(arry);

for(item of arry){
    console.log(item);
}

var result=arry.indexOf("zero");
console.log(result);
if(result===-1){
    console.log("yehaw");
}else{
    console.log("howdy")
}
// credit from class example