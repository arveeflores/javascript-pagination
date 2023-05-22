
let maxPage = Math.floor(users.length/10);
let lastPage = users.length%10;
if(lastPage!=0){
    maxPage += 1;
}
let currPage = 1;

function addListItem(currPage) {

    let endNum = currPage * 10;
    let startNum = endNum - 10;
    let ul = document.querySelector(".contact-list");
    ul.innerHTML = "";
    for(startNum; startNum < endNum; startNum++){

       
        let li = document.createElement("li");
        li.setAttribute("class", "contact-item cf");

        let contactDiv = document.createElement('div');
        contactDiv.setAttribute("class", "contact-details");

        let img = document.createElement('img');
        img.setAttribute("class", "avatar");
        img.setAttribute("src", users[startNum].image);

        let contactName = document.createElement('h3');
        contactName.textContent= users[startNum].name;
        let email =  document.createElement('span');
        email.setAttribute("class", "email");
        let emailText = users[startNum].name.split(' ').join('.') + "@example.com"
        email.textContent= emailText;

        contactDiv.appendChild(img);
        contactDiv.appendChild(contactName);
        contactDiv.appendChild(email);

        let joinDiv = document.createElement('div');
        joinDiv.setAttribute("class", "joined-details");

        let joined =  document.createElement('span');
        joined.setAttribute("class", "date");
        joined.textContent="Joined " + users[startNum].joined;

        joinDiv.appendChild(joined);

        li.appendChild(contactDiv);
        li.appendChild(joinDiv);

        ul.appendChild(li);
    }
 }

function createButtonPage(){
    let pageFooter = document.querySelector(".pagination");
    for(let i=1; i<=maxPage;i++){
        let pageButton = document.createElement('input');
        pageButton.setAttribute("type", "button");
        pageButton.setAttribute("name", "page"+[i]);
        pageButton.setAttribute("value", i);

        pageButton.onclick = function() {
            addListItem(i);
          };

        let li = document.createElement("li");
        li.setAttribute("class", "page-list");
        
        pageFooter.appendChild(li);
        li.appendChild(pageButton);

    }

}

function updateTotal(){
    let total = document.querySelector(".page-header h3");
    total.textContent="Total: " + users.length;

}


addListItem(currPage);
createButtonPage();
updateTotal();

