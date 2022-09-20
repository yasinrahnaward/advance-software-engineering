import Setting from "./setting";
class PaymentPageSetting{
    PaymentPage(){
        
    const Payment=new Setting();
    Payment.fontSize=17;
    Payment.theme='blue';
    console.log(`Payment Page setting : \n `);
    console.log(`  font Size : ${Payment.fontSize} \n `);
    console.log(`       them : ${Payment.theme} \n `);
    }
}
export default PaymentPageSetting