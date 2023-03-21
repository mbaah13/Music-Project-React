import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="App-div">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
