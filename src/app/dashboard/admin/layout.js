import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AdminSidebar />

      <div className="lg:ml-[272px]">
        <AdminHeader />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;