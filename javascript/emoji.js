const emojis_buttons = document.querySelectorAll(".emoji-btn")
const message = document.getElementById("message");

emojis_buttons.forEach(emoji => {
    emoji.addEventListener("click", () =>{
        message.value = message.value + emoji.value;
        console.log(emoji.value)
    })
    
});
