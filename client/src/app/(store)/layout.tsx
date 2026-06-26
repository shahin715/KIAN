import MainLayout from "@/components/layout/MainLayout";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}