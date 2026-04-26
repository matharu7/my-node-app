const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    res.send('<h1>Hello from CI/CD Pipeline!</h1><p>Deployment successful.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
