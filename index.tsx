import { render } from "preact";
import TestPlayer, { muteVideo } from "./src/test-player";

const bootstrap = () => {
    render(<TestPlayer />, document.getElementById('app')!);
    window.setTimeout(() => {
        muteVideo.value = true;
    }, 3000);
};

bootstrap();