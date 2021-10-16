export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  const america: Country = {
    capital: 'Washinton. D.C',
    language: 'English',
    name: 'USA',
  }

  console.log(japan, america)

  // 合併型（union）
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型 KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard

  // 交差型 KnightかつWizardの型を持つ
  type Pladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    mp: 199,
    weapon: 'aaaa',
    swordSkill: 'bbbb',
    magicSkill: 'cccc',
  }
  console.log(adventurer1)

  const paladin: Pladin = {
    hp: 1000,
    mp: 200,
    sp: 2000,
    weapon: 'dddd',
    swordSkill: 'cccc',
    magicSkill: 'aaaaa',
  }

  console.log(paladin)
}
