## Introduction
> 원티드 프리온보딩 선발과제

## View & Function
#### 1. /signup
- 아이디와 비밀번호를 입력하면 회원가입을 할 수 있다.
- 아이디는 '@'를 포함해야하며, 비밀번호는 8자 이상이어야만 회원가입 버튼이 활성화된다.
- 기존에 존재하는 아이디 등 실패할 경우 alert창이 뜬다.
- 가입 완료시 /signin으로 이동한다.
- 로그인에 성공하여 발행받은 토큰이 로컬 스토리지에 존재할 경우 해당 페이지에 접근하면 자동으로 /todo에 리다이렉트 된다.
<img width="1200" alt="signup" src="https://user-images.githubusercontent.com/40952119/232080761-c130bac1-b794-4d19-90af-41dfc1a295e9.mp4">

#### 2. /signin
- 아이디와 비밀번호를 입력하면 로그인 할 수 있다.
- 로그인에 성공시 발행받은 토큰을 로컬 스토리지에 저장한다.
- 로그인에 실패시 alert창이 뜬다.
- 로그인 완료시 /todo로 이동한다.
- 이후 페이지에 접근시 발행받은 토큰이 로컬 스토리지에 존재할 경우 자동으로 /todo에 리다이렉트 된다.
<img width="1200" alt="signin" src="https://user-images.githubusercontent.com/40952119/232080839-d8b549e9-531d-4f0e-a044-c7c8bbedbbf2.mp4">

#### 3. /todo
- 새로운 항목을 등록할 수 있다.
- 체크박스를 클릭하면 완료 상태를 변경할 수 있다.
- 수정 버튼을 누르면 해당 항목이 수정 상태로 변경된다.
- 수정 상태에서 항목을 수정후 제출 버튼을 누르면 수정사항이 저장&반영된다.
- 수정 상태에서 취소버튼을 누르면 수정 상태가 종료된다.
- 삭제 버튼을 누르면 기존에 존재하는 항목을 삭제할 수 있다.
<img width="1200" alt="todo" src="https://user-images.githubusercontent.com/40952119/232080861-8fee4fd5-dd60-4da0-9976-577d9ba8c38f.mp4">

