import { BrowserChart } from "@/components/Charts/BrowserChart";
import { DeviceChart } from "@/components/Charts/DeviceChart";
import { PlatformChart } from "@/components/Charts/PlatformChart";

function Analytics() {
  return (
    <div className="flex-1">
      <BrowserChart />
      <DeviceChart />
      <PlatformChart />
    </div>
  );
}

export default Analytics;
