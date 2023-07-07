const moreBtn = document.getElementById("more-btn")
const articleMore = document.getElementById("article-more")


articleMore.style.display = "none"

moreBtn.addEventListener("click",function(){
    if(articleMore.style.display === "none"){
        articleMore.style.display = "grid"
        moreBtn.innerText = `Hide`
    }else{
        articleMore.style.display = "none"
        moreBtn.innerText = "See More"
    }
})

