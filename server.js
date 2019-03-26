import app from './app';
import { logger } from './helpers';

const { PORT = 5000 } = process.env;
app.listen(PORT, () => logger.info(`Server..Running..On..Port.. ${PORT} -(*_*)-`));
