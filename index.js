const ulEl = document.getElementById("ul-el")
const saveBtn = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
const delBtn = document.getElementById("del-el")
const leadsFromLocalStorage = localStorage.getItem("urls")
const saveTabBtn = document.getElementById("save-tab")
let urls = []
let listItems = ""

if(leadsFromLocalStorage)
{
    urls = JSON.parse(localStorage.getItem("urls"))
    renderUrls(urls)
}

saveBtn.addEventListener("click", function() {
    getInputValue() 
    listItems = ""       
    renderUrls(urls)
})

function getInputValue()
{
    urls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("urls", JSON.stringify(urls))
}

function renderUrls(arr)
{
    listItems = ""   
    for (let i=0; i<urls.length; i++)
    {
        listItems += `
        <li>
            <a href='${arr[i]}' target='__blank'>
                ${arr[i]}            
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

delBtn.addEventListener("click", function(){
    localStorage.clear(); urls = []; renderUrls(urls);
})

saveTabBtn.addEventListener("click", function()
{

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0].url
    urls.push(tab)
    localStorage.setItem("urls", JSON.stringify(urls))
    renderUrls(urls)
    })  
})
