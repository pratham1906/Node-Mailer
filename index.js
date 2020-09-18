const nodemailer=require('nodemailer');

var transport=nodemailer.createTransport({
    service:'gmail',
    secure:false,
    auth:{
        user:"xyz@gmail.com",
        pass:"******"
    },
    tls: {
        rejectUnauthorized: false
      }
});

var mailOptions={
    from:'xyz@gmail.com',
    to:'xyz@gmail.com',
    subject:'Mail Template',
    text:`Thankyou You For Using Our Service`
}

transport.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Email Sent Successfully"+info.response);
    }
})