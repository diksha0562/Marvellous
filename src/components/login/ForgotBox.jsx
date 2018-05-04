import React from 'react';
class ForgotBox extends React.Component {
    render() {
        return (
            <div id="forgot-box" className="forgot-box widget-box no-border">
                <div className="widget-body">
                    <div className="widget-main">
                        <h4 className="header red lighter bigger">
                            <i className="ace-icon fa fa-key"></i>
                            Retrieve Password
											</h4>

                        <div className="space-6"></div>
                        <p>
                            Enter your email and to receive instructions
											</p>

                        <form>
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="email" className="form-control" placeholder="Email" />
                                        <i className="ace-icon fa fa-envelope"></i>
                                    </span>
                                </label>

                                <div className="clearfix">
                                    <button type="button" className="width-35 pull-right btn btn-sm btn-danger">
                                        <i className="ace-icon fa fa-lightbulb-o"></i>
                                        <span className="bigger-110">Send Me!</span>
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                    <div className="toolbar center">
                        <a href="#" data-target="#login-box" className="back-to-login-link">
                            Back to login
												<i className="ace-icon fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ForgotBox;