const items = [
 {id:1,name:"TV",qty:2},
 {id:2,name:"Phone",qty:1},
 {id:1,name:"TV",qty:3},
 {id:2,name:"Phone",qty:5}
];

const output = Object.values(
    items.reduce((acc, curr) => {

        if (acc[curr.id]) {
            acc[curr.id].qty += curr.qty;
        } else {
            acc[curr.id] = { ...curr };
        }

        return acc;

    }, {})
);

console.log(output);