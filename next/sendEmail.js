/api/sendEmail.js
https://www.npmjs.com/package/emailjs
<<<<<npm i emailjs
import { SMTPClient } from 'emailjs';

export default async  function handler(req, res) {
    
    const aa = "variable"; ejemeplo

    const client = new SMTPClient({
        user: '',
        password: '',
        host: '',
        ssl: true,
        port : ''
    });

    try {
        const message = await client.sendAsync({
            text: '<h1>esto e sun test liquid</h1>',
            from: '<admin@orfibesa.es>',
            to: '<javier235hj@hotmail.com>',
            cc: '<admin@orfibesa.es>',
            subject: 'testing emailjs',
             attachment: [
                { data: `<html><h1 style="color:red;">${aa}</h1></html>`, alternative: true },
            ],
        });
        res.status(200).json({status : 'ok'});

    } catch (err) {
        
        res.status(200).json({status : `failed : ${err}`});
    }

}
