import React from 'react';
import axios from 'axios';
class SignUpBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            input_text:{
                'name':'',
                'employee_Id':'',
                'email':''
            },
            status:''
        }
        this.click_register = this.click_register.bind(this);
        // this.handle_input_text = this.handle_input_text.bind(this);
    }

    display_alert(status){
        if(status === '200'){
            alert('you are now registered. Please go to login page')
        } else if(status === '208'){
            alert('you are already registered. Please go to login page')
        } else if(status === '400'){
            alert('some fields are missing. Please try again')
        }
    }

    handle_input_text(e, change_val) {
        let input_text = this.state.input_text;
        input_text[change_val] = e.target.value;
        this.setState({input_text:input_text});
    }

    click_register(){
        // axios.post('http://localhost:1337/d0ba1668.ngrok.io/marvel/registration', { empId: this.state.input_text['employee_Id'], email: this.state.input_text['email'], name: this.state.input_text['name'] },{'Content-Type': 'application/json'})
        // .then(function(response){
        //   console.log('saved successfully');
        //   this.setState({message:response.message})
        // }); 
        fetch('http://localhost:1337/172.23.37.143:8080/marvel/registration', {
                method: 'POST',
                headers : new Headers({
                    'Content-Type': 'application/json'
                  }),
                body:JSON.stringify({ empId: this.state.input_text['employee_Id'], email: this.state.input_text['email'], name: this.state.input_text['name'] })
            }).then((res) => {
                console.log(res.status);
                this.setState({status: ''+res.status});
                this.display_alert(this.state.status);
            })
            .catch((err)=>console.log(err))
        }
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
                                        <input type="email" className="form-control" placeholder="Email" onChange={e => this.handle_input_text(e, 'email')}/>
                                        <i className="ace-icon fa fa-envelope"></i>
                                    </span>
                                </label>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="text" className="form-control" placeholder="Username" onChange={e => this.handle_input_text(e, 'name')}/>
                                        <i className="ace-icon fa fa-user"></i>
                                    </span>
                                </label>

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="text" className="form-control" placeholder="Employee Id" onChange={e => this.handle_input_text(e, 'employee_Id')}/>
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

                                    <button type="button" className="width-65 pull-right btn btn-sm btn-success" onClick = {this.click_register}>
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