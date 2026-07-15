import getMeasureValue from './get-measure-value';

// number → px, string as is; undefined stays undefined (React drops it)
export const px = (value?: number | string): string | undefined =>
  value == null || value === '' ? undefined : getMeasureValue(value);

// drop undefined entries: React ignores them anyway, but they pollute
// test-renderer snapshots and the style object itself
export const compactStyles = (style: React.CSSProperties): React.CSSProperties => {
  const out: Record<string, unknown> = {};
  for (const key in style) {
    const value = (style as Record<string, unknown>)[key];
    if (value !== undefined) {
      out[key] = value;
    }
  }
  return out as React.CSSProperties;
};
