let express =  require("express");
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser')

let app = express();


app.set("view engine", "jade")
app.use(express.static('public'));
app.get("/", function(req,res){
    res.render("index");
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.post("/enviar", function(req, res, next){

    var email = req.body.mail;
    var comentario = req.body.comentario
    console.log(comentario)
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "dropshipping.juan@gmail.com", // generated ethereal user
            pass: "j123456789J" // generated ethereal password
        }
    });
    let mailOptions = {
        from: '"Fred Foo 👻" <>', // dirección del remitente
        to: 'dropshipping.juan@gmail.com', // lista de receptores
        subject: 'Hello ✔', // Subject linetext: email, // plain text body
        html: "Email: " + email + "<br>" + "Comentario: " + comentario, // html body
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            return console.log(err);
        }
        
        res.redirect("/")
        
    });
});

app.listen(8080);