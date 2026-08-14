const num = [1,3,3,7,5,8];

const seen = new Set(num);

const arr = [...seen];

const sort = arr.sort((a,b) => a-b);

console.log(sort);


const output = sort.reduce((acc,curr,index,sort) => {

    if(index === 0){
        return acc;
    }

    const prev = sort[index-1];

    for(let i= prev +1; i<curr;i++){
        acc.push(i);
    }

    return acc;

},[]);

console.log(output);
