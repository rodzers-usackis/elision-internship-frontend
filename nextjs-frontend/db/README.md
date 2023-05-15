# Running json-server
1. Install json-server globally
```npm i -g json-server```
2. Run json-server
```json-server --watch ./nextjs-frontend/db/db.json --middlewares ./nextjs-frontend/db/prefix.js  --port 8080```