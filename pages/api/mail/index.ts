import {NextApiRequest, NextApiResponse} from "next";
import {createTransport} from "nodemailer"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405)
            .setHeader('Allow', 'POST')
            .end('Method Not Allowed');
    }

    try {
        let transporter = createTransport({
            host: "smtp.mandrillapp.com",
            port: 587,
            auth: {
                user: "letempsdunfut@gmail.com",
                pass: process.env.MAILCHIMP_KEY,
            },
        });

        await transporter.sendMail({
            from: '"reservation bot"<noreplay@letempsdunfut.ca>', // sender address
            to: 'order@letempsdunfut.ca', // list of receivers
            subject: `Message de location`, // Subject line
            text: JSON.stringify(req.body), // plain text body
            priority: "high"
        })

        return res.json({status: 200})
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : 'Internal server error'
        return res.status(500).json({statusCode: 500, message: errorMessage})
    }

}

export default handler;