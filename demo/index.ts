import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Discord } from '../src/discord';

const auth = new SalteAuth({
  providers: [
    new Discord({
      clientID: '705261926048989185',
      responseType: 'code',

      routes: true
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login({
    provider: 'discord'
  });
});

document.body.appendChild(button);
