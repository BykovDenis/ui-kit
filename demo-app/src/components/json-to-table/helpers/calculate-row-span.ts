function calculateRowSpan(usageDetails: any): number {
  const breakdown = usageDetails?.breakdown;

  if (breakdown !== undefined) {
    return 1 + breakdown.reduce((a: number, b: any) => a + calculateRowSpan(b.usageDetails), 0);
  }

  return 1;
}

export default calculateRowSpan;
