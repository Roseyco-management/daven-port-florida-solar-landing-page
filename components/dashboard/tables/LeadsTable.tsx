import React from "react";
import Badge from "../ui/Badge";

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  property_role: string;
  created_at: string;
}

interface LeadsTableProps {
  leads: Lead[];
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  const getRoleBadge = (role: string) => {
    if (role === "homeowner") return { color: "success" as const, label: "Homeowner" };
    if (role === "authorized_agent" || role === "authorized") return { color: "info" as const, label: "Authorized Agent" };
    return { color: "light" as const, label: role };
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between px-5 py-4 sm:px-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Leads
        </h3>
        <span className="text-theme-sm text-gray-500 dark:text-gray-400">
          {leads.length} total
        </span>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="border-t border-gray-100 dark:border-gray-800">
              <th className="px-5 py-3 text-theme-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Name
              </th>
              <th className="px-5 py-3 text-theme-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Email
              </th>
              <th className="px-5 py-3 text-theme-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Phone
              </th>
              <th className="px-5 py-3 text-theme-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Address
              </th>
              <th className="px-5 py-3 text-theme-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Role
              </th>
              <th className="px-5 py-3 text-theme-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-10 text-center text-gray-400 dark:text-gray-500 sm:px-6"
                >
                  No leads yet. Form submissions will appear here.
                </td>
              </tr>
            ) : (
              leads.map((lead) => {
                const badge = getRoleBadge(lead.property_role);
                return (
                  <tr
                    key={lead.id}
                    className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-3 sm:px-6">
                      <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {lead.first_name} {lead.last_name}
                      </span>
                    </td>
                    <td className="px-5 py-3 sm:px-6">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                      >
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-5 py-3 sm:px-6">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {lead.phone}
                      </span>
                    </td>
                    <td className="px-5 py-3 sm:px-6 max-w-[200px]">
                      <span className="text-sm text-gray-600 dark:text-gray-300 truncate block">
                        {lead.address}
                      </span>
                    </td>
                    <td className="px-5 py-3 sm:px-6">
                      <Badge color={badge.color} size="sm">
                        {badge.label}
                      </Badge>
                    </td>
                    <td className="px-5 py-3 sm:px-6">
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {formatDate(lead.created_at)}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
