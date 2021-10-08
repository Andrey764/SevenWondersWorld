export class WonderWorldObject{
    public Path?:string;
    constructor(public Title:string, public Description:string){
        this.Title = Title;
        this.Description = Description;
        this.CreatePath();
    }
    CreatePath(){
        this.Path = `assets/${this.Title}.jpg`
    }
}