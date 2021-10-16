export default function objectSample() {
  // const a: object = {
  //     name: 'yamamoto',
  //     age: 39
  // }

  // オブジェクトリテラル記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 38,
    lastName: 'Yamada',
    firstName: 'Taro',
  }

  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro'

  console.log('Object sample 3:', torahack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Otawa'
  console.log(capitals)
}
