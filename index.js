const ulEl = document.getElementById("ul-el")
const saveBtn = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
let urls = []
let listItems = ""

console.log(saveBtn)
saveBtn.addEventListener("click", function() {
    getInputValue() 
    listItems = ""       
    for (let i=0; i<urls.length; i++)
    {
        listItems += `<li><a href='${urls[i]}' target='__blank'>${urls[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
})

function getInputValue()
{
    urls.push(inputEl.value)
    inputEl.value = ""
}

