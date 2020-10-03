import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 5000;

enableProdMode();

const app = express();

let template = readFileSync(
  join(__dirname, '..', 'dist', 'index.html')
).toString();

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
