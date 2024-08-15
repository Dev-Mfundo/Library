const form = document.getElementById("form");
const newBook = document.getElementById("newBook");
const cancelBtn = document.getElementById("cancelBtn");
const checkboxYes = document.getElementById("checkYes");
const checkboxNo = document.getElementById("checkNo");
newBook.addEventListener("click", showForm=()=>{
    if((form.style.display)=='block'){
      form.style.display='none';
    }else{
      form.style.display='block';
    }
})
cancelBtn.addEventListener("click", hideForm=()=>{
  form.style.display='none';
})
checkboxYes.addEventListener("change", ()=>{
  if(checkboxYes.checked==true){
    checkboxNo.checked=false;
  }
})
checkboxNo.addEventListener("change", ()=>{
  if(checkboxNo.checked==true){
    checkboxYes.checked=false;
  }
})

const addBookNow=document.getElementById("addBook");
addBookNow.addEventListener("click", ()=>{

const author = document.getElementById("author").value;
const title = document.getElementById("title").value;
const pages = document.getElementById("pages").value;

let read =()=>{
  if(checkboxNo.checked){
    console.log("No");
    return "Not yet!";
  }else if(checkboxYes.checked){
    console.log("yes");
    return "Read";
  }
}
const myLibrary = [];

function Book(author,title,pages,read) {
  this.author=author,
  this.title=title,
  this.pages=pages,
  this.read=read

}
const newBookInfo= new Book({author},{title},{pages},{read});

console.log(newBookInfo);


function addBookToLibrary() {

}

})