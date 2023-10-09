function calculateColSpan(usageDetails) {
  const breakdown = usageDetails?.breakdown;

  if (breakdown !== undefined && breakdown.length > 0) {
    return 1 + calculateColSpan(breakdown[0].usageDetails);
  }

  return 0;
}

export default calculateColSpan;
