import ws281x from "rpi-ws281x-native";

const LED_COUNT = 60;

process.on("SIGINT", function() {
  ws281x.reset();
  process.nextTick(function() {
    process.exit(0);
  });
});

ws281x.init(LED_COUNT);
const leds = new Uint32Array(LED_COUNT);

const loop = () => {
  for (var i = 0; i < LED_COUNT; i++) {
    leds[i] = 0xffffff;
  }
  ws281x.render(leds);
};

global.setInterval(loop, 100);
