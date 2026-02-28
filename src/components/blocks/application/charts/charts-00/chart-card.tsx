"use client"
import { Chart, useChart } from "@chakra-ui/charts"
import {
 Card, HStack, Status 
} from "@chakra-ui/react"
import {
 CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis 
} from "recharts"
import { data, series } from "./data"

export const ChartCard = () => {
    const chart = useChart({ data, series })
    return (
        <Card.Root>
            <Card.Header>
                <Card.Title>
                    <HStack>
                        {chart.series.map((item) => (
                            <Status.Root key={item.name}>
                                <Status.Indicator bg={item.color} />
                                {item.label}
                            </Status.Root>
                        ))}
                    </HStack>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Chart.Root maxH="sm" chart={chart}>
                    <LineChart data={chart.data} margin={{ left: 0 }}>
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
                        {chart.series.map((item) => (
                            <Line
                                key={item.name}
                                type="linear"
                                isAnimationActive={false}
                                dataKey={chart.key(item.name)}
                                stroke={chart.color(item.color)}
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ strokeWidth: 2, r: 4 }}
                            />
                        ))}
                    </LineChart>
                </Chart.Root>
            </Card.Body>
        </Card.Root>
    )
}
