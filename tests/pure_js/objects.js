const A = {};

const B = { oneShorthand };

const C = { oneShorthand, twoShorthand };

const D = { oneShorthand, twoShorthand, threeShorthand };

const E = { oneShorthand, twoShorthand, threeShorthand, fourShorthand };

const F = { oneShorthand, twoShorthand, threeShorthand, fourShorthand, fiveShorthand };

const G = { oneShorthand, oneLonghand: oneLonghand };

const H = { oneMethod() {} };

const I = { oneMethod() { withContents(); } };

const J = { oneArrowFunction: () => {} };

const K = { oneArrowFunction: () => { withContents(); } };

const L = { oneMethod() {}, twoMethod() {} };
