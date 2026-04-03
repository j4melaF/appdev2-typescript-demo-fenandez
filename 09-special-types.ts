(() => {


    let a: null;

    a = null
    console.log("Value of a:", a)


    let b: null | string

    b = null
    console.log("b (null):", b)

    b = "Hi"
    console.log("b (string):", b)


    let c: undefined;

    c = undefined
    console.log("Value of c:", c)


  
    let d: undefined | string

    d = undefined
    console.log("d (undefined):", d)

    d = "Hi"
    console.log("d (string):", d)

    

    function printMessage(message: string | null) {
        if (message === null) {
            console.log("No message provided.")
        } else {
            console.log("Message:", message)
        }
    }

    printMessage("Hello!")  // ✅
    printMessage(null)     // ✅



    function greet(name?: string) {
        if (name === undefined) {
            console.log("Hello, Guest!")
        } else {
            console.log("Hello,", name)
        }
    }

    greet("Juan")   
    greet()         

    

})()