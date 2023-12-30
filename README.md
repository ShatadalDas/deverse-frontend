# Welcome to Deverse
The frontend is made using [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/) and [Sass](https://sass-lang.com/)

## Folder Structure
**Note:** file and folder namings are done according to the [Next.js doc](https://nextjs.org/docs/getting-started/project-structure)
```
├── public   -----> all the publicly accessible things will stay here (like icons and images)
├── src   -----> all the code stays here
│   ├── app   -----> all the pages code will stay in here
│   │   ├── *any direct folder*   -----> a page or route in the app
│   │   |   ├── components   -----> for local components
├── components   -----> for global components
├── fonts   -----> for all font related logic
├── hooks   -----> for the functions that uses a react hook
└── functions   -----> for the functions that doesn't use any react hook at all
```