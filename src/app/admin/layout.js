import AdminHeader from "@/components/Admin/AdminHeader";
import AdminSidebar from "@/components/Admin/AdminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#fafafa]">

      <AdminSidebar />

      <div className="lg:ml-[272px]">

        <AdminHeader />

        <main>
          {children}
        </main>

      </div>

    </div>
  );
};

export default Layout;