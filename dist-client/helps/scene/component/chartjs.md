# Chart

## Properties :
1. Theme(Select) - Change the theme of chart. Support ‘light’ and ‘dark’.
![Chart-Theme][chart-01]
1. Legend(Check) - Display the legend of chart. You can arrange in four directions like up, down, left and right.
![Chart-Legend][chart-02]
1. Text Size(Number) - Adjust the text size of chart.
![Chart-Text Size][chart-03]
1. Value-Display(Check) - Display the value label in each field of chart data.
![Chart-Label][chart-04]
1. Value-Display-Color(Color) - Change the color of chart value label.
![Chart-Label color][chart-05]
1. Value-Display-Size(Number) - Change the size of chart value label.
![Chart-Label Size][chart-06]

[chart-01]: ../images/chart-01.png

[chart-02]: ../images/chart-02.png

[chart-03]: ../images/chart-03.png

[chart-04]: ../images/chart-04.png

[chart-05]: ../images/chart-05.png

[chart-06]: ../images/chart-06.png

## Vertical Bar Chart

![Component-Chart-bar][chart-bar-01]

The chart which displays the data in the form of bar. You can display with parallel bars or cumulative bars when there are several fields.

- Category : Chart
- Property :
1. Stacked(Check) - Change the chart to cumulative bars.
![Chart-bar-Theme][chart-bar-02]
1. Multi Axes(Check) - Use the secondary axis of the chart. You should change the direction of ‘Target Axis’ of ‘Series’ as Right when use the data of secondary axis.
![Chart-bar-Theme][chart-bar-03]
1. Data Key - Series(String) - The field name of data which will be represented by the chart. Enter the field name of data which will be represented in Y axis. When display the data as below, Data-Key of Series will become ‘Good’ and ‘Bad’.
![Chart-bar-Theme][chart-bar-01]
1. Label(String) - The value of data which will be displayed in the legend.
![Chart-bar-Theme][chart-bar-04]
1. Target Axis(Select) - Select the direction in which will display the data of series. When select right, it will follow the range of data presentation and should select ‘Multi Axes’ of common property.
![Chart-bar-Theme][chart-bar-03]
1. Prefix(String) - The string which will be written in front of the data being displayed when the mouse is over the chart.  
![Chart-bar-Theme][chart-bar-05]
1. Suffix(String) - The string which will be written behind the data being displayed when the mouse is over the chart.  
![Chart-bar-Theme][chart-bar-06]
1. Data Key - X Axis(String) - The field name of data which will be represented by the chart. Enter the field name of data which will be represented in X axis. When display the data as below, Data-Key of X-Axis will become ‘Date’.
![Chart-bar-Theme][chart-bar-01]
1. Thickness(Number) - The thickness of bar chart.
![Chart-bar-Theme][chart-bar-07]
1. Grid Line - X Axis(Check) - Display the scale mark of X axis.
![Chart-bar-Theme][chart-bar-08]
1. Display Tick - X Axis(Check) - Display the label of X axis.
![Chart-bar-Theme][chart-bar-09]
1. Min Auto - Y Axis(Check&Number) - Specify the minimum value of Y axis or display automatically.
![Chart-bar-Theme][chart-bar-10]
1. Max Auto - Y Axis(Check&Number) - Specify the maximum value of Y axis or display automatically.
![Chart-bar-Theme][chart-bar-11]
1. Grid Line - Y Axis(Check) - Display the scale mark of Y axis.
![Chart-bar-Theme][chart-bar-12]
1. Display Tick - Y Axis(Check) - Display the label of Y axis.
![Chart-bar-Theme][chart-bar-13]


[chart-bar-01]: ../images/chart-bar-01.png

[chart-bar-02]: ../images/chart-bar-02.png

[chart-bar-03]: ../images/chart-bar-03.png

[chart-bar-04]: ../images/chart-bar-04.png

[chart-bar-05]: ../images/chart-bar-05.png

[chart-bar-06]: ../images/chart-bar-06.png

[chart-bar-07]: ../images/chart-bar-07.png

[chart-bar-08]: ../images/chart-bar-08.png

[chart-bar-09]: ../images/chart-bar-09.png

[chart-bar-10]: ../images/chart-bar-10.png

[chart-bar-11]: ../images/chart-bar-11.png

[chart-bar-12]: ../images/chart-bar-12.png

[chart-bar-13]: ../images/chart-bar-13.png

## Horizontal bar Chart

![Component-Chart-horizontal-bar][chart-horizontal-bar-01]

The chart which displays the data in the form of horizontal bar. You can display with parallel bars or cumulative bars when there are several fields.

- Category : Chart
- Property :  
  < The same as the bar chart >


[chart-horizontal-bar-01]: ../images/chart-horizontal-bar-01.png



## Line Chart

![Component-Chart-line][chart-line-01]

The chart which displays the data in the form of line. (Please refer to the bar chart about the duplicated property.)

- Category : Chart
- Property :
1. Multi Axes(Check) - < The same as the bar chart >
1. Data Key - Series(String) - < The same as the bar chart >
1. Label(String) - < The same as the bar chart >
1. Line Tension(Select) - Change the angle of line which displays the data smoothly or sharply.
![Chart-line-Line sensitivity][chart-line-02]
1. Border Color(Color) - Change the color of line.
![Chart-line-Line color][chart-line-03]
1. Border Width(Number) - Change the thickness of line.
![Chart-line-Line thickness][chart-line-04]
1. Fill(Color) - Paint the space in which has drawn the line.
![Chart-line-Space fill][chart-line-05]
1. Background Color(Color) - The change of fill color when the property of line is ‘Fill’.
![Chart-line-Background color][chart-line-06]
1. Point Shape(Select) - The shape of chart which displays the data.
![Chart-line-Line sensitivity][chart-line-07]
1. Point Size(Number) - The size of chart which displays the data.
![Chart-line-Line sensitivity][chart-line-08]
1. Point Bg Color(Color) - Paint the shape which displays the data.  
![Chart-line-Space fill][chart-line-09]
1. Target Axis(Select) - < The same as the bar chart >
1. Prefix(String) - < The same as the bar chart >
1. Suffix(String) - < The same as the bar chart >
1. Data Key - < The same as the bar chart >
1. Thickness(Number) - < The same as the bar chart >
1. Grid Line - < The same as the bar chart >
1. Display Tick - < The same as the bar chart >
1. Min Auto - < The same as the bar chart >
1. Max Auto - < The same as the bar chart >
1. Grid Line - < The same as the bar chart >
1. Display Tick - < The same as the bar chart >


[chart-line-01]: ../images/chart-line-01.png

[chart-line-02]: ../images/chart-line-02.png

[chart-line-03]: ../images/chart-line-03.png

[chart-line-04]: ../images/chart-line-04.png

[chart-line-05]: ../images/chart-line-05.png

[chart-line-06]: ../images/chart-line-06.png

[chart-line-07]: ../images/chart-line-07.png

[chart-line-08]: ../images/chart-line-08.png

[chart-line-09]: ../images/chart-line-09.png


## Mix Chart
![Component-Chart-mix][chart-mix-01]

The chart which displays the data in the form of mixed bars and lines. __(The property of mixed chart is the same as bar and line chart.)__

- Category : Chart
- Property :
1. Chart Type(Select) - Select the form of chart between line and bar.
![chart-mix-Chart type][chart-mix-02]


[chart-mix-01]: ../images/chart-mix-01.png

[chart-mix-02]: ../images/chart-mix-02.png


## Rabar Chart
![컴포넌트-Chart-radar][chart-radar-01]

The chart which displays the data in the form of radar. It displays the data of pie chart with several lines.

- Category : Chart
- Property :  
1. Data Key - Series(String) - The field which will be the value of data. When there is the data as below, ‘Data Key’ of ‘Series’ will become ‘Good’ and ‘Bad’.
![chart-radar-데이타 키][chart-radar-01]
1. Data Key - Axis(String) - The field which will be the label of data. When there is the data as below, ‘Data Key’ of ‘Axes’ will become ‘Line’.  
![chart-radar-데이타 키][chart-radar-01]  

<br>
< The remaining property is the same as line chart >

[chart-radar-01]: ../images/chart-radar-01.png


## Polar Chart
![Component-Chart-polar][chart-polar-01]

The chart which displays the data in the form of polar coordinates.

- Category : Chart
- Property :  
 < The same as the pie chart >


[chart-polar-01]: ../images/chart-polar-01.png


## Circle Chart
![Component-Chart-circle][chart-circle-01]

The chart which displays the data in the form of pie.

- Category : Chart
- Property :
1. Data Key - Series(String) - The field which will be the value of data. When there is the data as below, ‘Data Key’ of ‘Series’ will become ‘Good’.
![chart-circle-Chart type][chart-circle-01]
1. Backgroud Color(Color) - The color of pie chart.
![chart-circle-Chart type][chart-circle-02]
1. Data Key - Axis(String) - The field which will be the label of data. When there is the data as below, ‘Data Key’ of ‘Axis’ will become ‘Line’.
![chart-circle-Chart type][chart-circle-01]
1. Prefix(String) - < The same as the bar chart >
1. Suffix(String) - < The same as the bar chart >


[chart-circle-01]: ../images/chart-circle-01.png

[chart-circle-02]: ../images/chart-circle-02.png



## Doughnut Chart
![Component-Chart-doughnut][chart-doughnut-01]

The chart which displays the data in the form of donut.

- Category : Chart
- Property :  
  < The same as the pie chart >


[chart-doughnut-01]: ../images/chart-doughnut-01.png