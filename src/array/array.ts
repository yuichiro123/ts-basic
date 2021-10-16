export default function arraySample() {
  const color = ['red', 'blue']
  color.push('yellow')
  // color.push(123)

  console.log(color)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('aaa')

  console.log('array sample 2', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push('456')
  // ids.push(true)
  console.log('array sample 3', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _somArray = []
    _somArray.push(123)
    _somArray.push('abc')
    return _somArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)

  console.log('array sample 4', someArray)

  // イミュータブルな配列
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push('git fetch')
  // commands[2] = "iiii"

  console.log('array sample 5', commands)
}
