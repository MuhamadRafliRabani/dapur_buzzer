export const calEngagementRate = (
  like: number | undefined,
  comment: number | undefined,
  followers: number | undefined
) => {
  if (like && comment && followers) {
    return (((like + comment) / followers) * 100).toFixed(1) + "%";
  }

  return 0;
};
