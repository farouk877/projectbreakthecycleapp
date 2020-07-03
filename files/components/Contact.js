import React, {Component} from 'react';
import RGF from 'react-google-forms'

class Contact extends Component {
 
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', phoneNumber: '', msg: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit(event) {
        // alert('Donation Amount: $' + this.state.value + ".00");
        event.preventDefault();
        this.sendMessage()
      }

      sendMessage = () => {
        const axios = require('axios');


        const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScym1ZaOZkkajIK6thNpnb_-KjyTdzEAhkY8NF9k3KYdlfoNg/formResponse"

        const nameID = "entry.1415061761" 
        const emailID = "entry.208702895"
        const numberID = "entry.1100408356"
        const msgID = "entry.1101411408"

        const formData = new FormData()

        const CORS_PROXY = 'https://cors-escape.herokuapp.com/'


        formData.append(nameID, this.state.name)
        formData.append(emailID, this.state.email)
        formData.append(numberID, this.state.phoneNumber)
        formData.append(msgID, this.state.msg)

        axios.post(formURL, formData)
            .then(() => {
                this.setState({
                msg: '',
                email: '',
                name: '',
                phoneNumber: ''
                })
            }).catch(() => {
                this.setState({
                    msg: '',
                    email: '',
                    name: '',
                    phoneNumber: ''
                })
            })
       
      }

    render() {
        return (
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Get in Touch With Us</h2>
                                <p className="section__meta">Write a message</p>
                                <p className="section__desc">
                                    This is where we will be allowing new artists to collobrate with the form
                                </p>
                                <ul className="section__list">
                                    <li><a href="https://www.instagram.com/projectbreakthecycle/?hl=en"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-shared">
                            
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 form-group">
                                            <input className="form-control" name = 'name' value = {this.state.name}  type="text" autoComplete="given-name" placeholder="Full Name" onChange = {this.handleChange} required/>
                                            {/* <input className="form-control" type="text" name="name" placeholder="Full Name" /> */}
                                        </div>

                                        <div className="col-lg-6 col-sm-6 form-group">
                                            <input id="emailAddressMsgInput" name = 'email' value = {this.state.email} type="email" autoComplete="email" className="form-control" placeholder="Email address" onChange = {this.handleChange} required/>
                                            {/* <input className="form-control" type="email" name="email"
                                                placeholder="Email Address" /> */}
                                        </div>

                                        <div className="col-lg-12 form-group">
                                            <input id="phoneNumberMsgInput" name = 'phoneNumber' value = {this.state.phoneNumber} type="number" className="form-control" placeholder="Phone Number" onChange = {this.handleChange}/>

                                            {/* <input className="form-control" type="number" name="phone"
                                                placeholder="Phone Number" /> */}
                                        </div>

                                        <div className="col-lg-12 col-sm-12 form-group">
                                            <textarea id="messageContentInput" name = 'msg' value={this.state.msg} type="text" className="form-control" placeholder="Write a Message" onChange = {this.handleChange} required></textarea>

                                            {/* <textarea className="textarea" name="message"
                                                    placeholder="Write a Message"></textarea> */}
                                        </div>

                                        <div className="col-lg-12 col-sm-12">
                                            <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <RGF config={formConfig} formURL={"https://docs.google.com/forms/d/e/1FAIpQLScym1ZaOZkkajIK6thNpnb_-KjyTdzEAhkY8NF9k3KYdlfoNg/viewform?embedded=true"}/> */}

                    </div>
                    <div className="row contact-detail-action">
                        <div className="col-lg-4">
                            <div className="contact-item contact-item1">
                                <h3 className="contact__title">About</h3>
                                <p className="contact__desc">
                                    We are looking for artists and nonprofits to collobrate with us
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-item contact-item2">
                                <h3 className="contact__title">Address</h3>
                                <p className="contact__desc">
                                    660 broklyn street , 88 new york, United states of
                                    america
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-item contact-item3">
                                <h3 className="contact__title">Contact</h3>
                                <p className="contact__desc">
                                    needhelp@oxpitan.com <br />
                                    666 888 000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
};
export default Contact;
