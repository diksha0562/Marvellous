import React from 'react';
import LoginHeader from './LoginHeader';
import LoginBox from './LoginBox';
import ForgotBox from './ForgotBox';
import TopHeader from './TopHeader';
import SignUpBox from './SignUpBox';
class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-layout">
        <div className="main-container">
          <div className="main-content">
            <div className="row" style={{height: 974}}>
              <div className="col-sm-10 col-sm-offset-1">
                <div className="login-container">
                  <LoginHeader />
                  <div className="space-6"></div>
                  <div className="position-relative">
                      <LoginBox/>
                      <ForgotBox/>
                      <SignUpBox/>
                      <TopHeader/>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
       }
    }
export default LoginContainer;