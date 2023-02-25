import Book from "../components/Book";
import Form from "../components/Form";

const Books = () => (
  <div>
    <ul>
      <Book title="Don Quijote de la Mancha" author="Miguel de Cervantes Saavedra"/>
      <Book title="The power of now" author="Eckhart Tolle"/>
      <Book title="Digital Fortress" author="Dan Brown"/>
    </ul>
    <Form />
  </div>
);

export default Books;
