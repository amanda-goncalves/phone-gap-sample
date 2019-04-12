var app = function(app) {  // module pattern      
    app.makeModel = function() {
        // const m = {
        //     title:"Mobile App"    
        // };    
        const m = {};  
        
        if (localStorage && localStorage.exampleData) {
            m.data = JSON.parse(localStorage.exampleData);
        } else {
            m.data = [0, 0];
        }
        
        m.updateData = function() {
            zog("updating");
        }
        
        m.title = "Landing Page";
        return m;
    }
    return app; // module pattern
}(app||{}); // module pattern





