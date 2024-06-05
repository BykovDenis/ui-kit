function calculateColSpan(usageDetails: any): number {
  const breakdown = usageDetails?.breakdown;

  if (breakdown !== undefined && breakdown.length > 0) {
    return 1 + calculateColSpan(breakdown[0].usageDetails);
  }

  return 0;
}

export default calculateColSpan;
