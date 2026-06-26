import AdminSidebar from "./_components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidebar />

      <main
        className="
          flex-1
          min-h-screen
          bg-gray-50
          p-8
        "
      >
        {children}
      </main>
    </div>
  );
}