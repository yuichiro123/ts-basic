// import World from './world'

// const root = document.getElementById('root')
// const world = new World('hello yamamoto!')
// world.sayHello(root)

// import { unknownSample, anySample, notExistSample, primitiveSumple } from './basic';

// unknownSample()
// notExistSample()
// primitiveSumple()
// anySample()

// import { logMessage, logMessage2, logMessage3, logMessage4, alwaysThrowError } from './function/basic';
// logMessage('Hello TypeScript!')
// logMessage2('2')
// logMessage3('3')
// logMessage4('4')
// alwaysThrowError('error')

import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'
isUserSignedIn('ABC', 'yamamoto')
isUserSignedIn('BCD')

isUserSignedIn2('ABC', 'yamamoto')
isUserSignedIn2('ABC')

const sum = sumProductsPrice(100, 200, 3000, 4000, 500)
console.log('Function parameters sample 5:', sum)
