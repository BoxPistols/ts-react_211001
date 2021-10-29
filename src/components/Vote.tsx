import { FC, useState } from 'react';

const Vote: FC = () => {
  // useStateでオブジェクトを扱う
  const [vote, setVote] = useState({ kinoko: 0, tekenoko: 0 });
  const [items, setItems] = useState([{ name: 'きのこ' }]);

  /* オブジェクトのカウントアップ */
  const voteKinoko = () => {
    // スプレッド演算子でオブジェクトを取得, キノコは: 定数のキノコ + 1
    setVote({ ...vote, kinoko: vote.kinoko + 1 });
    /**
     * アンチパターン
     * vote.kinoko = vote.kinoko + 1
     * setVote(vote)
     */
  };
  const voteTakenoko = () => {
    setVote({ ...vote, tekenoko: vote.tekenoko + 1 });
  };

  /* きのこの追加 */
  const addItem = () => {
    const newItem = {
      // name: Math.random() > 0.5 ? 'きのこ' : 'たけのこ',
      name: Math.random() > 0.5 ? 'きのこ' : 'たけのこ',
    };
    setItems([...items, newItem]);
  };

  /* 削除機能 */
  const delItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="Vote">
        <div className="container">
          <div className="row">
            <div className="column column-80">
              <section className="section">
                <button type="button" onClick={voteKinoko}>
                  きのこアップ
                </button>
                <button type="button" onClick={voteTakenoko}>
                  たけのこアップ
                </button>
                <button type="button" onClick={addItem}>
                  きのこランダム
                </button>
                <p>きのこ: {vote.kinoko}</p>
                <p>たけのこ: {vote.tekenoko}</p>
                {items.map((item, index) => (
                  <li key="index">
                    {item.name}
                    <button type="button" onClick={() => delItem(index)}>
                      削除
                    </button>
                  </li>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vote;
