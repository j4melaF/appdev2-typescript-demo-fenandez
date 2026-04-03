(() => {

    console.log("=== EXPERIMENT: TYPE NARROWING WITH FORM ===")

    const form = document.querySelector("form")
    const input = document.getElementById("user-name")


    if (!form || !input) {
        console.log("Form or input not found!")
        return
    }

   
    if (input instanceof HTMLInputElement) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()

            const enteredName = input.value

            
            if (enteredName.trim() === "") {
                console.log("No name entered!")
            } else {
                console.log("User Name:", enteredName)
            }
        })
    }

})();