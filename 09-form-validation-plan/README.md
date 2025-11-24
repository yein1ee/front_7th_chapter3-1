## 작업 09 – 폼 관리 & 검증 도구 도입 계획 (React Hook Form + Zod)

### 이 폴더에서 할 일

- 현재 `formData` 수동 관리 방식을, React Hook Form + Zod 구조로 어떻게 바꿀지 설계합니다.
- 사용자/게시글 폼 필드와 검증 규칙을 정리합니다.

### 당장 5~10분 안에 할 수 있는 작은 단위

1. `ManagementPage.tsx`에서 `formData`를 사용하는 부분만 검색합니다. (`formData.` 로 검색)
2. `username`, `email`, `title`, `author`, `category`, `content`, `status`, `role` 같은 필드 이름만 이 README에 적습니다.
3. 각 필드 옆에 **필수/선택**만 표시합니다.
   - 예: `username (필수)`, `content (선택)`

### 체크리스트

- [ ] 사용자 폼 필드 목록과, 각 필드의 필수 여부/간단한 설명을 표로 정리했다.
- [ ] 게시글 폼 필드 목록도 같은 방식으로 정리했다.
- [ ] React Hook Form 기본 예제 코드를 하나 가져와서, 이 프로젝트 필드로 이름만 바꿔 본 예시를 작성했다.
- [ ] Zod 스키마 예시를 간단히 적어 보았다.  
       (예: `z.object({ username: z.string().min(1), email: z.string().email() })`)

### 힌트

- 지금은 폼을 실제로 옮기지 않고, **\"필드 목록 + 검증 규칙 초안\"**만 잡는 단계입니다.
- Hook Form, Zod를 처음 쓰더라도, 예제 코드 복붙 후 필드 이름만 우리 프로젝트에 맞게 바꿔 보는 것으로 충분합니다.
