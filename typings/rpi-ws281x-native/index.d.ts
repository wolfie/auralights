type Options = {
  /** default 800000 */
  frequency?: number;
  /** default 5 */
  dmaNum?: number;
  /** default 18 */
  gpioPin?: number;
  /** default 0 */
  invert?: number;
  /** default 255 */
  brightness?: number;
};

declare module "rpi-ws281x-native" {
  import { EventEmitter } from "events";
  interface Ws281x extends EventEmitter {
    /**
     * configures PWM and DMA for sending data to the LEDs
     *
     * @param {Number} numLeds  number of LEDs to be controlled
     * @param {?Object} options  (acutally only tested with default-values)
     *                           intialization-options for the library
     *                           (PWM frequency, DMA channel, GPIO, Brightness)
     */
    init(numLeds: number, options?: Options): void;

    /**
     * register a mapping to manipulate array-indices within the
     * data-array before rendering.
     *
     * @param {Array.<Number>} mapping  the mapping, indexed by destination.
     */
    setindexMapping(mapping: number[]): void;

    /**
     * send data to the LED-strip.
     *
     * @param {Uint32Array} data  the pixel-data, 24bit per pixel in
     *                            RGB-format (0xff0000 is red).
     * @return {Uint32Array} data as it was sent to the LED-strip
     */
    render(data: Uint32Array): Uint32Array;

    setBrightness(brightness: number): void;

    /**
     * clears all LEDs, resets the PWM and DMA-parts and deallocates
     * all internal structures.
     */
    reset(): void;

    isStub(): boolean;

    indexMapping: { mirrorMatrixX(rows: number, cols: number): Uint16Array };
  }

  const ws281x: Ws281x;
  export default ws281x;
}
