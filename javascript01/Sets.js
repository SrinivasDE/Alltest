const letters = new Set([]);
letters.add(1);
letters.add('a');
letters.add(2);
letters.add(3);
letters.add(2);
letters.add('a');
letters.add(1);

letters.forEach((i) => console.log(i));

letters.delete(1);



for(const i of letters){
    console.log('for of using set',i);
}

