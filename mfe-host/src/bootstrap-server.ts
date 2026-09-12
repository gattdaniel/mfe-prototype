import { AngularNodeAppEngine, createNodeRequestHandler } from '@angular/ssr/node';
import express from 'express';

const app = express();
const angularApp = new AngularNodeAppEngine();

export const reqHandler = createNodeRequestHandler(app);
