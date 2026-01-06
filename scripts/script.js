// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// top menu
const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// console.log(topMenuEl)

// menu links
for (let link of menuLinks) {
  let anchor = document.createElement("a");
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);
}

// submenu css styling
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';
subMenuEl.classList.add("flex-around");
// subMenuEl.style.border = '3px solid red'; - testing to see if subMenu is active

// console.log(subMenuEl)

// click top menu links
const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener('click', function handleClick(clickEvent) {
  clickEvent.preventDefault();
  //  if clicked element is a link 
  if (clickEvent.target.tagName !== 'A')
    return;

  // console.log(clickEvent.target.textContent)

  // set submenu to hide and show based on action of clicking link that matches the data
  const clickedLink = clickEvent.target;

  // add toggle for non-selected links
  for (const a of topMenuLinks) {
    // toggle
    if (a !== clickEvent.target) {
      a.classList.remove('active');
    }
  }
  clickEvent.target.classList.toggle('active');

  // find objects in menuLinks, call them linkObj
  let clickedLinkObj = null;
  for (const linkObj of menuLinks) {
    //if it matches, store in memory
    if (linkObj.text === clickedLink.textContent) {
      clickedLinkObj = linkObj;

      //then stop when a match is found
      break;
    }
  }

 console.log('clickedLinkObj:', clickedLinkObj);

  //when the matching object (link) in submenu and has a submenu link, change the CSS to 100% and show the menu
  if (clickedLink.classList.contains('active') && clickedLinkObj && clickedLinkObj.subLinks) {
    subMenuEl.style.top = '100%';
    buildSubmenu(clickedLinkObj.subLinks);
  } 
  else {
    // if not do not show submenu
    subMenuEl.style.top = '0';
    subMenuEl.innerHTML = '';
  }
});

// clear submenu links
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  for (let subLink of subLinks) {
    let subAnchor = document.createElement('a');
    subAnchor.setAttribute('href', subLink.href);
    subAnchor.textContent = subLink.text;
    subMenuEl.appendChild(subAnchor);
  }
}





topMenuEl.addEventListener('click', handleClick);


console.log(topMenuEl)

console.log(topMenuLinks)

console.log(mainEl)
console.log(menuLinks)

