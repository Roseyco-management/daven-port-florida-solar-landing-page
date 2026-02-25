import { createServerSupabaseClient } from "@/lib/supabase/server";
import LeadsTable from "@/components/dashboard/tables/LeadsTable";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const supabase = createServerSupabaseClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-1">
          All Leads
        </h2>
        <p className="text-theme-sm text-gray-500 dark:text-gray-400 mb-4">
          All solar estimate requests submitted via the landing page
        </p>
      </div>
      <div className="col-span-12">
        <LeadsTable leads={leads || []} />
      </div>
    </div>
  );
}
