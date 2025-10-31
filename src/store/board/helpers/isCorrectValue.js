export default function isCorrectValue(cell) {
  return cell.value === 0 || cell.value === cell.correctValue;
}
