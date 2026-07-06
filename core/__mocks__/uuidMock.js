// uuid v14 ships ESM-only builds, which Jest 27 cannot parse.
// Tests get a minimal CJS shim with the same v4 contract.
const { randomUUID } = require('crypto');

module.exports = { v4: () => randomUUID() };
