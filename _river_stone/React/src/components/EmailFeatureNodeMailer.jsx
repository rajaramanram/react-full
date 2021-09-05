import React from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';



function EmailFeatureNodeMailer() {

    function sendEmail(request) {
        request.preventDefault();
        
        let post_data={
        from :document.getElementById('from').value,
        to :document.getElementById('to').value,
        subject :document.getElementById('subject').value,
        message :document.getElementById('message').value
        
        }
        console.log("consoel_requst===="+post_data.from)
        
        axios.post("http://localhost:9001/email",post_data).then(resp=>{console.log(resp)}).catch(err =>{ 
                console.log(err)
            });
            //alert("Email Sent")
        
    
        //request.target.reset()
    }    

    return (
        <div className='container'>
            
            <form onSubmit={sendEmail}>
                <h1>Send Email Feature</h1>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="From"  id="from" name="from"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email to"  id="to" name="to"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" id="subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" id="message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            
        </div>
    );
};
export default EmailFeatureNodeMailer