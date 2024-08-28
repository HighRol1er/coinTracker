import { useState } from "react";
import "./styles.css";

function CoinInfo({heading, desc}) {
  const shortDesc = desc.slice(0, 350) + "<p style='color:var(--grey)'> Read More...</p>";
  const longDesc = desc + "<p style='color:var(--grey)'> Close...</p>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-info-heading">{heading}</h2>
      { desc.length > 350 ? (
        <p className="coin-info-desc" 
          onClick={() => setFlag(!flag)}
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }} 
        />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: desc}} />
      )}
    </div>
  )
}

{/* <p className="coin-info-desc">{desc}</p>
 이거랑 위에 dangerouslySetInnerHTML이거랑 비교해보기 
 dangerouslySetInnerHTML을 사용하면 들어오는 
 문자열을 html코드로 변환할 수 있다.
 ex). dangerouslySetInnerHTML={{ __html : <h1>Hello</h1>}}
 이렇게 작성하면 h1태그가 생성됨 
 */}

export default CoinInfo;



