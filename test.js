const allRead = document.getElementById("allRead");
const allPost = document.querySelectorAll(".action");
const unRead = document.getElementById("unRead");
const redCircle = document.querySelectorAll(".circle");
const postLink = document.querySelectorAll(".postLink");


// Mark all as read
function post (element) {
    if (element.classList.contains("unread")) {
        element.classList.remove("unread")
        redCircle.forEach(element => {
            element.style.display = "none";
        })
    }       
}

allRead.addEventListener("click", e=> {
    allPost.forEach(post)
})

// singlePost
allPost.forEach(singlePost)

function singlePost (element,index) {
    element.addEventListener("click", e=> {
        element.classList.remove("unread")
        redCircle[index].style.display = "none";
    })
}
