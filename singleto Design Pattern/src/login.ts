import Setting from "./setting";
class loginSetting{
    loginPageSetting(){
        
    const login=Setting.createInstance()
    login.fontSize=34;
    login.theme='orange';
    console.log(`Login page setting : \n `);
    console.log(`  font Size : ${login.fontSize} \n `);
    console.log(`       them : ${login.theme} \n `);
    }
}
export default loginSetting