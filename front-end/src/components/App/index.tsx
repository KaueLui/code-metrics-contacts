import { Contact, EditContact, Home } from "../../pages";
import { Header } from "../Layout";
import styles from "./styles.module.css";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
