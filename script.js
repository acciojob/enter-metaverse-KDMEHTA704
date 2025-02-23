//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const statusParagraph = document.createElement("p");
    statusParagraph.id = "status";
    statusParagraph.textContent = "Enter the Metaverse";
    
    const enterButton = document.createElement("button");
    enterButton.id = "enterBtn";
    enterButton.textContent = "Enter";
    
    document.body.appendChild(statusParagraph);
    document.body.appendChild(enterButton);
    
    enterButton.addEventListener("click", function () {
        const h1Element = document.createElement("h1");
        h1Element.textContent = "Entered Metaverse";
        statusParagraph.replaceWith(h1Element);
    });
});
