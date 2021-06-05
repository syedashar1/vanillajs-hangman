var edc = document.getElementById("edc")
var about = document.getElementById("about")
var working = document.getElementById("working")
var learn = document.getElementById("learn")
var start = document.getElementById("start")


start.addEventListener("click",function(){  location.replace("page1.html")   })
edc.addEventListener("click",function(){  location.replace("title.html")   })

about.addEventListener("mouseover", function(){ this.style = "box-shadow: 3px 3px 3px grey " })
working.addEventListener("mouseover", function(){ this.style = "box-shadow: 3px 3px 3px grey " })
learn.addEventListener("mouseover", function(){ this.style = "box-shadow: 3px 3px 3px grey " })
about.addEventListener("mouseout", function(){ this.style = "" })
working.addEventListener("mouseout", function(){ this.style = "" })
learn.addEventListener("mouseout", function(){ this.style = "" })
start.addEventListener("mouseover", function(){ this.src = "start1.png" })
start.addEventListener("mouseout", function(){ this.src = "start.png" })

edc.addEventListener("mouseover" , function(){ this.src = "edcproject1.png" })
edc.addEventListener("mouseout" , function(){ this.src = "edcproject.png" })
