import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthGuard>
        <OrganizationGuard>{children}</OrganizationGuard>
      </AuthGuard>
    </div>
  );
}
