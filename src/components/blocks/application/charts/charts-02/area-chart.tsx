import { Chart, type UseChartReturn } from "@chakra-ui/charts"
import {
    Area,
    CartesianGrid,
    AreaChart as RechartsAreaChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import type { TimeSeriesItem } from "./data"

export const AreaChart = (props: { chart: UseChartReturn<TimeSeriesItem> }) => {
    const { chart } = props

    return (
        <Chart.Root maxH="sm" chart={chart}>
            <RechartsAreaChart data={chart.data} margin={{ left: 0 }}>
                <CartesianGrid stroke={chart.color("border")} vertical={false} />
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey={chart.key("date")}
                    tickFormatter={chart.formatDate({ month: "short", day: "numeric" })}
                    stroke={chart.color("border")}
                    tickMargin={16}
                />
                <YAxis
                    width={40}
                    axisLine={false}
                    tickLine={false}
                    stroke={chart.color("border")}
                />
                <Tooltip
                    animationDuration={100}
                    content={<Chart.Tooltip />}
                    cursor={{ stroke: chart.color("border"), strokeWidth: 1 }}
                />
                <defs>
                    <Chart.Gradient
                        id="gradient"
                        stops={[
                            {
 offset: "0%", color: "teal.solid", opacity: 0.3 
},
                            {
 offset: "100%", color: "teal.solid", opacity: 0.05 
},
                        ]}
                    />
                </defs>
                {chart.series.map((item) => (
                    <Area
                        key={item.name}
                        type="linear"
                        isAnimationActive={false}
                        dataKey={chart.key(item.name)}
                        stroke={chart.color(item.color)}
                        strokeWidth={2}
                        fill="url(#gradient)"
                        dot={false}
                        activeDot={{ strokeWidth: 2, r: 4 }}
                    />
                ))}
            </RechartsAreaChart>
        </Chart.Root>
    )
}
