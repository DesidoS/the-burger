export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Please fill in this field",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "You have exceeded the limit",
});
