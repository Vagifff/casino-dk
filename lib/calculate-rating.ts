export function calculateRating(order: number): number {
  if (order === 1) return 9.9
  if (order === 2) return 9.8
  if (order === 3) return 9.6
  if (order === 4) return 9.5
  if (order === 5) return 9.3
  if (order === 6) return 9.1
  if (order === 7) return 8.9
  if (order === 8) return 8.7
  if (order === 9) return 8.5
  if (order === 10) return 8.3
  return Math.max(8.0, 9.9 - (order - 1) * 0.2)
}

export function calculateStars(order: number): number {
  if (order === 1) return 5.0
  if (order === 2) return 4.9
  if (order === 3) return 4.7
  if (order === 4) return 4.6
  if (order === 5) return 4.4
  if (order === 6) return 4.2
  if (order === 7) return 4.1
  if (order === 8) return 4.0
  if (order === 9) return 4.0
  if (order === 10) return 4.0
  return Math.max(4.0, 5.0 - (order - 1) * 0.15)
}
