//var Client = require('node-rest-client').Client;
var LcdClient = require('./lcdproc-client.js');
//var LcdClient = require('./lcdproc-client-org.js');//.LCDClient;

var cnt = 0;

var lc = new LcdClient(13666,'localhost');

var dir=1;

function update_display() {
  //lc.updateWidget("second_line",1,2,"COUNT " + cnt);
  cnt = cnt + dir;
  lc.updateWidget("horizontal",1,1,cnt);
  //console.log("CNT");
  if ( cnt > 60 ) dir=-1;
  if ( cnt < 1 ) dir=1;
  
}

// his.socket.write("widget_set screen " + name + " " + x + " " + y + " {" + value +"}\

lc.on('init', function() {console.log("HI");});
lc.on('ready', function() {
  console.log("WIDTH: " + lc.width);
  console.log("HEIGHT: " + lc.height);
  var s=lc.createScreen("bacon",{debug:true});
  var eg=lc;
  eg.createScreen("eggs",{debug:true});
  /*
  lc.addWidget("first_line");
  lc.updateWidget("first_line",1,1,"This is a line");
  lc.addWidget("second_line");
  lc.updateWidget("second_line",1,2,"This is a second line");
  */
   //lc.addWidget("one",'num');
   //lc.addWidget("two",'num');
   lc.addWidget("horizontal",'hbar');
      //lc.addWidget("title",'title');
	  lc.addWidget("scroller",'scroller');
    //lc.addWidget("bar",'bar');
   // lc.updateWidget("first_line",1,2);
	//lc.updateWidget("first_line",2,2);
	//lc.updateWidget("one",'num',1,2);
	//lc.updateWidget("two",'num',1,3);
	eg.updateWidget("horizontal",1,1,64);
	//lc.updateWidget("title",'welcome');
	lc.updateWidget("scroller",1,2,20,2,'v',20,'Welcome to Jamica and have a nice day');
	//lc.updateWidget("horizontal",3,10);

  //setInterval(update_display, 20);
});
lc.init();



