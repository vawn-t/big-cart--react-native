# REACT NATIVE PRACTICE

## OVERVIEW

- This document outlines a comprehensive plan for practicing React Native. The objective of this practice is to develop an online food store that enable users to order the items.

## TIMELINE

- Estimate time: **17 days (2023/10/04 - 2023/10/27)**
- Actual time: **20 days (2023/10/04 - 2023/11/01)**

## TEAM SIZE

- 1 developer:
  - [Van Tran](van.tran@asnet.com.vn)

## TARGETS

- Understand main concept of React Native
- Apply React Navigation
- Apply Storybook on React Native application
- Unit test coverage greater than 80%

## TECHNICAL STACK

- [React Native](https://reactnative.dev/)(v0.72.6): React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
- [React Navigation](https://reactnavigation.org/)(v6.1.8): Routing and navigation for the React Native application
- [Storybook](https://storybook.js.org/)(v6.5.6): Storybook is a frontend workshop for building UI components and pages in isolation
- [Jest](https://jestjs.io/)(v29.5.0): Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)(v12.3.0): The React Testing Library is a very light-weight solution for testing React components.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): A small, fast, and scalable bearbones state management solution.
- [React Query](https://tanstack.com/query/latest/docs/react/overview): React Query is often described as the missing data-fetching library for React.
- [Husky](https://typicode.github.io/husky/)(v4.4.4): Husky improves your commits
- [CommitLint](https://commitlint.js.org/#/)(v17.7.2): commitlint checks if your commit messages meet the conventional commit format.

## REQUIREMENT DETAILS

- Read more detail requirement in [here](https://vawn.notion.site/Van-Tran-react-next-js13-practice-982e96ee8e364e769590207155944b1a?pvs=4).

## PLATFORM

- iOS

## DESIGN

- [Figma](<https://www.figma.com/file/Hq2LNnduVW2jXFXdJNEQd7/Grocery-App-(Big-Cart)-(Edited)?type=design&mode=design&t=fCDKFLXyiXI2BN8m-1>)

## TASK MANAGEMENT

- [Trello](https://trello.com/b/A1zgyr3P/big-cart)

## TEXT EDITOR

- [Visual studio code](https://code.visualstudio.com)

## DIRECTORY STRUCTURE

```
├── node_modules
├── assets
│    ├── fonts
│    └── images
└── src
    ├── components
    │   ├── Banner
    │   ├── Cards
    │   │   ├── HorizontalCards
    │   │   └── VerticalCards
    │   ├── Categories
    │   ├── common
    │   │   ├── Button
    │   │   ├── Input
    │   │   ├── LoadingIndicator
    │   │   └── Typography
    │   ├── EmptyCard
    │   ├── FeaturedProducts
    │   ├── Form
    │   │   ├── ForgotPasswordForm
    │   │   ├── LoginForm
    │   │   ├── OtpForm
    │   │   └── SignUpForm
    │   ├── GlobalLoader
    │   ├── Header
    │   ├── HistorySearch
    │   ├── Icons
    │   ├──
    │   ├── ProductInfo
    │   ├── SearchBar
    │   ├── SearchResult
    │   ├── SwipeToDelete
    │   └── ShoppingCart
    ├── constants
    ├── hooks
    │   ├── useAuth
    │   ├── useCart
    │   ├── useCategory
    │   ├── useProduct
    │   └── useProductUnit
    ├── interfaces
    ├── layouts
    │   ├── AuthLayout
    │   └── VerificationLayout
    ├── mocks
    ├── models
    ├── routes
    ├── screens
    │   ├── Cart
    │   ├── Favorite
    │   ├── FirstTimeLogin
    │   ├── ForgotPassword
    │   ├── Home
    │   ├── Login
    │   ├── Onboarding
    │   ├── Personal
    │   ├── ProductDetail
    │   ├── Search
    │   ├── SignUp
    │   └── VerifyNumber
    ├── services
    │   ├── auth
    │   ├── cart
    │   ├── category
    │   ├── product
    │   └── productUnit
    ├── stores
    ├── themes
    └── utils
```

## GET STARTED

Testing account: `van.tran@asnet.com.vn/!Asnet123` (This is a testing account, so please refrain from using the "forgot password" feature.)

| Command                                                                                 | Action                                                                                                   |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `git clone -b feature/big-cart git@gitlab.asoft-python.com:van.tran/react-training.git` | Clone project with specific branch                                                                       |
| `pnpm install`                                                                          | Installs dependencies                                                                                    |
| `echo "EXPO_PUBLIC_API_URL=https://vinmart-api.onrender.com/api/v1" >> .env`            | Add .env variable                                                                                        |
| `pnpm ios`                                                                              | Build ios environment                                                                                    |
| `pnpm start`                                                                            | Start local dev server                                                                                   |
|                                                                                         | Development build `exp+react-training://expo-development-client/?url=http%3A%2F%2F172.16.129.167%3A8081` |
|                                                                                         | Expo Go `exp://172.16.129.167:8081`                                                                      |
| `pnpm storybook`                                                                        | Start storybook at `exp://172.16.129.167:8081`                                                           |
| `pnpm test`                                                                             | Run unit test                                                                                            |

## Improvement needed

- [ ] Remove product store
- [ ] Correct React Query usage
- [ ] Setup unit test for store and improve
