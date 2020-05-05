import express from 'express';
import { World } from './interfaces';

class Hello implements World {
    greet = (): string => 'Hello, world!';
}

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const HelloWorld = new Hello();
    res.send(HelloWorld.greet());
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
