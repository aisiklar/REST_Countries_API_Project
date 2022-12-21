import Header from "../../components/header/Header.component";

const Home = (props) => {
  return (
    <main>
      <h1>this is home page</h1>
      <h2>this is {props.myProps} </h2>
    </main>
  );
};

export default Home;
