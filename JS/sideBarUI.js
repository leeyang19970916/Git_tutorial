import PageList from "./listForPage.js";
import redirectPage from "./redirectPage.js";

const SideBar=(urlID)=>{
const siderBarDom=document.querySelector("nav#sideBar")
let str=''
PageList.forEach(item=>{
    let isActive=item.id===urlID ? 'active' : ''
    str+=`<div id=${item.id} class='sidebarItem ${isActive}'>${item.name}</div>`
})
siderBarDom.innerHTML=str
redirectPage(siderBarDom)
}


export default SideBar