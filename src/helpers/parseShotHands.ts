export const parseShorthand = (value: string | number): number => {
  if (typeof value !== "string") {
    value = value?.toString();
  }
  if (value.includes("k")) {
    return parseFloat(value.replace("k", "")) * 1_000;
  } else if (value.includes("m")) {
    return parseFloat(value.replace("m", "")) * 1_000_000;
  } else if (value.includes("b")) {
    return parseFloat(value.replace("b", "")) * 1_000_000_000;
  } else {
    return parseFloat(value);
  }
};

export const safeParseFloat = (value: string): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};
