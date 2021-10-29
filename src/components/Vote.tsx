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
      name: Math.random() > 0.5 ? 'きのこ' : 'たけのこ',
    };
    setItems([...items, newItem]);
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
                {/* <p>たけのこ: {items[0].name}</p> */}
                {items.map((item, index) => (
                  <li key="item">{item.name}</li>
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
