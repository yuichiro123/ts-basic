export default function undnownSample() {
  const maybeNumber: unknown = 10
  console.log('undnownSample 1: ', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('undnownSample 2: ', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10;
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('undnownSample 3: ', typeof sum, sum)
  }
}
