import Setting from "./setting";
class dashboarPageSetting{
    
    dashboradSetting(){
        
    const dashboard=new Setting();
    dashboard.fontSize=123;
    dashboard.theme='dark-light';
    console.log(`Dash Board page setting : \n `);
    console.log(`  font Size : ${dashboard.fontSize} \n `);
    console.log(`       them : ${dashboard.theme} \n `);
    }
}
export default dashboarPageSetting