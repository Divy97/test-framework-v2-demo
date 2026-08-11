// The project's own suite.

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { migrate, open, seed } from '../db.mjs';
import { page } from '../page.mjs';

test('the seed loads and totals are what the fixture says', () => {
  migrate();
  seed();
  const db = open();
  const rows = db.prepare('select id, cents from orders order by id').all();
  db.close();
  assert.equal(rows.length, 4);
  assert.equal(rows.find((row) => row.id === 3).cents, 999);
});

test('the page renders a row per order', () => {
  migrate();
  seed();
  const db = open();
  const rows = db.prepare('select id, customer, status, cents from orders order by id').all();
  db.close();
  const html = page(rows);
  assert.match(html, /<td>Grace<\/td>/);
  assert.match(html, /\$40\.75/);
});
