const posts = [
    {
        name: "Vincent van Gogh",
        username: "Optimistic12",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "Bro! This Javascript is now easy",
        likes: 567,
        heart: "images/icon-heart.png",
        text: "images/icon-comment.png",
        message: "images/icon-dm.png"
        
    },
    {
        name: "Gustave Courbet",
        username: "Apeke88",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "I can't wait to have my baby",
        likes: 548,
        heart: "images/icon-heart.png",
        text: "images/icon-comment.png",
        message: "images/icon-dm.png"
    },
        {
        name: "Joseph Ducreux",
        username: "Oteri66",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are you stacking up today?? post below and WAGMI!",
        likes: 784,
        heart: "images/icon-heart.png",
        text: "images/icon-comment.png",
        message: "images/icon-dm.png"
    }
]


// added name name=${post.username} value=${post.likes} in the button tag
// and onclick="increment(this)" 
// this passes the current values of the object the user is interacting with

document.getElementById("main").innerHTML = `${posts.map(function (post) {

 
 
    return `
    
    <div class="box">
      
        <img class="post-avatar" src="${post.avatar}">
    
    
        <h5 class="post-name">${post.name}<span class="country">
        <p class="post-location">${post.location}</p></span></h5>
    </div>
    
    <img class="post-image" src="${post.post}">
    
    <div class="icons">
        <button id="btn-heart" name=${post.username} value=${post.likes} onclick="increment(this)"><img class="post-heart" src="${post.heart}"></button>
        <button  id="btn-text"><img class="post-text" src="${post.text}"></button>
        <button  id="btn-message"><img class="post-message" src="${post.message}"></button>
    </div>
    <h5 class="likes">${post.likes} likes</h5>
    <h5 id="username">${post.username} <span class="comment"> ${post.comment}</span></h5>
    <div class="seperator"></div>
    
    
    `
}).join('')}`


// the h5 tag id="likes" was changed by a class to recover a an array form of each tag rendered
const likesCount = document.getElementsByClassName("likes")

function increment(e) { // e represents the object on wich user interacts
    e.value = parseInt(e.value) + 1

    if (e.name=="Optimistic12") {
        likesCount[0].textContent = `${e.value} likes`
        
    } 
    else if (e.name === "Apeke88") {
        likesCount[1].textContent =  `${e.value} likes`
    } else {
        likesCount[2].textContent =  `${e.value} likes`
    }
    //you can watch what value is returned from 
    //console.log(e)
}




