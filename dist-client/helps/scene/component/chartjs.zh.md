# Chart

## Properties :
- 类型：图表
- 属性：
1. Theme(Select) - 变更图表的主题。支持‘light’和‘dark’等两种。
![Chart-主题][chart-01]
1. Legend(Check) - 显示图表的图例。可以布置上、下、左、右等四个方向。
![Chart-图例][chart-02]
1. Text Size(Number) - 调整图表的文本大小。
![Chart-文本大小][chart-03]
1. Value-Display(Check) - 在图表数据的各个字段，显示值标签。
![Chart-标签][chart-04]
1. Value-Display-Color(Color) - 变更图表值标签的颜色。
![Chart-标签颜色][chart-05]
1. Value-Display-Size(Number) - 变更图表值标签的大小。
![Chart-标签大小][chart-06]


[chart-01]: ../images/chart-01.png#icon25

[chart-02]: ../images/chart-02.png

[chart-03]: ../images/chart-03.png

[chart-04]: ../images/chart-04.png

[chart-05]: ../images/chart-05.png

[chart-06]: ../images/chart-06.png


## Vertical Bar Chart

![组件-Chart-bar][chart-bar-01]

用柱状显示数据的图表。当有多个字段时，可以用并行柱状或累积柱状显示。

- 类型：图表
- 属性：
1. Stacked(Check) - 将图表变更为累积柱状。
![Chart-bar-主题][chart-bar-02]
1. Multi Axes(Check) - 使用图表的次轴。当使用次轴的数据时，需要将‘Series’的‘Target Axis’的方向变更为Right。
![Chart-bar-主题][chart-bar-03]
1. Data Key - Series(String) - 图表将会表现的数据的字段名称。输入将会表现在Y轴的数据的字段名称。当表现如下列数据时，Series的Data-Key将会变成‘Good’和‘Bad’。
![Chart-bar-主题][chart-bar-01]
1. Label(String) - 将会显示在图例的数据的值。
![Chart-bar-主题][chart-bar-04]
1. Target Axis(Select) - 选择将会显示系列的数据的方向。当选择右侧时，将会遵循次轴的数据表现范围，并且需要勾选共同属性的‘Multi Axes’。
![Chart-bar-主题][chart-bar-03]
1. Prefix(String) - 当将鼠标置于图表时，将会被显示在所标记的数据前的字符。
![Chart-bar-主题][chart-bar-05]
1. Suffix(String) - 当将鼠标置于图表时，将会被显示在所标记的数据后的字符。 
![Chart-bar-主题][chart-bar-06]
1. Data Key - X Axis(String) - 图表将会显示的数据的字段名称。输入将会表现在X轴的数据的字段名称。当显示如下数据时，X-Axis的Data-Key将会变成‘Date’。
![Chart-bar-主题][chart-bar-01]
1. Thickness(Number) - 柱状的厚度。
![Chart-bar-主题][chart-bar-07]
1. Grid Line - X Axis(Check) - 显示X轴的刻度线。
![Chart-bar-主题][chart-bar-08]
1. Display Tick - X Axis(Check) - 显示X轴的标签。
![Chart-bar-主题][chart-bar-09]
1. Min Auto - Y Axis(Check&Number) - 指定Y轴的最小值或自动进行显示。
![Chart-bar-主题][chart-bar-10]
1. Max Auto - Y Axis(Check&Number) - 指定Y轴的最大值或自动进行显示。
![Chart-bar-主题][chart-bar-11]
1. Grid Line - Y Axis(Check) - 显示Y轴的刻度线。
![Chart-bar-主题][chart-bar-12]
1. Display Tick - Y Axis(Check) - 显示X轴的标签。
![Chart-bar-主题][chart-bar-13]


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

![组件-Chart-horizontal-bar][chart-horizontal-bar-01]

用横向柱状显示数据的图表。当有多个字段时，可以用并行柱状或累积柱状显示。

- 类型：图表
- 属性：  
  <同柱状图。>


[chart-horizontal-bar-01]: ../images/chart-horizontal-bar-01.png



## Line Chart

![组件-Chart-line][chart-line-01]

用线条的形状显示数据的图表。（有关重复的属性，请参考柱状图。）

- 类型：图表
- 属性：
1. Multi Axes(Check) - <同柱状图。>
1. Data Key - Series(String) - <同柱状图。>
1. Label(String) - <同柱状图。>
1. Line Tension(Select) - 平滑或锐化显示数据的线条的角度。
![Chart-line-线的灵敏度][chart-line-02]
1. Border Color(Color) - 变更线条的颜色。
![Chart-line-线的颜色][chart-line-03]
1. Border Width(Number) - 变更线条的厚度。
![Chart-line-线的厚度][chart-line-04]
1. Fill(Color) - 填充绘制了线条的空间。
![Chart-line-填充空间][chart-line-05]
1. Background Color(Color) - 当线条的属性为‘Fill’时，所变更的填充颜色。
![Chart-line-背景颜色][chart-line-06]
1. Point Shape(Select) - 显示数据图形的形状。
![Chart-line-线的灵敏度][chart-line-07]
1. Point Size(Number) - 显示数据图形的大小。
![Chart-line-线的灵敏度][chart-line-08]
1. Point Bg Color(Color) - 填充显示数据图形的颜色。  
![Chart-line-填充空间][chart-line-09]
1. Target Axis(Select) - <同柱状图。>
1. Prefix(String) - <同柱状图。>
1. Suffix(String) - <同柱状图。>
1. Data Key - <同柱状图。>
1. Thickness(Number) - <同柱状图。>
1. Grid Line - <同柱状图。>
1. Display Tick - <同柱状图。>
1. Min Auto - <同柱状图。>
1. Max Auto - <同柱状图。>
1. Grid Line - <同柱状图。>
1. Display Tick - <同柱状图。>


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
![组件-Chart-mix][chart-mix-01]

混合柱状和线条显示数据的图表。 __(组合图的属性与柱状图和线状图相同。)__

- 类型：图表
- 属性：
1. Chart Type(Select) - 从线条和柱状中，选择图表的形状。
![chart-mix-图表类型][chart-mix-02]


[chart-mix-01]: ../images/chart-mix-01.png

[chart-mix-02]: ../images/chart-mix-02.png



## Rabar Chart
![组件-Chart-radar][chart-radar-01]

用雷达形状显示数据的图表。用多个线条的形状，表现饼状图的数据。

- 类型：图表
- 属性：
1. Data Key - Series(String) - 成为数据的值的字段。当具有如下数据时，‘Series’的‘Data Key’将会成为‘Good’和‘Bad’。  
![chart-radar-数据键][chart-radar-01]
1. Data Key - Axis(String) - 成为数据的标签的字段。当具有如下数据时，‘Axis’的‘Data Key’将会成为‘Line’。  
![chart-radar-数据键][chart-radar-01]  

<br>
<其他属性与线状图相同。>


[chart-radar-01]: ../images/chart-radar-01.png


## Polar Chart
![组件-Chart-polar][chart-polar-01]

用极坐标显示数据的图表。

- 类型：图表
- 属性：
 <同饼状图。>


[chart-polar-01]: ../images/chart-polar-01.png



## Circle Chart
![组件-Chart-circle][chart-circle-01]

用饼状显示数据的图表。

- 类型：图表
- 属性：
1. Data Key - Series(String) - 成为数据的值的字段。当具有如下数据时，‘Series’的‘Data Key’将会成为‘Good’。  
![chart-circle-图表类型][chart-circle-01]
1. Backgroud Color(Color) - 饼状图的颜色。  
![chart-circle-图表类型][chart-circle-02]
1. Data Key - Axis(String) - 成为数据的标签的字段。当具有如下数据时，‘Axis’的‘Data Key’将会成为‘Line’。  
![chart-circle-图表类型][chart-circle-01]
1. Prefix(String) - <同柱状图。>
1. Suffix(String) - <同柱状图。>


[chart-circle-01]: ../images/chart-circle-01.png

[chart-circle-02]: ../images/chart-circle-02.png




* ## **Doughnut Chart**
![组件-Chart-doughnut][chart-doughnut-01]

用环形显示数据的图表。

- 类型：图表
- 属性：
 <同饼状图。>


[chart-doughnut-01]: ../images/chart-doughnut-01.png
