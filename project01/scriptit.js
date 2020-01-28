const addButton=document.getElementById('add')
addButton.addEventListener('click',addItm);

const remButton=document.getElementById('remove')
remButton.addEventListener('click',remItm);

var input=document.getElementById('input')
var item=input.value
var ul=document.getElementById('list');
var li;
var textnode=document.createTextNode(item)

function addItm(){
    li=document.createElement('li')

    var checkbox=document.createElement("input")
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check')

    var label=document.createElement('label')

    ul.appendChild(label)
    li.appendChild(checkbox)
    label.appendChild(textnode)
    li.appendChild(label)
    ul.insertBefore(li,ul.childNodes[0])

}
function remItm(){
    li=ul.children;
    for(let index=0;index< li.length; index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
}