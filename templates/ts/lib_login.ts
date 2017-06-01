#(c) 2017 Nils Reichert & Felix Pojtinger

lib.login < plugin.tx_felogin_pi1
lib.login {
   storagePid = 100
   templateFile = fileadmin/templates/ext/felogin/FrontendLogin-Info.html
   showForgotPasswordLink = 0
   showPermaLogin = 0

 _CSS_DEFAULT_STYLE >
  _LOCAL_LANG.de {
    #username = Kundenlogin:
    ll_welcome_header =
    ll_welcome_message =
    ll_error_header = 
    ll_error_message = Benutzer und/oder Passwort ist falsch!
    ll_success_header = Kunden-Login3
    ll_status_header = 
    ll_status_message = 
  }
  errorMessage_stdWrap {
    wrap = <div class="error">|</div>
  }

   # redirect options
   ##redirectMode = userLogin, groupLogin, login, logout, loginError, getpost, referer, refererDomains
   ##redirectFirstMethod = 0
  redirectMode = groupLogin,userLogin,login,logout,loginError
  #redirectFirstMethod = 1

   redirectPageLogin = 101
   redirectPageLoginError = 107
   redirectPageLogout = 107
   
   # disable redirect with one switch
   redirectDisable = 0
   
   showLogoutFormAfterLogin = 0
   dateFormat = Y.m.d H:i

   welcomeHeader_stdWrap.wrap = <h2>|</h2>
   welcomeMessage_stdWrap.wrap = <p>|</p>
    
}