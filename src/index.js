import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [
  {
    category: "I",
    value: 450
  },
  {
    category: "II",
    value: 1200
  },
  {
    category: "III",
    value: 1850
  },
  {
    category: "IV",
    value: 1266
  },
  {
    category: "V",
    value: 800
  },
  {
    category: "VI",
    value: 1287
  }
];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.axisFills.template.fillOpacity = 0.1;
categoryAxis.renderer.axisFills.template.fill = am4core.color("red");

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.StepLineSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "category";
series.strokeWidth = 3;

let bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.fill = am4core.color("white");
bullet.strokeWidth = 3;
