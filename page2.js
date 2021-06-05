function wordtrue(a) {

      if (a == "a")

      {     www[0]=0
            a1.src = "words/a.png"
      }

      if (a == "s")
      {     www[1]=0
            s.src = "words/s.png"
      }

      if (a == "t")
      {     www[2]=0
            t.src = "words/t.png"
      }

      if (a == "r")
      {     www[3]=0
            r.src = "words/r.png"
      }

      if (a == "o")
      {     www[4]=0
            o.src = "words/o.png"
      }

      if (a == "n")
      {     www[5]=0
            n.src = "words/n.png"
      }

      if (a == "a")
      {     www[6]=0
            aa.src = "words/a.png"
      }

      if (a == "u")
      {     www[7]=0
            u.src = "words/u.png"
      }

      if (a == "t")
      {     www[8]=0
            tt.src = "words/t.png"
      }


}

function wordfalse(a){

      if (a=="a")
      { wrong[mistake].src = "wrong/a.png" }
      if (a=="b")
      { wrong[mistake].src = "wrong/b.png" }
      if (a=="c")
      { wrong[mistake].src = "wrong/c.png" }
      if (a=="d")
      { wrong[mistake].src = "wrong/d.png" }
      if (a=="e")
      { wrong[mistake].src = "wrong/e.png" }
      if (a=="f")
      { wrong[mistake].src = "wrong/f.png" }
      if (a=="g")
      { wrong[mistake].src = "wrong/g.png" }
      if (a=="h")
      { wrong[mistake].src = "wrong/h.png" }
      if (a=="i")
      { wrong[mistake].src = "wrong/i.png" }
      if (a=="j")
      { wrong[mistake].src = "wrong/j.png" }
      if (a=="k")
      { wrong[mistake].src = "wrong/k.png" }
      if (a=="l")
      { wrong[mistake].src = "wrong/l.png" }
      if (a=="m")
      { wrong[mistake].src = "wrong/m.png" }
      if (a=="n")
      { wrong[mistake].src = "wrong/n.png" }
      if (a=="o")
      { wrong[mistake].src = "wrong/o.png" }
      if (a=="p")
      { wrong[mistake].src = "wrong/p.png" }
      if (a=="q")
      { wrong[mistake].src = "wrong/q.png" }
      if (a=="r")
      { wrong[mistake].src = "wrong/r.png" }
      if (a=="s")
      { wrong[mistake].src = "wrong/s.png" }
      if (a=="t")
      { wrong[mistake].src = "wrong/t.png" }
      if (a=="u")
      { wrong[mistake].src = "wrong/u.png" }
      if (a=="v")
      { wrong[mistake].src = "wrong/v.png" }
      if (a=="w")
      { wrong[mistake].src = "wrong/w.png" }
      if (a=="x")
      { wrong[mistake].src = "wrong/x.png" }
      if (a=="y")
      { wrong[mistake].src = "wrong/y.png" }
      if (a=="z")
      { wrong[mistake].src = "wrong/z.png" }






}

function displaychange(a) {

      if (a==1)
      {
            image.src="1p.gif"
            setTimeout( function asd() {
                  image.src = "stable4.gif"
            } , 720 )
      }
      if (a==2)
      {
            image.src="2p.gif"
            setTimeout( function asd() {
                  image.src = "stable3.gif"
            } , 680 )
      }
      if (a==3)
      {
            image.src="3p.gif"
            setTimeout( function asd() {
            image.src = "stable2.gif"
      } , 700 )
      }
      if (a==4)
      {
            image.src="4p.gif"
            setTimeout( function asd() {
                  image.src = "stable1.gif"
            } , 700 )
      }
      if (a==5)
      {
            image.src = "eat.gif"
            setTimeout(function aaa() {
                  image.src="lastp.jpg"
                  alert("GAME OVER")
                  gameover.src = "gameover.jpg"
                  home.src="home.png"
            } , 2100 )


      }


}

function win(a) {
      for(let ji = 0 ; ji<a.length ; ji++)
      {

            if(a[ji] != 0 )
            { return }

      }
      proceed.src = "proceed1.png"
}

function msg(a) {
      if (a>7)
      { a = 1}

      if (a==1)
      {
            message.src="m1.png"
            setTimeout(function sdfasdf() {
                        message.src = ""
            } , 2000 )

      }
      if (a==2)
      {
            message.src="m2.png"
            setTimeout(function sdfasdf() {
                        message.src = ""
            } , 2000 )

      }
      if (a==3)
      {
            message.src="m3.png"
            setTimeout(function sdfasdf() {
                        message.src = ""
            } , 2000 )

      }
      if (a==4)
      {
            message.src="m4.png"
            setTimeout(function sdfasdf() {
                        message.src = ""
            } , 2000 )

      }
      if (a==5)
      {
            message.src="m5.png"
            setTimeout(function sdfasdf() {
                        message.src = ""
            } , 2000 )

      }
      if (a==6)
      {
            message.src="m6.png"
            setTimeout(function sdfasdf() {
                        message.src = ""
            } , 2000 )

      }

}

function isin(a) {
      if (a=="")
      { return }
      let n = a[0]
      let m = false
      let word = "astronaut"
      let nnn = word.length
      for(let ccc = 0 ; ccc<nnn ; ccc++)
      {
            if(n == word[ccc])
            {
                  wordtrue(n)
                  mmm++
                  msg(mmm)
                  win(www)
                  return
            }

      }

      wordfalse(a)
      mistake++
      displaychange(mistake)
      return


}









///////////////////////////////////////////

var  a1 = document.getElementById("wa")
var  s = document.getElementById("ws")
var  t = document.getElementById("wt")
var  r = document.getElementById("wr")
var  o = document.getElementById("wo")
var  n = document.getElementById("wn")
var  aa = document.getElementById("waa")
var  u = document.getElementById("wu")
var  tt = document.getElementById("wtt")


////////////////////////////////////////////

var w1 = document.getElementById("wr1")
var w2 = document.getElementById("wr2")
var w3 = document.getElementById("wr3")
var w4 = document.getElementById("wr4")
var w5 = document.getElementById("wr5")
var wrong = [w1,w2,w3,w4,w5]

var image = document.getElementById("bg")

var button = document.getElementById("qqq")

var box = document.getElementById("ta")

var message = document.getElementById("mes")

var proceed = document.getElementById("next")

var gameover = document.getElementById("gameover")

var home = document.getElementById("home")




var mmm = 0
var mistake = 0
var www = ["a","s","t","r","o","n","a","u","t"]

button.addEventListener("click",function(){
      var input=box.value[0]
      box.value=""
      isin(input)

})

button.addEventListener("mouseover",function()
{

      button.style = "box-shadow: 6px 6px 6px silver"
      button.width = "200"
      button.left = "5px"

})

button.addEventListener("mouseout",function()
{

      button.style = ""
      button.width = "160"

})


proceed.addEventListener("mouseover",function(){ this.style = "box-shadow: 6px 6px 6px grey" })
proceed.addEventListener("mouseout",function(){ this.style = "" })
proceed.addEventListener("click",function(){ location.replace("page3.html") })

home.addEventListener("mouseover",function(){ this.style = "box-shadow: 6px 6px 6px grey" })
home.addEventListener("mouseout",function(){ this.style = "" })
home.addEventListener("click",function(){ location.replace("title.html") })
