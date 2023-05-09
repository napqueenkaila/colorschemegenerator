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
                    <div class="color-container">
                        <div class="color" style="background-color:${color.hex.value}"></div>
                        <p class="hex-value copy">${color.hex.value}</p>
                    </div>
                `
            })
            console.log(displayColorHtml)
            document.getElementById("color-display").innerHTML = displayColorHtml
        })
}

