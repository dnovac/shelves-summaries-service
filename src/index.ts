import { Server } from './server';
import { config } from './config';


const server = new Server(Number.parseInt(config.port));
server.start();
