function tsStringAsEnum(enumType, value) {
  return Object.values(enumType).includes(value) ? value : undefined;
}

exports.tsStringAsEnum = tsStringAsEnum;
//# sourceMappingURL=index.js.map
