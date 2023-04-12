import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp62582078");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank(무통장) 등
        // merchant_uid: "ORD20180131-0000011", // 중복되면 결제 안됨
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "larmong@naver.com",
        buyer_name: "이루이",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일에서는 결제시 페이지 주소가 바뀌면서 이동되기 때문에 돌아올 페이지를 입력해야 함
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, mutation 실행
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직
          alert("결제에 실패했습니다. 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* iamport.payment.js */}
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
