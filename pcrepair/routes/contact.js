var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

//send email
router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    var mailOptions = {
        from: '"x and y " < >',
        to: '',
        subject: 'Test email',
        text: 'Hello x and y',
        html: '<p>heyyyy</p>'
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    });

})

module.exports = router;
