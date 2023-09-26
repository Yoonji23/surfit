import styled from "styled-components";
const MainBanner = () => {
  return (
    <div>
      <SBannerBackground>
        <SBannerBox>
          <h1>
            매일 성장하고
            <br />더 멋지게 일하세요
          </h1>
          <p>이제 새 탭에서 커리어 성장이 시작됩니다.</p>
          <SBannerBtn>
            <button className="mainBannerBtn">크롬에 추가</button>
          </SBannerBtn>
        </SBannerBox>
      </SBannerBackground>
    </div>
  );
};

const SBannerBackground = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 55vh;
  width: 100%;
  background-color: #c1752a;
  //배경 이미지 어둡게 만든 뒤 그 위에 글씨.
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://storage.surfit.io/env/landing/Kvn8K/img-18287387846437f56f24fcb.jpg");
  background-size: cover;
`;

const SBannerBox = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 20px;
  color: white;
  .mainBannerBtn::before {
    content: "+";
  }
  .mainBannerBtn {
    background-color: #3d6aff;
    border-radius: 100px;
    font-size: 16px;
    padding: 14px 50px;
    text-shadow: none;
    color: white;
    border: 0.5px solid gray;
  }
`;
const SBannerBtn = styled.div`
  :hover {
    opacity: 0.8;
  }
`;
export default MainBanner;
