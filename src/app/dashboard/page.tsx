import DashboardLayout from "@/components/layout/dashboard-layout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-accent/5 aspect-video rounded-xl" />
          <div className="bg-accent/5 aspect-video rounded-xl" />
          <div className="bg-accent/5 aspect-video rounded-xl" />
        </div>
        <div className="bg-accent/5 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
