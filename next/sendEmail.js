/api/sendEmail.js
https://www.npmjs.com/package/emailjs
<<<<<npm i emailjs
import { SMTPClient } from 'emailjs';

export default async  function handler(req, res) {
    
    const aa = "variable"; ejemeplo

    const client = new SMTPClient({
        user: 'admin@orfibesa.es',
        password: '32)@#bI~1@54',
        host: 'gnldm1074.siteground.biz',
        ssl: true,
        port : 465
    });

    try {
        const message = await client.sendAsync({
            text: '<h1>esto e sun test liquid</h1>',
            from: '<admin@orfibesa.es>',
            to: '<javier235hj@hotmail.com>',
            cc: '<admin@orfibesa.es>',
            subject: 'testing emailjs',
             attachment: [
                { data: `<html><h1>${aa}</h1></html>`, alternative: true },
            ],
        });
        res.status(200).json({status : 'ok'});

    } catch (err) {
        
        res.status(200).json({status : `failed : ${err}`});
    }

}
