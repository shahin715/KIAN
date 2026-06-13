import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Profile Page
        </h1>
      </div>
    </ProtectedRoute>
  );
}