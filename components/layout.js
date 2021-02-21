import Navbar from "./elements/navbar";
import Footer from "./elements/footer";

const Layout = ({ children, global }) => {
  const { navbar, footer } = global;

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        <Navbar navbar={navbar} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
