document.addEventListener("DOMContentLoaded", function () {
    // Create and append status paragraph
    const statusParagraph = document.createElement("p");
    statusParagraph.id = "status";
    statusParagraph.textContent = "Enter the Metaverse";
    
    // Create and append enter button
    const enterButton = document.createElement("button");
    enterButton.id = "enterBtn";
    enterButton.textContent = "Enter";
    
    document.body.appendChild(statusParagraph);
    document.body.appendChild(enterButton);
    
    // Add event listener to button
    enterButton.addEventListener("click", function () {
        const h1Element = document.createElement("h1");
        h1Element.textContent = "Entered Metaverse";
        h1Element.id = "status";
        statusParagraph.replaceWith(h1Element);
    });
});
