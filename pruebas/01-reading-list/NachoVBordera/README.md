#[RENT A BOOK](https://pruebas-tecnicas-sigma.vercel.app/)
⬆️ **Visit page**⬆️

Platform for renting books with a smooth and personalized experience. It uses React and Vite for fast and efficient development. Developed with TypeScript and automated tests using Jest.

https://github.com/NachoVBordera/pruebas-tecnicas/tree/main/pruebas/01-reading-list/NachoVBordera/public/img/RentABook

## Getting Started

1. Clone or fork the repository.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run in your terminal:
   ```bash
   npm run dev
   ```

## Stack

- [React](https://reactjs.org/): A JavaScript library for building user interfaces

- [Vite](https://vitejs.dev/): A build tool and bundler for modern web projects.

- [TypeScript](https://www.typescriptlang.org/): A typed programming language that compiles to JavaScript.

- [Jest](https://www.npmjs.com/package/jest): Framework for unit and integration testing for JavaScript and TypeScript applications.

## Challenge Requirements

The challenge requirements are as follows:

- [x] **Displaying Available Books:** The application should display a list of available books that users can review.

- [x] **Creating a Reading List:** Users should be able to create a reading list from the available books. The UI should clearly indicate which books are in the reading list and which are not. It should also be possible to move a book from the reading list back to the available list.

- [x] **Filtering Books by Genre:** Users should be able to filter the list of available books by genre, and a counter should show the number of available books, the number in the reading list, and the number available in the selected genre.

- [x] **State Synchronization:** There should be a global state synchronization that reflects the number of books in the reading list and the number still available. If a book is moved from the available list to the reading list, both counts should be updated accordingly.

- [x] **Data Persistence:** The application should persist the reading list data in the browser's local storage. When the page is reloaded, the reading list should be maintained.

- [x] **Cross-Tab Synchronization:** If the user opens the application in two different tabs, the changes made in one tab should be reflected in the other, without the need for a backend.

- [x] **Deployment:** The application should be deployed on a free hosting service (Netlify, Vercel, Firebase, etc.) and should be accessible through a public URL. Provide the URL in the README.

- [x] **Testing:** The application must have AT LEAST one test. Write the test that you consider most important for your application.

## Additional Challenges (optional):

- [x] Implement search functionality in the list of available books.

- [x] Add a new filter to sort books by the number of pages.

- [x] Allow reordering of books in the reading list by priority.

- [x] Make the design responsive to improve the experience on mobile devices and different screen sizes.

## Deployment

Vercel: https://pruebas-tecnicas-sigma.vercel.app/
