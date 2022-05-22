import DefaultHeader from "./default/header";
import DefaultFooter from "./default/footer";
import cn from "classnames";
const DefaultLayout = ({ children, className }) => {
  return (
    <>
      <DefaultHeader />
      <main className={cn("max-w-project mx-auto", className)}>{children}</main>
      <DefaultFooter />
    </>
  );
};
export default DefaultLayout;
