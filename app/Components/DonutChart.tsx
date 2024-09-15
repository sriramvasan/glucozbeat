// components/DonutChart.tsx
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DonutChartProps {
    data: { label: string; value: number,percentage:number }[];
  }

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height)/2;

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(['#7F00FF', '#9B00E8', '#B218FF', '#C576FF']); // Shades of purple

    const arc = d3.arc<any>()
      .innerRadius(radius - 70)
      .outerRadius(radius - 20);

    const pie = d3.pie<any>()
      .value(d => d.percentage)
      .sort(null);

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width/2}, ${height/2})`);

    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d: any) => color(d.data.label) as string);

    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .text(d => `${d.data.label}: ${d.data.percentage}%`);
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default DonutChart;
