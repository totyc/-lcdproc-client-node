//var Client = require('node-rest-client').Client;
var LcdClient = require('./lcdproc-client.js');
//var LcdClient = require('./lcdproc-client-org.js');//.LCDClient;

var cnt = 0;

var lc = new LcdClient(13666,'localhost');

var dir=1;

function update_display() {
  //lc.updateWidget("second_line",1,2,"COUNT " + cnt);
  cnt = cnt + dir;
  //lc.updateWidget("three",1,1,cnt);
  lc.updateWidget("w8",18,cnt);
  //console.log("CNT");
  if ( cnt > 9 ) dir=-1;
  if ( cnt < 1 ) dir=1;
  
}

// his.socket.write("widget_set screen " + name + " " + x + " " + y + " {" + value +"}\

lc.on('init', function() {});
lc.on('ready', function() {
  console.log("width: " + lc.width);
  console.log("height: " + lc.height);
  lc.createScreen("bacon");
  /*
  lc.addWidget("first_line");
  lc.updateWidget("first_line",1,1,"This is a line");
  lc.addWidget("second_line");
  lc.updateWidget("second_line",1,2,"This is a second line");
  */
   //lc.addWidget("two",'num');
   //lc.addWidget("three",'hbar');
      //lc.addWidget("title",'title');
	  //lc.addWidget("scroller",'scroller');
    //lc.addWidget("bar",'bar');
   // lc.updateWidget("first_line",1,2);
	//lc.updateWidget("first_line",2,2);
	//lc.updateWidget("one",'num',1,2);
	//lc.updateWidget("two",'num',1,3);
	//lc.updateWidget("three",1,1,64);
	//lc.updateWidget("title",'welcome');
	//lc.updateWidget("scroller",1,2,20,2,'v',20,'Welcome to Jamica and have a nice day');
	//lc.updateWidget("three",3,10);
	lc.addWidget("w1",'num');
   lc.addWidget("w2",'num');
   lc.addWidget("w3",'num');
   lc.addWidget("w4",'num');
   lc.addWidget("w5",'num');
   lc.addWidget("w6",'num');
   lc.addWidget("w7",'num');
   lc.addWidget("w8",'num');
   
	lc.updateWidget("w1",1,9);
	lc.updateWidget("w2",4,2);
	//lc.updateWidget("w2",5,2);
	lc.updateWidget("w3",7,10);
	lc.updateWidget("w4",8,3);
	lc.updateWidget("w5",11,9);
	lc.updateWidget("w6",14,10);
	lc.updateWidget("w7",15,6);
	lc.updateWidget("w8",18,8);
  //setInterval(update_display, 3000);
  //setTimeout(update_display, 30);
  setInterval(update_display, 1000);
});
lc.init();



