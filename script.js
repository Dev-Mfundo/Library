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
  if(checkboxYes.checked){
    checkboxNo.checked=false;
  }
})
checkboxNo.addEventListener("change", ()=>{
  if(checkboxNo.checked){
    checkboxYes.checked=false;
  }
})
const myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}
