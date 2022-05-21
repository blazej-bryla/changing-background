import DefaultHeader from "./default/header";
import DefaultFooter from "./default/footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      <main className={"max-w-project mx-auto"}>{children}</main>
      <DefaultFooter />
    </>
  );
};
export default DefaultLayout;
