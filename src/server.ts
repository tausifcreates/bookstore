import { config } from 'dotenv'
config({ path: './.env' })
import http from 'http';
import { app } from './app';

const httpServer = http.createServer(app);

const port = process.env.PORT || 3001;

httpServer.listen(port, () => {
	console.log('Express server listening on *:' + port);
});
