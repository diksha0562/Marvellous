import React from 'react';
class SignUpBox extends React.Component {
    render() {
        return (

            <div id="signup-box" className="signup-box widget-box no-border">
                <div className="widget-body">
                    <div className="widget-main">
                        <h4 className="header green lighter bigger">
                            <i className="ace-icon fa fa-users blue"></i>
                            New User Registration
                                        </h4>

                        <div className="space-6"></div>
                        <p> Enter your details to begin: </p>

                        <form>
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="email" className="form-control" placeholder="Email" />
                                        <i className="ace-icon fa fa-envelope"></i>
                                    </span>
                                </label>

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

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="password" className="form-control" placeholder="Repeat password" />
                                        <i className="ace-icon fa fa-retweet"></i>
                                    </span>
                                </label>

                                <label className="block">
                                    <input type="checkbox" className="ace" />
                                    <span className="lbl">
                                        I accept the
                                                        <a href="#">User Agreement</a>
                                    </span>
                                </label>

                                <div className="space-24"></div>

                                <div className="clearfix">
                                    <button type="reset" className="width-30 pull-left btn btn-sm">
                                        <i className="ace-icon fa fa-refresh"></i>
                                        <span className="bigger-110">Reset</span>
                                    </button>

                                    <button type="button" className="width-65 pull-right btn btn-sm btn-success">
                                        <span className="bigger-110">Register</span>

                                        <i className="ace-icon fa fa-arrow-right icon-on-right"></i>
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                    <div className="toolbar center">
                        <a href="#" data-target="#login-box" className="back-to-login-link">
                            <i className="ace-icon fa fa-arrow-left"></i>
                            Back to login
                                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpBox