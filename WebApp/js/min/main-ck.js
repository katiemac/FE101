function eventWindowLoaded(){function t(t){this.dd=t,this.initEvents()}function i(){function t(t){var i=t.getContext("2d");i.beginPath(),i.save(),i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,t.width,t.height),i.restore()}function i(){Caman("#canvas","../images/ryan_gosling.jpg",function(){this.resize({width:600}),this.crop(600,600),this.render()})}function n(){Caman("#canvas","../images/ryan_gosling.jpg",function(){this.revert(),this.resize({width:600}),this.crop(600,600),this.greyscale(),this.sepia(10),this.exposure(10),this.contrast(15),this.vignette("60%",35),this.render()})}function e(){Caman("#canvas","../images/ryan_gosling.jpg",function(){this.revert(),this.resize({width:600}),this.crop(600,600),this.brightness(7),this.exposure(5),this.contrast(16),this.vibrance(7),this.render()})}function s(t,i,n,e,s,o){if(i){for(var a=i.split(" "),c=a.length,r="",h=0;c>h;h++){var d=r+a[h]+" ",f=t.measureText(d),g=f.width;g>s&&h>0?(t.fillText(r,n,e),r=a[h]+" ",e+=o):r=d}t.fillStyle="#2ac498",t.font="bold 17px sans-serif",t.fillText(r,n,e)}}function o(){s(c,this.value,d,f,r,h)}var a=document.getElementById("canvas"),c=a.getContext("2d");i(),$(" #bw ").click(function(){n()}),$(" #bright ").click(function(){e()}),$(" #done ").click(function(){$("#imageEdit").hide()});var r=a.width-10,h=23,d=(a.width-r)/2,f=15;o(),document.getElementById("text_cnv").onkeyup=o}t.prototype={initEvents:function(){var t=this;t.dd.on("click",function(t){$(this).toggleClass("active"),t.stopPropagation()})}},$(function(){var i=new t($(".dd"));$(document).click(function(){$(i).removeClass("active")})}),i()}window.addEventListener("load",eventWindowLoaded,!1);