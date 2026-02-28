import type { SystemStyleObject } from "@chakra-ui/react"

export interface ChartItem {
    date: string
    money_in: number
    money_out: number
}

export const data: ChartItem[] = [
    {
 date: "2024-02-21", money_in: 1800, money_out: 0 
},
    {
 date: "2024-02-22", money_in: 2600, money_out: 300 
},
    {
 date: "2024-02-23", money_in: 3400, money_out: 1000 
},
    {
 date: "2024-02-24", money_in: 4200, money_out: 1400 
},
    {
 date: "2024-02-25", money_in: 3600, money_out: 230 
},
    {
 date: "2024-02-26", money_in: 3200, money_out: 340 
},
    {
 date: "2024-02-27", money_in: 2400, money_out: 300 
},
    {
 date: "2024-02-28", money_in: 1200, money_out: 200 
},
    {
 date: "2024-02-29", money_in: 500, money_out: 0 
},
    {
 date: "2024-03-01", money_in: 1800, money_out: 20 
},
    {
 date: "2024-03-02", money_in: 3800, money_out: 250 
},
    {
 date: "2024-03-03", money_in: 4300, money_out: 400 
},
    {
 date: "2024-03-04", money_in: 4800, money_out: 800 
},
    {
 date: "2024-03-05", money_in: 5200, money_out: 1000 
},
    {
 date: "2024-03-06", money_in: 6000, money_out: 400 
},
]

export const series = [
    {
 name: "money_in" as const, color: "teal.solid", label: "Money In" 
},
    {
 name: "money_out" as const, color: "blue.solid", label: "Money Out" 
},
]

export interface StatItem {
    name: "money_in" | "money_out"
    color: SystemStyleObject["color"]
    label: string
}
