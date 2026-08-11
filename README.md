# Orders — a small storefront

A deliberately tiny Node application: an orders list, a JSON API over it, and a
SQLite database. No dependencies — `node:sqlite` and `node:http` are the whole list.

## Running it

```sh
npm install
node db.mjs migrate
node db.mjs seed
PORT=8080 node server.mjs      # http://127.0.0.1:8080
```

- `GET /` — the orders page
- `GET /api/orders` — every order as JSON; takes an optional `?status=` filter
- `GET /healthz` — readiness

## Tests

```sh
node --test
```

## Layout

| | |
|---|---|
| `server.mjs` | routing, and nothing else |
| `page.mjs` | renders the orders page |
| `orders.mjs` | the orders query |
| `db.mjs` | `migrate`, `seed`, and opening the database |
