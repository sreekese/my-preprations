const dup = [
{id:1},
{id:2},
{id:1}
]

const output = dup.filter((x,index,self) => index === self.findIndex((y) => y.id === x.id));
console.log(output);
