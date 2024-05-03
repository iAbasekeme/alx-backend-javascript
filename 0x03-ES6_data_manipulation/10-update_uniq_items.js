export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of itemsMap.entries()) {
    if (quantity === 1) {
      itemsMap.set(item, 100);
    }
  }

  return itemsMap;
}
