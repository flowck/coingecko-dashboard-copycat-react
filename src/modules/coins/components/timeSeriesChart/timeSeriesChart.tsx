import { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { ApexOptions } from "apexcharts";
import { numberToCurrency } from "@common/utils";

interface Props {
  name: string;
  currency: string;
  serie: [number, number | null][];
}

const ChartContainer = styled.div``;

export function TimeSeriesChart({ name, serie, currency }: Props) {
  const [options] = useState<ApexOptions>({
    chart: {
      id: "",
      animations: {
        enabled: false,
      },
    },
    xaxis: { type: "datetime" },
    yaxis: {
      labels: {
        formatter: function (value) {
          return numberToCurrency(value, currency);
        },
      },
    },
    stroke: {
      width: 1.5,
    },
  });

  return (
    <ChartContainer>
      <Chart height={400} options={options} series={[{ name, data: serie }]} />
    </ChartContainer>
  );
}
