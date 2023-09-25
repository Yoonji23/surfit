import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Search } from "../assets/search.svg";

const Header = () => {
  return (
    <SHeaderContainer>
      <SHeaderInner>
        <div className="headerNavBox">
          <div className="p12 pointer">
            <Logo />
          </div>
          <div>
            <nav>
              <ul className="listStyleNone headerNavBox">
                <li className="p06 pointer">홈 피드</li>
                <li className="p06 after pointer">스타트업 채용</li>
                <li className="p06 pointer">디렉토리</li>
                <li className="p06 before pointer">커리어프로필</li>
                <li className="p06 pointer">제안받기</li>
              </ul>
            </nav>
          </div>
        </div>
        <SHeaderSearchBox>
          <div className="pointer m7">
            <Search />
          </div>
          <div className="ml7 pointer">로그인</div>
          <div className="m29 before pointer">기업서비스</div>
        </SHeaderSearchBox>
      </SHeaderInner>
    </SHeaderContainer>
  );
};

const SHeaderContainer = styled.div`
  height: 56px;
  left: 0;
  top: 0;
  width: 100%;
  /* min-width: 300px;
  position: fixed;
  transition: top 0.3s;
  z-index: 4000; */
`;
const SHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1b1e;
  height: 100%;
  padding: 0 24px;
  color: white;
  font-size: 15px;
  font-weight: 600;

  .headerNavBox {
    display: flex;
    align-items: center;
    padding: 0;
  }
  .p06 {
    padding: 0 6px;
  }
  .p12 {
    padding-right: 12px;
  }
  .nav-divide {
    padding-left: 25px;
  }
  .before::before {
    content: "|";
    padding-right: 6px;
  }
  .after::after {
    content: "New";
    padding-left: 4px;
    color: #e35131;
  }
  .pointer {
    cursor: pointer;
  }
`;
const SHeaderSearchBox = styled.div`
  align-items: center;
  display: flex;

  .ml7 {
    margin-left: 7px;
  }
  .m29 {
    margin-left: 29px;
  }
  .m7 {
    margin: 0 7px;
  }
`;
export default Header;
