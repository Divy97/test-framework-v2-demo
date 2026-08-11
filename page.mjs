// The orders page, as a function.
//
// Kept out of `server.mjs` so it can be rendered without booting anything.

export const page = (rows) => `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Orders</title></head>
<body>
<h1>Ordres</h1>
<table>
<tr><th>Order</th><th>Customer</th><th>Status</th><th>Total</th></tr>
${rows
  .map(
    (row) =>
      `<tr><td>${row.id}</td><td>${row.customer}</td><td>${row.status}</td>` +
      `<td>$${(row.cents / 100).toFixed(2)}</td></tr>`,
  )
  .join('\n')}
</table>
</body>
</html>
`;
