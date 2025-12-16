

    const mainEl = document.querySelector("main");
    mainEl.style.backgroundColor = 'var(--main-bg';
    mainEl.innerHTML= '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr')
    
    const topMenuEl = document.getElementById('top-menu')
    topMenuEl.style.height = "100%";
    topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

    topMenuEl.classList.add("flex-around");

    console.log(topMenuEl)

for (let link of menuLinks){
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link.href);
    anchor.textContent = link.text;

    topMenuEl.appendChild(anchor);
}

console.log(mainEl)
console.log(MenuLinks)