$(function(){
  /*banner*/
  var imgbb=$(".imgbb");
  var conbtn=$(".conbtn li");
  var index=0;
  function move(type){
    if(type=="r"){
  	index++;
  	if(index>=imgbb.length){
  		index=0;
  	}      
    }else if(type=="l"){
      index--;
      if(index<=-1){
        index=imgbb.length-1;
      }
    }
  	imgbb.hide();
  	imgbb.eq(index).fadeIn();
  	conbtn.css("background","#c4a349");
  	conbtn.eq(index).css("background","#fff");
  }
  var t=setInterval(function(){
    move("r");
  },3000);

  conbtn.each(function(){
    var aaa=$(this).index();
    conbtn.eq(aaa).hover(function(){
        conbtn.eq(aaa).each(function(){
          clearInterval(t);
        imgbb.hide();
        conbtn.css("background","#c4a349");
      })
      conbtn.eq(aaa).css("background","#fff");
      imgbb.eq(aaa).fadeIn();
    },function(){
       t=setInterval(function(){
        move("r");
      },3000);
    })  
  })


$(".imgbbox").hover(function(){
 	clearInterval(t);
 },function(){
 	 t=setInterval(function(){
          move("r");
        },3000);
 })

$(".conbtnl").hover(function(){
      clearInterval(t); 
})     
   $(".conbtnl").click(function(){
      move("l");
    })

$(".conbtnr").hover(function(){
      clearInterval(t);
})   
$(".conbtnr").click(function(){
  move("r");
})



/*下拉菜单*/
$(".nw").hover(function(){
  $(this).find(".naverji").stop();
  $(this).find(".naverji").slideDown();
},function(){
  $(this).find(".naverji").stop();
  $(this).find(".naverji").slideUp();
})



/*购物车*/
$(".shopping").hover(function(){
  $(".gwerji").show();
  $(".word1").css("color","#ff6700");
},function(){
  $(".gwerji").hide();
  $(".word1").css("color","#ccc");
})


/*banner选项卡*/
var conl=$(".content-left li");
        conl.hover(function(){
          $(this).find(".conerji").show();
        },function(){
           $(this).find(".conerji").hide();
        })

/*star 轮播*/
var num=0;
function movell(){
  if(num==0){
     $(".stbox").animate({left:"-1240px"});
      $(".stabtnl").css({color:"#ccc"});
      $(".stabtnr").css({color:"red"});
     num=1;
  }else if(num==1){
     $(".stbox").animate({left:"0"});
     $(".stabtnr").css({color:"#ccc"});
    $(".stabtnl").css({color:"red"});
    num=0;
  }
}
var s=setInterval(function(){
  movell();
},5000);
$(".stabtnl").hover(function(){  
  clearInterval(s);
},function(){
  s=setInterval(function(){
  movell();
},5000);
})
$(".stabtnr").hover(function(){  
  clearInterval(s);
},function(){
  s=setInterval(function(){
  movell();
},5000);
})
$(".stabtnl").click(function(){
  $(".stbox").animate({left:"-1240px"});
  $(".stabtnl").css({color:"#ccc"});
  $(".stabtnr").css({color:"red"});
})
$(".stabtnr").click(function(){
  $(".stbox").animate({left:"0"});
  $(".stabtnr").css({color:"#ccc"});
  $(".stabtnl").css({color:"red"});
})

/*搭配*/
var dapei=$(".aa li");
var dapei2=$(".bb");

  dapei.each(function(){
    var dd=$(this).index();
    dapei.eq(dd).hover(function(){
        dapei.eq(dd).each(function(){
        dapei2.hide();
        dapei.css({textDecoration:"none",color:"#333"})
      })
      dapei.eq(dd).css({textDecoration:"underline",color:"#ff6700"})
      dapei2.eq(dd).show();
    })
})

/*配件*/

var dapeic=$(".cc li");
var dapei2d=$(".dd");

  dapeic.each(function(){
    var dd=$(this).index();
    dapeic.eq(dd).hover(function(){
        dapeic.eq(dd).each(function(){
        dapei2d.hide();
        dapeic.css({textDecoration:"none",color:"#333"})
      })
      dapeic.eq(dd).css({textDecoration:"underline",color:"#ff6700"})
      dapei2d.eq(dd).show();
    })  
  })
/*周边*/

var dapeie=$(".ee li");
var dapei2df=$(".ff");

  dapeie.each(function(){
    var dd=$(this).index();
    dapeie.eq(dd).hover(function(){
        dapeie.eq(dd).each(function(){
        dapei2df.hide();
        dapeie.css({textDecoration:"none",color:"#333"})
      })
      dapeie.eq(dd).css({textDecoration:"underline",color:"#ff6700"})
      dapei2df.eq(dd).show();
    })
})

// neirong
var dian=$(".tushu-dian li");
var numn=0;
var tukuang=$(".tukuang");
function neimove(type){
  if(type=="neil"){
      numn++;
    if(numn==4){
      numn=0;
    }
  }
  else if(type=="neir"){
    numn--;
    if(numn==-1){
      numn=3;
    }
  }
       /*var of=-numn*276;*/
      tukuang.animate({left:-276*numn});
      dian.css({border:"1px #b0b0b0 solid",background:"#b0b0b0"});
      dian.eq(numn).css({border:"2px #ff6700 solid",background:"#fff"});


}
neimove("neil");

/*dian.each(function(){
       var dians=$(this).index();
      dian.eq(dians).click(function(){
        dian.each(function(){
            dian.css({border:"1px #b0b0b0 solid",background:"#b0b0b0"});
      })
    tukuang.animate({left:-276*numn});
      /*var of=-numn*276;
      dian.eq(dians).css({border:"2px #ff6700 solid",background:"#fff"});
  })
})*/

var nrli1=$(".neirong .neirong1");
nrli1.hover(function(){
  $(".tushu-btnl1").css({opacity:"1"});
$(".tushu-btnl1").click(function(){
    neimove("neil");
  })
  $(".tushu-btnr1").css({opacity:"1"});
  $(".tushu-btnr1").click(function(){
    neimove("neir");
  })
},function(){
  $(".tushu-btnl1").css({opacity:"0"})
  $(".tushu-btnr1").css({opacity:"0"})
})


/*var nrli=$(".neirong>li");
nrli.each(function(){
  var nrlis=$(this).index();
nrli.eq(nrlis).hover(function(){
  $(".tushu-btnl").eq(nrlis).css({opacity:"1"})
  $(".tushu-btnr").eq(nrlis).css({opacity:"1"})
},function(){
  $(".tushu-btnl").eq(nrlis).css({opacity:"0"})
  $(".tushu-btnr").eq(nrlis).css({opacity:"0"})
})
})
*/

var dian1=$(".tushu-dian1 li");
var numn1=0;
var tukuang1=$(".tukuang1");
dian1.each(function(){
  var of=-numn1*276;
  var dians1=$(this).index();
  numn1+=1;
  if(numn1===4){
    numn1=0;
  }
  dian1.eq(dians1).click(function(){
    dian1.eq(dians1).each(function(){
        dian1.css({border:"1px #b0b0b0 solid",background:"#b0b0b0"});
    })
      tukuang1.css({"transform":"translateX("+of+"px)"});
      dian1.eq(dians1).css({border:"2px #ff6700 solid",background:"#fff"});
  })
})

var dian2=$(".tushu-dian2 li");
var numn2=0;
var tukuang2=$(".tukuang2");
dian2.each(function(){
  var of=-numn2*276;
  var dians2=$(this).index();
  numn2+=1;
  if(numn2===4){
    numn2=0;
  }
  dian2.eq(dians2).click(function(){
    dian2.eq(dians2).each(function(){
        dian2.css({border:"1px #b0b0b0 solid",background:"#b0b0b0"});
    })
      tukuang2.css({"transform":"translateX("+of+"px)"});
      dian2.eq(dians2).css({border:"2px #ff6700 solid",background:"#fff"});
  })
})

var dian3=$(".tushu-dian3 li");
var numn3=0;
var tukuang3=$(".tukuang3");
dian3.each(function(){
  var of=-numn3*276;
  var dians3=$(this).index();
  numn3+=1;
  if(numn3===4){
    numn3=0;
  }
  dian3.eq(dians3).click(function(){
    dian3.eq(dians3).each(function(){
        dian3.css({border:"1px #b0b0b0 solid",background:"#b0b0b0"});
    })
      tukuang3.css({"transform":"translateX("+of+"px)"});
      dian3.eq(dians3).css({border:"2px #ff6700 solid",background:"#fff"});
  })
})





















})