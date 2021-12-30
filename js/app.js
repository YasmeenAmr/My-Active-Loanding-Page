/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const secStorNum = document.querySelectorAll('section');// selecte by tagname to get num of section
const myUnorderedList = document.getElementById('navbar__list');// get ul element from html 
const myupButton=document.querySelector("button");//get the top button
/** 
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/* Build the navbar in daynamic way by getting the data-nav of every section
 and insert it's value in li element of ul and also do scrolling action to the sections when li elements clicked */
function tobuild(){
  let felemnt=document.createDocumentFragment();
  for(elmlist of secStorNum)
    {  
      let listElemName = elmlist.getAttribute("data-nav");//to get dataset-nav
      let listElem = document.createElement("li");//creating list element in ul in html
      let listElemLink= document.createElement("a");//creating list element as link
      listElemLink.innerText=listElemName;//to get textname of the data-nav   
      listElem.appendChild(listElemLink);
      //add event click to li element to scroll to target section
      listElem.addEventListener("click",  ()=> {
        let lem =listElem.innerText;
        let em=document.querySelector(`[data-nav=${lem}]`);
        /*select data-nav which have the same value that match with 
        the text in the li element and  got the idea of ($={}) fron link belowe
        https://stackoverflow.com/questions/7084557/select-all-elements-with-a-data-xxx-attribute-without-using-jquery?fbclid=IwAR3LdKHF33DHpp9oERceUpSJpsmDmOfeKsI8gz243Vttm3KE371mrEKXXCM*/
        em.scrollIntoView({ behavior: "smooth"});
      });
      felemnt.appendChild(listElem);
    }
myUnorderedList.appendChild(felemnt);
}
tobuild();


/*Activate sections when get near top of viewport by get it's position by useing
 getBoundingClientRect fun and also activate li element which is related to the active section*/
function activatedsection()
{ // to activate section1 in navbar by default like first section of sections
  let sec1=document.querySelectorAll("li");
  for(s of sec1)
  { let sec1Text=s.innerText;
    if(sec1Text==="Section1")
    s.classList.add("my-activ-element");
  }
  window.addEventListener("scroll",()=>{
  for(selectedsec of secStorNum)
  { 
    let selpos=selectedsec.getBoundingClientRect();
    if(selpos.top>=0 && selpos.top<=500 )
    {
      selectedsec.classList.add("your-active-class");
      //activate the  li element which is match the data-nav's value
      let selsec=selectedsec.getAttribute("data-nav");
      let lis=document.querySelectorAll("li");
      for(l of lis){
      let lem2=l.innerText;
      if(selsec===lem2){
        l.classList.add("my-activ-element");
        }
      else{
        l.classList.remove("my-activ-element");
        }
      }
    }
    else
    {
      selectedsec.classList.remove("your-active-class");
    }
  }
})}
activatedsection();
// to detect the active link in the navbar to restyling it 


// to scroll up by using up button
function sctrollToThetOP(){
  myupButton.addEventListener("click",()=>{
  window.scrollTo({top:20,behavior:"smooth"});})
}
sctrollToThetOP();

// Scroll to section on link click

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Set sections as active
 
