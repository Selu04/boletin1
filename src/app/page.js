import App from "./App";
import App2 from "./App2";
import ContactForm from "./ContactForm";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Dropdown from "./Dropdown";
import Greeting from "./Greeting";
import ImageGallery from "./ImageGallery";
import LoginControl from "./LoginControl";
import Parent from "./Parent";
import ProductList from "./ProductList";
import ProductStock from "./ProductStock";
import ShoppingList from "./ShoppingList";
import ToDoList from "./ToDoList";
import ToggleSwitch from "./ToggleSwitch";

export default function Home() {
  const initialList = ['Manzanas', 'Naranjas', 'Plátanos'];

  return (
    <div >
      <Greeting name="Selu"></Greeting>
      <br></br>
      <br></br>
      <App></App>
      <br></br>
      <br></br>
      <Counter></Counter>
      <br></br>
      <br></br>
      <ProductList></ProductList>
      <br></br>
      <br></br>
      <App2></App2>
      <br></br>
      <br></br>
      <Parent></Parent>
      <br></br>
      <br></br>
      <ToggleSwitch></ToggleSwitch>
      <br></br>
      <br></br>
      <ToDoList></ToDoList>
      <br></br>
      <br></br>
      <Counter2></Counter2>
      <br></br>
      <br></br>
      <LoginControl></LoginControl>
      <br></br>
      <br></br>
      <ProductStock inStock={false}></ProductStock>
      <ProductStock inStock={true}></ProductStock>
      <br></br>
      <br></br>
      <ContactForm></ContactForm>
      <br></br>
      <br></br>
      <ShoppingList initialShopList={initialList}></ShoppingList>
      <br></br>
      <br></br>
      <Dropdown options={initialList}></Dropdown>
      <br></br>
      <br></br>
      <ImageGallery></ImageGallery>
    </div>
  );
}
