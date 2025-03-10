# Next.js 커스텀 템플릿

[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)을 사용해 [Next.js](https://nextjs.org) 프로젝트 부트스트랩

## 시작하기

다음 명령을 사용해 Next.js 프로젝트를 시작할 수 있습니다.

```bash
pnpm create next-app -e https://github.com/yamoo9/create-next-app <project-name>
```

또는 degit 명령을 사용해 프로젝트를 로컬 드라이브로 복제할 수 있습니다.

```bash
npx degit yamoo9/create-next-app <project-name>
```

Next.js 앱 개발 서버를 구동하는 명령을 터미널에서 실행합니다.

```bash
pnpm dev
```

브라우저 주소창에 [http://localhost:3000](http://localhost:3000)을 입력해 구동된 Next.js 앱을 확인할 수 있습니다.

`src/app/page.tsx` 파일을 수정해 페이지를 수정할 수 있습니다. 파일을 수정하면 페이지가 자동 업데이트됩니다.

## 레퍼런스

Next.js 사용에 앞서 다음의 리소스를 참고하세요.

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능 및 API를 살펴볼 수 있습니다.
- [Next.js 학습하기](https://nextjs.org/learn) - 대화식 Next.js 튜토리얼로 학습할 수 있습니다.

## 배포

Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template)을 사용하는 것입니다.  
자세한 방법은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참고하세요.
