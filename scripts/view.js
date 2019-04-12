var app = function(app) {  // module pattern      
    app.makeView = function(m, stage) {
        var stageW = stage.width;
        var stageH = stage.height;
        const v = {}; 
        
        STYLE = {
            type:{
                Tabs:{currentSelected:false}
            }
        }
        
        const manager = v.manager = new Manager();
        
        const page1 = v.page1 = new Container(stageW, stageH);        
        let header = new Container().addTo(page1);          
        new Label(m.title).addTo(header);
        frame.asset('title.png').addTo(page1);
    
        let content = new Container(500, 500).addTo(page1);
       

        let footer = v.page1.tabs = new Tabs({tabs:["play"]}).addTo(page1).center();
        
        footer.on("click",function(){
            playgame();
        })

        manager.add(new Layout(page1, [
            {object:header, marginTop:2},
            {object:content, marginTop:2, backgroundColor:"#171619"},
            // {object:footer, marginBottom:2}            
        ], 2, "#171619", true, null, stage));
        
        const page2 = v.page2 = new Container(stageW, stageH);        
        header = new Container().addTo(page2);          
       
        var retryButton = new Button({width:250, label:"Retry", backgroundColor:purple, rollBackgroundColor:pink, color:white, rollColor:" #DAF7A "});
   
        makegame();
        function makegame(){
        content = new Container(500, 500).addTo(page2);
        var fourteen = new Scroller(frame.asset("14.png").addTo());
       
        // var up = new Button(100,50,"up",purple,pink,).loc(800,450)
        // var down = new Button(100,50,"down",purple,pink,).loc(800,550)
       


        player = new Sprite(frame.asset("cow.png"),8,7).sca(.5).center().run({loop:true}).drag();
  
      
       

        var rectangles = new Container(stageW, stageH).addTo(stage);

        var colors = [frame.pink, frame.green, frame.blue, frame.purple, frame.yellow, frame.red, frame.orange];
        var inter = interval(800, function() {
        
            new Rectangle(1,5,shuffle(colors)[0])
                .addTo(rectangles)
                .pos(stageW, rand(stageH-50))
                .reg(5)
                .animate({
                    obj:{scaleX:stageW},
                    time:5000,
                    fade:true,
                    ease:"linear",
                    call:function(target) {
                        target.done = true;
                    }
                });
        });

        var lives = 3;
			var score = new Label({
				text:lives,
				backing:new Rectangle(100,60,frame.grey),
				color:frame.light,
				size:50
			}).addTo().pos(40,30)
    

            Ticker.add(function() {
				loop(rectangles, function(rect){
					if (rect.done) {
						rect.removeFrom(rectangles);
					} else {
						if (player.hitTestBounds(rect)) {
						
							rect.removeFrom(rectangles);
							lives--;
							score.text = lives;
							if (lives == 0) {
								inter.clear();
                                stopAnimate();
                                retryButton.centerReg();
								// mc.enabled = false;
								
						
							}
						}
					}
				}, true);
			});

			stage.update();
		

        }
        retryButton.on("click",function () {
            zog("retry clicking");
            zgo("index.html"); //re-load document
           });







        // footer = v.page2.tabs = new Tabs({tabs:[1,2]}).addTo(page2);
        // manager.add(new Layout(page2, [
        //     {object:header, marginTop:2},
        //     {object:content, marginTop:2, backgroundColor:blue},
        //     {object:footer, marginTop:2}            
        // ], 2, yellow, true, null, stage));
        
        manager.add(v.pages = new Pages([
            {page:page1, swipe:[null, null, page2, page2]},
            {page:page2, swipe:[null, null, page1, page1]}
        ], "slide", 500).addTo());
        
        return v;
        
    }
    return app; // module pattern
}(app||{}); // module pattern






