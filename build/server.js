import config from './common/config.js';
import app from './app.js';
var PORT = config.PORT || 4000;
app.listen(PORT, function () {
    return console.log("App is running on http://localhost:" + PORT);
});
