import config from './common/config.js';
import app from './app.js';

const PORT = config.PORT || 4000;

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
