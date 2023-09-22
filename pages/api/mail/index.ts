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
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.MAIL_USERNAME as string,
                clientId: process.env.OAUTH_CLIENTID as string,
                clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN as string,
                privateKey: process.env.PRIVATE_KEY as string,
            }
        });

        await transporter.sendMail({
            from: '"Message bot"<contact@letempsdunfut.ca>', // sender address
            to: 'order@letempsdunfut.ca', // list of receivers
            subject: `Message de location`, // Subject line
            text: JSON.stringify(req.body), // plain text body
        })

        return res.json({status: 200})
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : 'Internal server error'
        return res.status(500).json({statusCode: 500, message: errorMessage})
    }

}

export default handler;