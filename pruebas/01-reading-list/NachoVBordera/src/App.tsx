import "./App.css";
import BookList from "./components/booklist/Booklist";
import SavedBooksList from "./components/savedbooks/SavedBooks";
import SavedUi from "./components/savedbooks/Seved.ui";
import SearchSection from "./components/searchSection/SearchSection";
import { useBookContext } from "./context/SavedContext";

function App() {
  const { books } = useBookContext();
  return (
    <section id="pricipalSection">
      <header>
        <h1>RENT A BOOK</h1>
        <SavedUi number={books.length} />
      </header>
      <main className="mainSection">
        <aside>
          <SearchSection />
          <SavedBooksList />
        </aside>
        <BookList></BookList>
      </main>
    </section>
  );
}

export default App;
