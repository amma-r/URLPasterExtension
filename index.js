const ulEl = document.getElementById("ul-el")
const saveBtn = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
let leadsFromLocalStorage = localStorage.getItem("urls")
let urls = []
let listItems = ""

if(leadsFromLocalStorage != null)
{
    urls = JSON.parse(localStorage.getItem("urls"))

}

renderUrls()


saveBtn.addEventListener("click", function() {
    getInputValue() 
    listItems = ""       
    renderUrls()
})

function getInputValue()
{
    urls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("urls", JSON.stringify(urls))
}

function renderUrls()
{
    listItems = ""   
    for (let i=0; i<urls.length; i++)
    {
        listItems += `
        <li>
            <a href='${urls[i]}' target='__blank'>
                ${urls[i]}            
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}