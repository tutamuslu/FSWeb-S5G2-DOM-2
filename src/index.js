import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Eğlence otobüsündesin!!")
});

document.querySelector("header img").addEventListener("mouseover", function(e){
    document.querySelector("header img").style.border = "5px solid #000"
});

document.querySelector("header img").addEventListener("mouseleave", function(e){
    document.querySelector("header img").style.border = "0"
});

document.addEventListener("keypress", function(e) {
    if(e.key == "a"){
        e.preventDefault();
        alert("a ya basıldı")
    }
})

const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("dblclick", function(e){
        img.style.width = '80%'
    })
});

window.addEventListener("load", function(e){
    setTimeout(() => {
        this.document.querySelector("body").style.background = "lightgray"
    }, (2000));
})

document.querySelectorAll("nav a").addEventListener("click", function(e){
    e.preventDefault();
    alert("link pasif edildi")
})

document.querySelector(".intro h2").addEventListener("mouseenter", function(e){
    document.querySelector(".intro h2").style.color = "red"
})