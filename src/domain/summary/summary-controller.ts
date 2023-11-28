import { FastifyInstance } from 'fastify';

export class SummaryController {

  private server: FastifyInstance;


  constructor(server: FastifyInstance) {
    this.server = server;
  }

  public async initSummaryController() {
    this.server.get('/summary', async (request, reply) => {
      return {data: 'summary'};
    });
  }
}
