"use client";

import { useOrganization } from "@clerk/nextjs";
import AuthLayout from "../layouts/auth-layout";
import { OrgSelectionView } from "../views/org-select-view";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <div>
        <AuthLayout>
          <OrgSelectionView />
        </AuthLayout>
      </div>
    );
  }

  return <>{children}</>;
};
