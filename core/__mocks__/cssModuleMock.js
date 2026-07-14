// CSS Modules in jest: every class name resolves to itself, so className
// lands in snapshots and queries instead of undefined (the generic
// styleMock returns {} and loses them)
module.exports = new Proxy(
  {},
  {
    get: (target, key) => (key === '__esModule' ? false : key),
  }
);
