class Setting{
    private static _setting:Setting;
    public theme:string="Light";
    public fontSize:number=10;
    constructor()
    {

    }
    public static createInstance(){
        if(Setting._setting==null)
         {
           return Setting._setting=new Setting();
         }
         return Setting._setting;
    }
}
export default Setting


