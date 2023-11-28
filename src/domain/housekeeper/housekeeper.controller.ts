import { FastifyInstance } from 'fastify';

export class HousekeeperController {

  private server: FastifyInstance;


  constructor(server: FastifyInstance) {
    this.server = server;
  }

  public async initHousekeeperController() {
    this.server.get('/heartbeat', async (request, reply) => {
      return 'alive';
    });
  }
}
