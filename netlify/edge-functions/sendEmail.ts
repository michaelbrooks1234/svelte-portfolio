import type { Config, Context } from '@netlify/edge-functions';

const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
)

export default async function handler(req: Request, context: Context) {
  try {
    return new Response(JSON.parse(JSON.stringify(req.body)), {
      status: 200,
    }); 
    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: '$SENDER_EMAIL',
            Name: 'Me',
          },
          To: [
            {
              Email: 'michaelbrooks6897@gmail.com',
              Name: 'Michael Brooks',
            },
          ],
          Subject: 'My first Mailjet Email!',
          TextPart: 'Greetings from Mailjet!',
          HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    });
    return new Response('Email Sent', {
      status: 200,
    }); 
  } catch(e) {
    return new Response(e, {
      status: 500,
    })
  }
}; 
export const config: Config = {
  path: "/hello",
};