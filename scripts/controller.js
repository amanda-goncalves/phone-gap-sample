var app = function(app) {  // module pattern      
    app.makeController = function(m, v, stage) {         
        const c = {};     
        
        v.page1.tabs.change(function () {
            if (v.page1.tabs.text == "play") v.pages.go(v.page2, "down");
        });        
        
        

        
        // v.slider.on("change", ()=>{ // not chainable
        //     m.data[1] = v.slider.currentValue;
        //     m.updateData();
        // })
        
        frame.on("resize", () => {  
            
            v.manager.resize();
            
            stage.update();
        });
                
        return c;
    }
    return app; // module pattern
}(app||{}); // module pattern
