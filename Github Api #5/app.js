//Elementleri Seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("github-form");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);



}

function getData(e) {

    //trim() inputtun içindeki sağ ve soldaki gereksiz boşlukları siler
    let username = nameInput.value.trim();


    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin.");
    }else{
        github.getGithubData(username)
        .then(response =>{

            if(response.user.message === "Not Found"){
                //Hata Mesajı
                ui.showError("Kullanıcı bulunamadı");
            }else{
                // ui.addSearchedUserToUI(username) fonksiyonunu
                // Storage.addSearchedUserToStorage(username)den 
                //sonra yazarsak localstorage e eklediğinden ui de hata alıcaz

               
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
         } )
        .catch(err => ui.showError(err));
        
    }



    ui.clearInput();
    e.preventDefault();
}


function clearAllSearched(){

    //Tüm arananları temizle

    if(confirm("Emin misiniz?")){
        Storage.clearAllSearchedUsersFromStorage();// Storageden temizleme
        ui.clearAllSearchedUsersFromUI();
    }


}

function getAllSearched(){

    //Arananları Storagedan al ve Uiye ekle

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";

    users.forEach(user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> 

        result += `<li class="list-group-item">${user}</li>  `
    });
    
    lastUsers.innerHTML = result;
    
}