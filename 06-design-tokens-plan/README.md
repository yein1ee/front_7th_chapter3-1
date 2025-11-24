## 작업 06 – 새로운 디자인 토큰 설계 초안

### 이 폴더에서 할 일

- 이 프로젝트에서 쓸 색상, spacing, radius, shadow, 폰트 같은 기본 토큰 셋을 설계합니다.
- 나중에 Tailwind/CSS 변수로 옮길 수 있게 이름을 미리 정해 둡니다.

### 당장 5~10분 안에 할 수 있는 작은 단위

1. 종이나 메모장에 **좋아하는 파란색/회색/초록색** HEX 코드 1개씩만 적어 봅니다.
   - 모르면 그냥 예시: `#1e40af`, `#64748b`, `#16a34a` 처럼 아무거나 골라도 됩니다.
2. 이 README에 아래 형식으로 붙여 넣습니다.
   - `primary: #1e40af`
   - `muted: #64748b`
   - `success: #16a34a`

여기까지가 1라운드입니다.

### 체크리스트 (색상 토큰)

- [ ] `primary / secondary / success / danger / warning / info / background / foreground` 등 이름을 먼저 정했다.
- [ ] 각 이름마다 HEX 코드 1개 이상을 제안했다.
- [ ] 나중에 사용할 CSS 변수 이름 예시를 적었다.  
       (예: `--color-primary`, `--color-primary-foreground`, `--color-border`, `--color-muted`)

### 체크리스트 (기타 토큰)

- [ ] spacing 단계(예: 4, 8, 12, 16, 24)를 표로 정리했다.  
       (예: `space-1 = 4px`, `space-2 = 8px` …)
- [ ] border-radius 수준을 2~3단계로 나눠 이름을 붙였다.  
       (예: `radius-sm`, `radius-md`, `radius-lg`)
- [ ] 그림자(shadow) 레벨 2~3개를 예시로 적었다.  
       (예: `shadow-sm`, `shadow-md`에 해당하는 CSS box-shadow 값)

### 힌트

- \"완벽한 팔레트\"를 만들 필요는 없습니다.  
  **지금 Before CSS에 쓰인 색을 조금 정리해서 이름만 붙인다** 정도로 생각해도 충분합니다.
