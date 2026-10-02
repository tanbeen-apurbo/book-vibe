"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  type LabelProps,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { IBook } from "../../types/books.types";

interface BookChartProps {
  books?: IBook[];
}

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF6699",
  "#00C49F",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: any) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      fill={color}
      stroke={color}
      strokeWidth={props.isActive ? 3 : 0}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const BookChart = ({ books = [] }: BookChartProps) => {
  const data = books.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
    rating: book.rating,
  }));

  // Don't show an empty chart
  if (data.length === 0) {
    return (
      <div className="flex min-h-[250px] w-full items-center justify-center rounded-2xl border border-base-300 bg-base-100 p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            No reading data yet 📚
          </h2>

          <p className="mt-2 text-gray-500">
            Read some books to see your reading statistics here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Your Reading Statistics 📊
      </h2>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 30,
              right: 20,
              left: 10,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              angle={-25}
              textAnchor="end"
              interval={0}
              height={80}
            />

            <YAxis />

            <Tooltip
              formatter={(value, name) => {
                if (name === "pages") {
                  return [`${value} pages`, "Pages"];
                }

                return [value, "Rating"];
              }}
            />

            <Bar
              dataKey="pages"
              shape={TriangleBar}
              activeBar
            >
              <LabelList
                content={CustomColorLabel}
                position="top"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BookChart;