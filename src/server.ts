import fastify, { FastifyInstance } from 'fastify';
import { HousekeeperController } from './domain/housekeeper/housekeeper.controller';
import { SummaryController } from './domain/summary/summary-controller';
import { BookController } from './domain/book/book-controller';

export class Server {

  /**
   * The Fastify App
   */
  public server: FastifyInstance;

  public constructor(private port: number) {
    this.server = fastify({
      logger: true
    });

    this.registerApi().then(
      () => this.server.log.info(`API routes registered OK!`),
      (err) => this.server.log.error(`Error registering API!`),
    );
  }


  /**
   * Run the server!
   */
  public start() {
    return this.server.listen({ port: this.port }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`✅ Server started and listening at ${address}.`);
    });
  }

  private async registerApi() {
    // routes
    const houseKeeperController = new HousekeeperController(this.server);
    await houseKeeperController.initHousekeeperController();

    const bookController = new BookController(this.server);
    await bookController.initBookController();

    const summaryController = new SummaryController(this.server);
    await summaryController.initSummaryController();

  }

}
