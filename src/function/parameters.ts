export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is ', userName)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signed in! ')
    return false
  }
}

export const isUserSignedIn2 = (userId: string, userName = 'No Name'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in! Username is ', userName)
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in! ')
    return false
  }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
