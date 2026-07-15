export const getPaginationRange = (
  current,
  total,
  siblingCount = 2,
) => {
  const windowSize = siblingCount * 2 + 1;

  if (total <= windowSize + 1) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = Math.max(current - siblingCount, 1);
  let end = Math.min(start + windowSize - 1, total);
  start = Math.max(end - windowSize + 1, 1);

  const range = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  const showRightDots = end < total - 1;
  const showLastPage = end < total;

  return [
    ...range,
    showRightDots ? "dots" : null,
    showLastPage ? total : null,
  ].filter(Boolean);
};