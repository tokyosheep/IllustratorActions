
    
    
    function getRandomName(){
        return Math.random().toString(32).substring(2);
    }

    var CreateAction = function(action,value){
        this.set = getRandomName();
        this.actionName = getRandomName();
        this.actionPath = Folder.desktop + "/" + this.set + ".aia";
        this.str = action(this.actionName,this.set,value);
    }
    
    CreateAction.prototype.launchAction = function(){
        if(this.str === null){
            alert("the action is invalid");
            return false;
        }
        var f = new File(this.actionPath);
        f.open("w");
        f.write(this.str);
        f.close();
        try{
            app.loadAction(f);
            app.doScript(this.actionName,this.set);
            app.unloadAction(this.set,"");
        }catch(e){
            alert(e);
        }finally{
            f.remove();
        }
    }



