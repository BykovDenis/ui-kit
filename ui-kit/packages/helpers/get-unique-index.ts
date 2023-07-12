function getUniqueIndex(): string {
  return `${Math.round(Math.random() * 100000000)}${new Date().valueOf()}`;
}

export default getUniqueIndex;
