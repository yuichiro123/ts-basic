export default function notExistSample() {
  let name = null
  name = 'yamamoto'
  console.log('notExist Sample 1: ', typeof name, name)
  if (name) {
    console.log('notExist Sample 3: ', '名前は' + name)
  } else {
    console.log('notExist Sample 2: ', '名前はまだ' + name)
  }

  let age = undefined
  age = 39
  console.log('notExist Sample 4: ', typeof age, age)
  if (age) {
    console.log('notExist Sample 5: ', '年齢は' + age + 'です')
  } else {
    console.log('notExist Sample 6: ', '年齢は秘密です')
  }
}
