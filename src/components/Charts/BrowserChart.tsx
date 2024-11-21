"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

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
import { Analytics } from "@prisma/client"
import { getAnalytics } from "@/actions/analytics"

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function BrowserChart({id}: {id: number}) {
  const [analytics, setAnalytics] = React.useState<Analytics | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getAnalytics(id);
      setAnalytics(data);
    }
    fetchData();
  },[id]);

  const chartData = React.useMemo(() => {
    const data = [
      { browser: "chrome", visitors: analytics?.clicksOnChrome ?? 0, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: analytics?.clicksOnSafari ?? 0, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: analytics?.clicksOnFireFox ?? 0, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: analytics?.clicksOnEdge ?? 0, fill: "var(--color-edge)" },
      { browser: "other", visitors: analytics?.clicksOnOtherBrowsers ?? 0, fill: "var(--color-other)" },
    ]
    return data;
  }, [analytics])
  

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [chartData])

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="items-center pb-0">
        <CardTitle>Analytics Based on Browser</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total visitors on variuos Browser
        </div>
      </CardFooter>
    </Card>
  )
}
