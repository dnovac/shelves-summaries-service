import { FastifyInstance } from 'fastify';

export class BookController {

  private server: FastifyInstance;


  constructor(server: FastifyInstance) {
    this.server = server;
  }

  public async initBookController() {
    this.server.get('/book', async (request, reply) => {
      return {data: 'book'};
    });
  }
}
