class Setting{
    private static _setting:Setting;
    public theme:string="Light";
    public fontSize:number=10;
    // constructor(font,theme)
    // {
    // //     this.fontSize:num=font;
    // //     this.theme=theme;
    // }
    public static createInstance(){
        if(Setting._setting==null)
         {
           return Setting._setting=new Setting();
         }
         return Setting._setting;
    }
}
class login{

    loginSetting():void{
        const loginThem:Setting=Setting.createInstance();
        loginThem.fontSize=20;
        loginThem.theme='dark';
        console.log(`The home page setting:  Theme : ${loginThem.theme}, FontSize:${loginThem.fontSize}`);
    }
}
class homepageSetting{
    homepage():void{
    const homeTheme:Setting=Setting.createInstance();
    homeTheme.fontSize=17;
    homeTheme.theme='gray';
    console.log(`The home page setting:  Theme : ${homeTheme.theme}, FontSize:${homeTheme.fontSize}`);
}
}
class dashboardsetting{
 dashboard():void{
    const dashboard:Setting=Setting.createInstance();
    dashboard.fontSize=10;
    dashboard.theme='orange';
    console.log(`The home page setting:  Theme : ${dashboard.theme}, FontSize:${dashboard.fontSize}`);
}
}

 let dashboardsettingDisplay=new dashboardsetting()
 dashboardsettingDisplay.dashboard()
 let loginsettingDisplay=new login()
 loginsettingDisplay.loginSetting()
 let homedsettingDisplay=new homepageSetting()
 homedsettingDisplay.homepage()


