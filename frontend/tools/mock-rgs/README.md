# Mock RGS — lokalne granie w REAKTOR bez Stake Engine

Mini-serwer implementujący protokół RGS (`/wallet/authenticate`, `/wallet/play`,
`/wallet/end-round`, `/bet/event`) i serwujący prawdziwe books wygenerowane
przez math SDK. Pozwala odpalić pełną grę end-to-end lokalnie.

## Użycie

```sh
# 1. wygeneruj books (jeśli nie masz): patrz math/games/reaktor/run.py
# 2. wyciągnij próbkę books:
python3 extract-books.py

# 3. self-signed cert (frontend wymusza https na rgs_url):
openssl req -x509 -newkey rsa:2048 -keyout mock_key.pem -out mock_cert.pem \
  -days 30 -nodes -subj "/CN=localhost"

# 4. start mock RGS (port 8443):
node mock-rgs.mjs                       # normalne tryby
FORCE_MODE=superbonus node mock-rgs.mjs # kazdy spin = super bonus

# 5. zbuduj i serwuj gre:
cd ../.. && pnpm --filter reaktor build
cd apps/reaktor/build && python3 -m http.server 8080

# 6. otworz (przegladarka musi zaakceptowac self-signed cert,
#    np. chromium --ignore-certificate-errors):
# http://localhost:8080/?sessionID=test&rgs_url=localhost:8443&lang=en&currency=USD&device=desktop
```

Spacja = spin. `FORCE_MODE` wymusza pulę books niezależnie od trybu z UI.
