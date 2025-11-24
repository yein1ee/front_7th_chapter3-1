## 작업 08 – 비즈니스 로직 vs UI 로직 분리 계획 (ManagementPage 기준)

### 이 폴더에서 할 일

- `ManagementPage.tsx`에서 비즈니스 로직(데이터/상태)과 UI 로직(화면) 부분을 구분해 봅니다.
- 나중에 훅/서비스/프리젠테이셔널 컴포넌트로 쪼갤 아이디어를 적습니다.

### 당장 5~10분 안에 할 수 있는 작은 단위

1. `packages/before/src/pages/ManagementPage.tsx`를 열어 `useState`와 `useEffect` 부분만 찾습니다.
2. 상태 이름과 초기값만 이 README에 적습니다.
   - 예: `entityType = 'post'`, `data = []`, `isCreateModalOpen = false` ...
3. 그 아래에 한 줄만 적습니다.
   - 예: \"상태가 너무 많아서, UI 코드랑 섞여 있으면 읽기 힘들 것 같다.\"

### 체크리스트

- [ ] 모든 state 변수 이름/타입/역할을 표로 정리했다.
- [ ] 데이터 CRUD 관련 함수(`loadData`, `handleCreate`, `handleUpdate`, `handleDelete`, `handleStatusAction`)를 표로 정리했다.
- [ ] \"어떤 것들을 `useManagement` 같은 훅으로 빼면 좋을지\" 아이디어를 bullet로 정리했다.
- [ ] 알림(성공/실패), 모달 열림/닫힘 로직을 어디까지 공통화할지 생각을 적어 봤다.

### 힌트

- 이 단계의 목표는 **코드 이동**이 아니라 **지도 그리기**입니다.  
  \"여기서 저기로 옮기면 좋겠다\" 수준의 메모만 해도 충분합니다.
