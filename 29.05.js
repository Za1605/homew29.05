//створити блок,
let div = document.createElement(`div`);
div.innerText=`box`
   // - додати йому класи wrap, collapse, alpha, beta
div.classList.add(`wrap`);
div.classList.add(`collaps`);
div.classList.add(`alpha`);
div.classList.add(`beta`);
// додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.backgroundColor= `blue`;
div.style.fontSize= `13`;
div.style.color= `red`;
 //додати цей блок в body.
document.body.appendChild(`div`);

 //клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));



// Є масив:
   // ['Main','Products','About us','Contacts']
///Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

<ul class="site">
    <li>`Main` </li>
    <li>`Products`</li>
    <li>`About us`</li>
    <li>`Contacts`</li>
</ul>

 //Є масив
//let coursesAndDurationArray = [
    //{title: 'JavaScript Complex', monthDuration: 5},
   // {title: 'Java Complex', monthDuration: 6},
   // {title: 'Python Complex', monthDuration: 6},
   // {title: 'QA Complex', monthDuration: 4},
   // {title: 'FullStack', monthDuration: 7},
   // {title: 'Frontend', monthDuration: 4}
//];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.