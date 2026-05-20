export const toPersian = (n) =>
  String(n).replace(/\d/g, (d) => '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'[d]);

export const toEnglish = (str) =>
  String(str).replace(/[\u06f0-\u06f9]/g, (d) => d.charCodeAt(0) - 1776);
