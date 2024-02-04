# Nation A - 3D Assets 거래 사이트
![](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/3dasset.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvM2Rhc3NldC5wbmciLCJpYXQiOjE3MDcwMjc3MTAsImV4cCI6MTczODU2MzcxMH0.RoEXVhxI8-rdTbitJ14KLMzGMkb0gjE2QtOyPt5WoAs&t=2024-02-04T06%3A21%3A50.403Z)
![](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/3dasset-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvM2Rhc3NldC0yLnBuZyIsImlhdCI6MTcwNzAyNzY2MiwiZXhwIjoxNzM4NTYzNjYyfQ.SAqeY1PJuZT1XAF_hBu1Uuq7HokNt3l3HkoMHapuU-A&t=2024-02-04T06%3A21%3A03.129Z)

## 🏆배포 
- 주소: 현재 서버가 닫혀 있음
- Admin 관리자
  - ID : quanliza1@nate.com 
  - PW :  qwe123!@#

## ✔️ 깃허브

https://github.com/3DAsset-eCommerce/3D-FE.git

https://github.com/3DAsset-eCommerce/3D-Admin

## 📆 기간

2023.06 - 2023.07

## 👭 인원

FE 4명, BE 4명, UI/UX 2명, PM 4명

## 🛠️ 기술

TypeScript, Next.js 13, Tailwind-CSS, Redux-Toolkit, React-Query, React-Hook-Form

- **Next.js** : 온라인 스토어 특성상 SEO가 중요합니다.
    
                   서버사이드렌더링과 다른 렌더링 방식들을 혼합해서 사용해여 성능 개선을 이룰 수 있습니다.
    
                   이미지 최적화 , 폴더 기반 라우터, 코드 스플리팅을 지원합니다. 
    
- **Tailwind CSS** : Next.js에서 SSR을 사용할 때 CSS-in-JS는 hydrate이전의 스타일이 적용되지 않습니다.
- **React Query** : 서버 데이터와 상태 동기화, 자동 캐싱, 실시간 업데이트, 간편한 데이터 관리를 위해서 입니다.

## 📃  담당 파트

- 에셋 등록 페이지 (admin)
- 에셋 수정 페이지 (admin)
- 에셋 조회 페이지 (admin)
- 주문내역 조회 페이지 (admin)

## ✍️상세 설명

### 에셋 등록 페이지 , 에셋 수정 페이지

- 페이지에 대부분은 SSR로 하고, 유저와 인터렉션이 필요한 일부 컴포넌트(input, button 등)만 CSR로 했습니다.
- 커스텀 클래스와 스타일을 tailwind.config.js에 정의해서 개발 시간을 절약했습니다.
- 디자인을 충족시키기 위해, 기존의 input 창들을 커스텀해서 사용했습니다.
- 3d 에셋, 이미지 등을 업로드하고 내려받기 위해 formData를 활용했습니다.
- 데이터 변경을 화면에 즉각적으로 적용하기 위해 Redux-Toolkit을 사용해서 에셋의 각 항목별 데이터들을 전역으로 관리했습니다.
- 에셋명 input의 state를 사용자가 입력할 때 마다 set하지 않고, useDebounce 커스텀 훅을 만들어 사용함으로써 EventListener가 비효율적으로 많이 호출되는 점을 개선했습니다.
- 각 항목마다 API가 있는데, 입력될 때 마다 요청을 보내는 것이 아니라, 에셋 등록 버튼을 눌렀을 때 한번에 요청을 보낼 수 있게 함으로써 API요청 횟수를 줄여 성능을 개선했습니다.

![1](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/3dasset1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvM2Rhc3NldDEucG5nIiwiaWF0IjoxNzA3MDI3NzQ4LCJleHAiOjE3Mzg1NjM3NDh9.w49lqvE5DVdl6MN3Dt_X6XNMTvK5nzwIY7sOk4SErGo&t=2024-02-04T06%3A22%3A28.260Z)

![2](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/3dasset-4%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvM2Rhc3NldC00ICgxKS5wbmciLCJpYXQiOjE3MDcwMjc4MDksImV4cCI6MTczODU2MzgwOX0.3jqnoBIaKaBOi31CFPlY7j3LrHfQr0n9j6KFe6f13A8&t=2024-02-04T06%3A23%3A29.464Z)

### 에셋 조회 페이지

- React Query의 useInfiniteQuery와 Intersection Observer를 활용해 무한스크롤 기능을 구현했습니다.

![3](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/3dasset-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvM2Rhc3NldC00LnBuZyIsImlhdCI6MTcwNzAyNzgzMCwiZXhwIjoxNzM4NTYzODMwfQ.V6gxQ3lPhrt0TPBTPMaUUKQZrl54ynUCL43jnB_9-dA&t=2024-02-04T06%3A23%3A50.811Z)

### 주문 조회 페이지

- 표에 배열 형태의 데이터를 선택한 조건에 따라 정렬하는 기능을 구현했습니다.

![4](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/3dasset-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvM2Rhc3NldC0zLnBuZyIsImlhdCI6MTcwNzAyNzg3MywiZXhwIjoxNzM4NTYzODczfQ.Q_6c5FVUKVDBG1ABrPDc81860rUYk_n4Fp98gWQrJkA&t=2024-02-04T06%3A24%3A33.578Z)

