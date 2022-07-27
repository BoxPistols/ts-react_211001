// 人物のパラメータの型
export type Character = {
  id: number
  name: string
  grade: number
  height?: number // undefindの許容 -> 三項演算子
}

// ※Propsの型
type Props = {
  school?: string
  characters: Character[] // オブジェクト配列型 -> map
}

export const CharacterList: React.FC<Props> = (props) => {
  // propsの明示宣言 = CharacterListコンポーネントで親が指定する値
  const { school, characters } = props

  return (
    <>
      {/* Props 1 = String */}
      <h2>{school}</h2>
      <div>
        {/* Props 2 = Array/Map */}
        {characters.map((character) => (
          <ul key={character.id}>
            <li>
              <b>{character.name}</b>（{character.grade}年）/{' '}
              {/* {character.height ? character.height : '???'}cm */}
              {/* ヌリッシュコアレッシング */}
              {character.height ?? '???'}cm
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}
