var Setting = /** @class */ (function () {
    function Setting() {
        this.theme = "Light";
        this.fontSize = 10;
    }
    // constructor(font,theme)
    // {
    // //     this.fontSize:num=font;
    // //     this.theme=theme;
    // }
    Setting.createInstance = function () {
        if (Setting._setting == null) {
            return Setting._setting = new Setting();
        }
        return Setting._setting;
    };
    return Setting;
}());
var login = /** @class */ (function () {
    function login() {
    }
    login.prototype.loginSetting = function () {
        var loginThem = Setting.createInstance();
        loginThem.fontSize = 20;
        loginThem.theme = 'dark';
        console.log("The home page setting:  Theme : ".concat(loginThem.theme, ", FontSize:").concat(loginThem.fontSize));
    };
    return login;
}());
var homepageSetting = /** @class */ (function () {
    function homepageSetting() {
    }
    homepageSetting.prototype.homepage = function () {
        var homeTheme = Setting.createInstance();
        homeTheme.fontSize = 17;
        homeTheme.theme = 'gray';
        console.log("The home page setting:  Theme : ".concat(homeTheme.theme, ", FontSize:").concat(homeTheme.fontSize));
    };
    return homepageSetting;
}());
var dashboardsetting = /** @class */ (function () {
    function dashboardsetting() {
    }
    dashboardsetting.prototype.dashboard = function () {
        var dashboard = Setting.createInstance();
        dashboard.fontSize = 10;
        dashboard.theme = 'orange';
        console.log("The home page setting:  Theme : ".concat(dashboard.theme, ", FontSize:").concat(dashboard.fontSize));
    };
    return dashboardsetting;
}());
var dashboardsettingDisplay = new dashboardsetting();
dashboardsettingDisplay.dashboard();
var loginsettingDisplay = new login();
loginsettingDisplay.loginSetting();
var homedsettingDisplay = new homepageSetting();
homedsettingDisplay.homepage();
