import { BrowserChart } from "@/components/Charts/BrowserChart";
import { DeviceChart } from "@/components/Charts/DeviceChart";
import { PlatformChart } from "@/components/Charts/PlatformChart";
import { SidebarTrigger } from "@/components/ui/sidebar";

function Analytics() {
  return (
    <div className="flex-1 p-10 space-y-10">
      <div className="flex items-center justify-between">
        <div className="font-bold text-5xl">Analytics</div>
        <SidebarTrigger/>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <BrowserChart />
        <DeviceChart />
        <PlatformChart />
        <div className="flex justify-center items-center text-4xl text-primaryButton font-bold">
          <div>More Coming Soon</div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
