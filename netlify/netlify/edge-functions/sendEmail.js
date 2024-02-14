import { connect } from 'npm:node-mailjet';


const mailjet = connect(
  Deno.env.get('MJ_APIKEY_PUBLIC'),
  Deno.env.get('MJ_APIKEY_PRIVATE')
)

export default () => new Response('hello');

export const config = {
  path: "/sendEmail",
};