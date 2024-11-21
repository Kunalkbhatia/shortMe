"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useMemo, useState } from "react"
import { Analytics } from "@prisma/client"
import { getAnalytics } from "@/actions/analytics"


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  window: {
    label: "Window",
    color: "hsl(var(--chart-1))",
  },
  macOs: {
    label: "MacOS",
    color: "hsl(var(--chart-2))",
  },
  linux: {
    label: "Linux",
    color: "hsl(var(--chart-3))",
  },
  android: {
    label: "Android",
    color: "hsl(var(--chart-4))",
  },
  ios: {
    label: "IOS",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PlatformChart({id}: {id:number}) {

  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAnalytics(id);
      setAnalytics(data);
    }
    fetchData();
  },[id]);

  const chartData = useMemo(() => {
    const data = [
      { platform: "window", visitors: analytics?.clicksOnWindows ?? 0, fill: "var(--color-window)" },
      { platform: "macOs", visitors: analytics?.clicksOnMacOs ?? 0, fill: "var(--color-macOs)" },
      { platform: "linux", visitors: analytics?.clicksOnLinux ?? 0, fill: "var(--color-linux)" },
      { platform: "android", visitors: analytics?.clicksOnAndroid ?? 0, fill: "var(--color-android)" },
      { platform: "ios", visitors: analytics?.clicksOnIOS ?? 0, fill: "var(--color-ios)" },
    ]
    return data;
  }, [analytics])
  return (
    <Card >
      <CardHeader>
      <CardTitle className="text-center">Analytics Based on OS</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="platform"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground text-center">
        Showing total visitors on variuos OS
        </div>
      </CardFooter>
    </Card>
  )
}
