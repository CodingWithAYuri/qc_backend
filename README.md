# Server
```bash
npm install
node app.js
```

# Register
```bash
curl -X POST --data '{"name":"nameUser", "email":"a@a.com", "password": "senha"}' -H "Content-Type: application/json" http://localhost:3000/register
```

# Login
```bash
curl -X POST --data '{"email":"a@a.com", "password": "senha"}' -H "Content-Type: application/json" http://localhost:3000/auth
```