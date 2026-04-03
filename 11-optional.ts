(() => {
// optional types and parameters

    function generateError(msg?: string) {
        console.log("Generating error...")
        throw new Error(msg)
    }

    try {
        generateError("An error occurred!")
    } catch (err) {
        console.log("Caught error with message")
    }

    try {
        generateError() 
    } catch (err) {
        console.log("Caught error without message")
    }

   
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guest'
    }

    let user1: User = {
        name: 'Elmer',
        age: 31
    }

    let user2: User = {
        name: 'Ana',
        age: 25,
        role: 'admin'
    }

    console.log("User1:", user1)
    console.log("User2:", user2)

//
    
    if (user1.role) {
        console.log("User1 role:", user1.role)
    } else {
        console.log("User1 has no role")
    }


    let input1 = ''
    let input2 = null
    let input3 = undefined

    const result1 = input1 ?? "Default Value"
    const result2 = input2 ?? "Default Value"
    const result3 = input3 ?? "Default Value"

    console.log("input1 ?? :", result1) 
    console.log("input2 ?? :", result2) 
    console.log("input3 ?? :", result3) 

  
    const orResult1 = input1 || "Default Value"
    const orResult2 = input2 || "Default Value"
    const orResult3 = input3 || "Default Value"

    console.log("input1 || :", orResult1) 
    console.log("input2 || :", orResult2)
    console.log("input3 || :", orResult3)

   
})();