export default function tupleSample() {
  // 一般的な型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, "bad request", "Email parameter is missing"]
  // response = ["400", "bad request"]

  console.log('Array tuple sample 1', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')
  console.log('Array tuple sample 2', girlfriends)
}
