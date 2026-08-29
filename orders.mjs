// Reading orders, as a function.
//
// Kept out of `server.mjs` so it can be queried without booting anything — SQLite is a
// file, so a test can migrate, seed and query with no service listening.

export function selectOrders(db, status) {
  if (status) {
    return db.prepare('select id, customer, status, cents from orders where status = ? order by id').all(status);
  }
  return db.prepare('select id, customer, status, cents from orders order by id').all();
}
