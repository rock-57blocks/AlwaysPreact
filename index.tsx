import { render } from "preact";
import TestPlayer from "./src/test-player";

const bootstrap = () => {
    render(<TestPlayer />, document.getElementById('app')!);
};

bootstrap();