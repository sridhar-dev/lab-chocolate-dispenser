var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
    if(count>0){
    for(let i = 0; i<count; i++)
    {
        chocolates.unshift(color)
    } 
}
else{
    return 'Number cannot be zero/negative'
}
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates,number){
    var remvdchoc = []
    if(number<=0)
    {
        return 'Number cannot be zero/negative'
    }

    else if(number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }

    else
    {
        for( var i=0; i<number; i++)
        {
            remvdchoc.push(chocolates.shift(i))
        }
        return remvdchoc
    }
    

}


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates,number)
{   
    let newarr =[]
    if(number<=0)
    {
        return 'Number cannot be zero/negative'
    }

    else if(number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else{
        for(var i=0;i<number;i++)
        {
            newarr.push(chocolates.pop(i))
        }
        return newarr
    }
  
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color)
{   
    let newarr =[]
    if(number<=0)
    {
        return 'Number cannot be zero/negative'
    }

    else if(number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else 
    {
        for(let i=0;i<number;i++)
        {
            newarr.push(chocolates.pop(color))
        }
        return newarr
    }


}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
    var newarr3=[]
var obj={'green':0,'silver':0,'blue':0, 'crimson':0, 'purple':0, 'red':0, 'pink':0}
for(var i=0;i<chocolates.length;i++){
    obj[chocolates[i]]+=1;
}
var arr=[];
arr.push(obj['green']);
arr.push(obj['silver']);
arr.push(obj['blue']);
arr.push(obj['crimson']);
arr.push(obj['purple']);
arr.push(obj['red']);
arr.push(obj['pink']);
return arr;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, currentColor, finalColor){
var sum=0;
if (count>0){
for(var i=0;i<chocolates.length;i++){
    if(chocolates[i]==currentColor){
        sum=sum+1;
        chocolates[i]=finalColor;
        if(sum==count){
            break;
        }
    }
}
return chocolates;
}
else if(count<=0)
{
return 'Number cannot be zero/negative'
}
return "Can't replace the same chocolates"

}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor){
if(chocolates.length==0)
{
return null
}
else 
{
for(var i=0;i<chocolates.length;i++)
{
    if(chocolates[i]==currentColor)
        chocolates[i]=finalColor
}
var sum=0
for(var i=0;i<chocolates.length;i++)
{
    if(chocolates[i]==finalColor)
        sum=sum+1
}
}
return [sum,chocolates]
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
