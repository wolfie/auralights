import ws281x from "rpi-ws281x-native";

const LED_COUNT = 60;

ws281x.init(60);
const leds = new Uint32Array(LED_COUNT);

const loop = () => {
  for (var i = 0; i < LED_COUNT; i++) {
    leds[i] = 0xffffff;
  }
  ws281x.render(leds);
};

global.setInterval(loop, 100);
