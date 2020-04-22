/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//Global Variables - Students, Number of students of page, and the page container
 const studentListItems = document.querySelectorAll('.student-item');
 const numPerPage = 10;
 const pageContainer = document.querySelector('.page');


//Figure Number of pages of 10 users to create and show function
//Final problem was math logic in IF statment
 const showPage = (list, page) => {
   const startPage = (page * numPerPage) - numPerPage;
   const endPage = page * numPerPage;

   for(i = 0; i < list.length; i+= 1){
      if(i >= startPage && i < endPage){
        studentListItems[i].style.display = 'block';
      }else{
        studentListItems[i].style.display = 'none';

      }
   }
 }

//Creates page links and item creation for each page
 const pageinationLinks = (list) =>{
   const pageDiv = document.querySelector(".page");
   const pageNumber = Math.ceil(list.length/numPerPage);
   const div = document.createElement('div');
   const ul = document.createElement('ul');

   //appending div and list items to document
    div.className = "pagination";
    div.appendChild(ul);
    pageDiv.appendChild(div);

//Creates list items Appends Students to list
    for(links = 0; links < pageNumber; links +=1){
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      a.textContent = links + 1;
      li.appendChild(a);
      ul.appendChild(li);
    }

//Shows page
let a = ul.firstElementChild.firstElementChild;
let tags = div.querySelectorAll("a");
a.className = 'active';
showPage(studentListItems, 1);


//Click Handeler for new buttons - changes classname to active
ul.addEventListener('click', () =>{
  for (button = 0; button < tags.length; button +=1){
    tags[button].className = "";
  }
  event.target.className = "active";
  showPage(studentListItems, event.target.textContent);

});
}

//Calling function with student list items
pageinationLinks(studentListItems);
