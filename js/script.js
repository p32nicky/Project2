/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//Global Variables
 const studentListItems = document.querySelectorAll('.student-item');
 const numPerPage = 10;
 const pageContainer = document.querySelector('.page');


//Figure Number of pages and Show Page Function
 const showPage = (list, page) => {
   const startPage = (page * numPerPage) - numPerPage;
   const endPage = page * numPerPage;
   for(i = 0; i<=list.length; i+= 1){
      if(i >= startPage && i <= endPage){
        studentListItems[i].style.display = 'block';
      }else{
        studentListItems[i].style.display = 'none';

      }
   }
 }

//Div and item creation for each page
 const pageinationLinks = (list) =>{
   const pageDiv = document.querySelector(".page");
   const pageNumber = list.length / numPerPage;
   const div = document.createElement('div');
   const ul = document.createElement('ul');


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




/***

   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/




/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
