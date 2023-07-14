getColorScheme()

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()
    getColorScheme()
    document.getElementById("color-display").innerHTML = ""
})

function getColorScheme(){
    let displayColorHtml = ""
    let colorPicker = document.getElementById("color-picker").value.slice(1,7)
    let colorMode = document.getElementById("mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorMode}`)
        .then(response => response.json())
        .then(data => {
            data.colors.map(color =>{
                displayColorHtml += `
                    <div class="color-container" data-hex="${color.hex.value}">
                        <div class="color" style="background-color:${color.hex.value}" data-hex="${color.hex.value}"></div>
                        <p class="hex-value copy">${color.hex.value}</p>
                    </div>
                `
            })
            document.getElementById("color-display").innerHTML = displayColorHtml
        })
}

// COPY HEX VALUES
document.getElementById("color-display").addEventListener("click", copyHexValue)

const copiedMessage = document.getElementById("copied-message")

function copyHexValue(e) {
    navigator.clipboard.writeText(e.target.dataset.hex)
        .then(() => {
            copiedMessage.style.display = "block"
            setTimeout(() => {
                copiedMessage.style.display = "none"
            }, 1500)
        })
        .catch((err) => {
            console.error("Failed to copy:", err)
        })
}


