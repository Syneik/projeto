const historyList = document.getElementById("history-list");
const moodButtons = document.querySelectorAll(".mood-btn");
const suggestionElement = document.getElementById("suggestion");

moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.getAttribute("data-mood");
        
        let suggestion = "";
        switch(mood) {
            case "happy":
                suggestion = "How about listening to some cheerful music?";
                break;
            case "sad":
                suggestion = "Maybe watching a comedy movie could cheer you up.";
                break;
            case "excited":
                suggestion = "Why not share your excitement with a friend?";
                break;
            case "tired":
                suggestion = "A quick nap might be refreshing.";
                break;
            default:
                suggestion = "Select a mood to receive a personalized suggestion.";
                break;
        }

        suggestionElement.textContent = suggestion;

        const listItem = document.createElement("li");
        listItem.textContent = `You felt ${mood}: ${suggestion}`;
        historyList.appendChild(listItem);
    });
});