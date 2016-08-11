/**
 * Return a number multiplied by two.
 * @memberof main
 * @param a A number to be doubled
 * @returns The input number, doubled
 */
function double (a: number): number {
  // Do some stuff
  return a * 2;
}

/**
 * Return a number multiplied by two.
 * @memberof main
 * @param a A number to be tripled
 * @returns The input number, tripled
 */
function triple (a: number): number {
  // Do some stuff
  return a * 3;
}

/**
 * This is our project's entry point module.
 *
 * @module main
 */
export { double, triple };
export default {
  double,
  triple
};
