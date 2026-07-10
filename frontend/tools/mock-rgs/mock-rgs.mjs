import https from 'node:https';
import fs from 'node:fs';

const books = JSON.parse(fs.readFileSync('mock_books.json', 'utf8'));
const FORCE_MODE = process.env.FORCE_MODE || '';
let balance = 1_000_000_000_000;
let betId = 1;

const jurisdiction = {
  socialCasino: false, disabledFullscreen: false, disabledTurbo: false,
  disabledSuperTurbo: false, disabledAutoplay: false, disabledSlamstop: false,
  disabledSpacebar: false, disabledBuyFeature: false, displayNetPosition: false,
  displayRTP: false, displaySessionTimer: false, minimumRoundDuration: 0,
};
const betLevels = [100000, 200000, 400000, 600000, 800000, 1000000, 2000000, 4000000, 10000000];

let activeRound = null;

const server = https.createServer(
  { key: fs.readFileSync('mock_key.pem'), cert: fs.readFileSync('mock_cert.pem') },
  (req, res) => {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
      res.setHeader('Content-Type', 'application/json');
      const send = (obj) => res.end(JSON.stringify(obj));
      const vars = body ? JSON.parse(body) : {};
      console.log(req.url, vars.mode ?? '');
      if (req.url === '/wallet/authenticate') {
        return send({
          balance: { amount: balance, currency: 'USD' },
          config: { minBet: 100000, maxBet: 1000000000, stepBet: 100000,
            defaultBetLevel: 1000000, betLevels, jurisdiction },
          round: null,
        });
      }
      if (req.url === '/wallet/play') {
        const mode = FORCE_MODE || vars.mode || 'base';
        const pool = books[mode] || books.base;
        const book = pool[Math.floor(Math.random() * pool.length)];
        balance -= vars.amount;
        activeRound = {
          betID: betId++, amount: vars.amount,
          payout: Math.round((book.payoutMultiplier / 100) * vars.amount),
          payoutMultiplier: book.payoutMultiplier / 100,
          active: true, state: book.events, mode, event: null,
        };
        return send({ balance: { amount: balance, currency: 'USD' }, round: activeRound });
      }
      if (req.url === '/wallet/end-round') {
        if (activeRound) { balance += activeRound.payout; activeRound = null; }
        return send({ balance: { amount: balance, currency: 'USD' } });
      }
      if (req.url === '/bet/event') {
        return send({ event: vars.event });
      }
      if (req.url === '/wallet/balance') {
        return send({ balance: { amount: balance, currency: 'USD' } });
      }
      res.writeHead(404); send({ error: 'not found' });
    });
  },
);
server.listen(8443, () => console.log('mock RGS on :8443, FORCE_MODE=' + FORCE_MODE));
