function calculateRowSpan(usageDetails) {
  const breakdown = usageDetails?.breakdown;

  if (breakdown !== undefined) {
    return 1 + breakdown.reduce((a, b) => a + calculateRowSpan(b.usageDetails), 0);
  }

  return 1;
}

export default calculateRowSpan;
