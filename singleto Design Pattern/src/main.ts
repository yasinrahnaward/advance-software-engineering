import loginSetting from "./login";
import dashboarPageSetting from "./dashboard"
import PaymentPageSetting from "./paymentPage"

const login = new loginSetting();
login.loginPageSetting()

const dashboard=new dashboarPageSetting()
dashboard.dashboradSetting();

const paymentPage=new PaymentPageSetting()
paymentPage.PaymentPage()

