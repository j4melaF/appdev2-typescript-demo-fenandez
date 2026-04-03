(() => {

    let user2 = {
        name: 'Alice',
        age: 30,
        greet: () => {
            console.log(`Hello, my name is ${user2.name} and I am ${user2.age} years old.`);
        }
    }

    user2.greet();
})