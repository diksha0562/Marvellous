import React from 'react';
class LoginBox extends React.Component {
    render() {
        return (
            <div id="login-box" className="login-box visible widget-box no-border">
                <div className="widget-body">
                    <div className="widget-main">
                        <h4 className="header blue lighter bigger">
                            <i className="ace-icon fa fa-coffee green"></i>
                            Please Enter Your Information
											</h4>

                        <div className="space-6"></div>

                        <form>
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="text" className="form-control" placeholder="Username" />
                                        <i className="ace-icon fa fa-user"></i>
                                    </span>
                                </label>

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="password" className="form-control" placeholder="Password" />
                                        <i className="ace-icon fa fa-lock"></i>
                                    </span>
                                </label>

                                <div className="space"></div>

                                <div className="clearfix">
                                    <label className="inline">
                                        <input type="checkbox" className="ace" />
                                        <span className="lbl"> Remember Me</span>
                                    </label>

                                    <button type="button" className="width-35 pull-right btn btn-sm btn-primary">
                                        <i className="ace-icon fa fa-key"></i>
                                        <span className="bigger-110">Login</span>
                                    </button>
                                </div>

                                <div className="space-4"></div>
                            </fieldset>
                        </form>

                       

                        <div className="space-6"></div>

                       
                    </div>

										<div className="toolbar clearfix">
                        <div>
                            <a href="#" data-target="#forgot-box" className="forgot-password-link">
                                <i className="ace-icon fa fa-arrow-left"></i>
                                I forgot my password
												</a>
                        </div>

                        <div>
                            <a href="#" data-target="#signup-box" className="user-signup-link">
                                I want to register
													<i className="ace-icon fa fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
								</div>
        )
    }
}
export default LoginBox;