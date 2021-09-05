import nodemailer from 'nodemailer';
export let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vmr.rajaraman@gmail.com',
        pass: 'raja@raman3381'
    }
});


