# Chart(Fix it)

## 공통 속성 :
1. 테마(Select) - 차트의 테마를 변경. 'light'와 'dark' 두가지를 지원
![Chart-테마][chart-01]
1. 범례(Check) - 차트의 범례를 표시. 상, 하, 좌, 우 네방향으로 배치할 수 있다.
![Chart-범례][chart-02]
1. 값표시(Check) - 차트 데이터의 필드마다 값 레이블을 표시
![Chart- 레이블][chart-04]
1. 데이터 폰트색상(Color) - 차트 값 레이블의 색상을 변경
![Chart-레이블 색상][chart-05]
1. 데이터 폰트크기(Number) - 차트 값 레이블의 크기를 변경
![Chart-레이블 크기][chart-06]

[chart-01]: ../images/chart-01.png

[chart-02]: ../images/chart-02.png

[chart-03]: ../images/chart-03.png

[chart-04]: ../images/chart-04.png

[chart-05]: ../images/chart-05.png

[chart-06]: ../images/chart-06.png

## Vertical Bar Chart

데이터를 막대모양의 형태로 표현해주는 차트. 여러개의 필드가 있을시엔 병렬막대 또는 누적막대로 표현이 가능

- Category : Chart
- 속성 :
1. Stacked(Check) - 차트를 누적막대로 변경  
![Chart-bar-테마][chart-bar-02]
1. Multi Axes(Check) - 차트의 보조축을 사용. 보조축 데이터를 사용할 시 'Series'의 'Target Axis'의 방향을 Right로 변경 해 줘야 함  
![Chart-bar-테마][chart-bar-03]
1. Data Key - Series(String) - 차트가 표현할 데이터의 필드명. Y축에 표현될 데이터의 필드명을 입력한다. 아래와 같은 데이터를 표시할 시 Series의 Data-Key는 'Good'과 'Bad'가 된다.  
![Chart-bar-테마][chart-bar-01]
1. Label(String) - 범례에 표시될 데이터의 값  
![Chart-bar-테마][chart-bar-04]
1. Target Axis(Select) - 시리즈의 데이터가 표시될 방향을 선택. 오른쪽을 선택 시 보조 축의 데이터 표현범위를 따르며 공통 속성의 'Multi Axes'가 선택되어 있어야 한다.  
![Chart-bar-테마][chart-bar-03]
1. Prefix(String) - 차트에 마우스를 올릴 때 표기되는 데이터의 앞에 표기될 문자.  
![Chart-bar-테마][chart-bar-05]
1. Suffix(String) - 차트에 마우스를 올릴 때 표기되는 데이터의 뒤에 표기될 문자.  
![Chart-bar-테마][chart-bar-06]
1. Data Key - X Axis(String) - 차트가 표현할 데이터의 필드명. X축에 표현될 데이터의 필드명을 입력한다. 아래와 같은 데이터를 표시할 시 X-Axis의 Data-Key는 'Date'가 된다.  
![Chart-bar-테마][chart-bar-01]
1. Thickness(Number) - 막대차트의 두께.  
![Chart-bar-테마][chart-bar-07]
1. Grid Line - X Axis(Check) - X축의 눈금선을 표시  
![Chart-bar-테마][chart-bar-08]
1. Display Tick - X Axis(Check) - X축의 레이블을 표시  
![Chart-bar-테마][chart-bar-09]
1. Min Auto - Y Axis(Check&Number) - Y축의 최소값을 지정하거나 자동으로 표시  
![Chart-bar-테마][chart-bar-10]
1. Max Auto - Y Axis(Check&Number) - Y축의 최대값을 지정하거나 자동으로 표시  
![Chart-bar-테마][chart-bar-11]
1. Grid Line - Y Axis(Check) - Y축의 눈금선을 표시  
![Chart-bar-테마][chart-bar-12]
1. Display Tick - Y Axis(Check) - Y축의 레이블을 표시  
![Chart-bar-테마][chart-bar-13]


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

![컴포넌트-Chart-horizontal-bar][chart-horizontal-bar-01]

데이터를 가로 막대모양의 형태로 표현해주는 차트. 여러개의 필드가 있을시엔 병렬막대 또는 누적막대로 표현이 가능

- Category : Chart
- 속성 :  
  < 막대 차트와 동일 >


[chart-horizontal-bar-01]: ../images/chart-horizontal-bar-01.png


## Line Chart

![컴포넌트-Chart-line][chart-line-01]

데이터를 라인모양의 형태로 표현해주는 차트. (중복되는 속성은 막대차트를 참조)

- Category : Chart
- 속성 :
1. Multi Axis(Check) - < 막대 차트와 동일 >  <-- 링크 걸수있는 방법이 있을까나요?
1. Data Key - Series(String) - < 막대 차트와 동일 >
1. Label(String) - < 막대 차트와 동일 >
1. Line Tension(Select) - 데이터를 표시하는 라인의 각도를 부드럽게 또는 날카롭게 변경  
![Chart-line-선 민감도][chart-line-02]
1. Border Color(Color) - 라인의 색상을 변경  
![Chart-line-선 색상][chart-line-03]
1. Border Width(Number) - 라인의 굵기를 변경  
![Chart-line-선 굵기][chart-line-04]
1. Fill(Color) - 라인이 그려진 공간을 색칠  
![Chart-line-공간 칠하기][chart-line-05]
1. Background Color(Color) - 라인의 속성이 'Fill'일 경우 채워지는 색상의 변경  
![Chart-line-배경색][chart-line-06]
1. Point Shape(Select) - 데이터를 표시하는 도형의 모양  
![Chart-line-선 민감도][chart-line-07]
1. Point Size(Number) - 데이터를 표시하는 도형의 크기  
![Chart-line-선 민감도][chart-line-08]
1. Point Bg Color(Color) - 데이터를 표시하는 도형에 채워지는 색상  
![Chart-line-공간 칠하기][chart-line-09]
1. Target Axis(Select) - < 막대 차트와 동일 >
1. Prefix(String) - < 막대 차트와 동일 >
1. Suffix(String) - < 막대 차트와 동일 >
1. Data Key - < 막대 차트와 동일 >
1. Thickness(Number) - < 막대 차트와 동일 >
1. Grid Line - < 막대 차트와 동일 >
1. Display Tick - < 막대 차트와 동일 >
1. Min Auto - < 막대 차트와 동일 >
1. Max Auto - < 막대 차트와 동일 >
1. Grid Line - < 막대 차트와 동일 >
1. Display Tick - < 막대 차트와 동일 >


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
![컴포넌트-Chart-mix][chart-mix-01]

데이터를 막대모양과 라인모양의 형태를 섞어서 표현해주는 차트. __(믹스차트의 속성은 막대차트와 라인차트와 동일합니다.)__

- Category : Chart
- 속성 :
1. Chart Type(Select) - 차트의 형태를 라인과 막대 중 선택  
![chart-mix-차트 타입][chart-mix-02]

[chart-mix-01]: ../images/chart-mix-01.png

[chart-mix-02]: ../images/chart-mix-02.png


## Rabar Chart
![컴포넌트-Chart-radar][chart-radar-01]

데이터를 레이더 모양으로 표현해주는 차트. 원형 차트의 데이터를 여러개의 라인 형태로 표현

- Category : Chart
- 속성 :  
1. Data Key - Series(String) - 데이터의 값이 되는 필드. 아래와 같은 데이터가 있을 때 'Series'의 'Data Key'는 'Good'과 'Bad'가 된다.  
![chart-radar-데이타 키][chart-radar-01]
1. Data Key - Axis(String) - 데이터의 레이블이 되는 필드. 아래와 같은 데이터가 있을 때 'Axis'의 'Data Key'는 'Line'이 된다.  
![chart-radar-데이타 키][chart-radar-01]  

<br>
< 나머지 속성은 라인 차트와 동일 >


[chart-radar-01]: ../images/chart-radar-01.png


## Polar Chart
![컴포넌트-Chart-polar][chart-polar-01]

데이터를 극좌표 모양으로 표현해주는 차트.

- Category : Chart
- 속성 :  
 < 원형 차트와 동일 >


[chart-polar-01]: ../images/chart-polar-01.png


## Circle Chart
![컴포넌트-Chart-circle][chart-circle-01]

데이터를 원형 모양으로 표현해주는 차트.

- Category : Chart
- 속성 :
1. Data Key - Series(String) - 데이터의 값이 되는 필드. 아래와 같은 데이터가 있을 때 'Series'의 'Data Key'는 'Good'이 된다.  
![chart-circle-차트 타입][chart-circle-01]
1. Backgroud Color(Color) - 원형 차트의 색상  
![chart-circle-차트 타입][chart-circle-02]
1. Data Key - Axis(String) - 데이터의 레이블이 되는 필드. 아래와 같은 데이터가 있을 때 'Axis'의 'Data Key'는 'Line'이 된다.  
![chart-circle-차트 타입][chart-circle-01]
1. Prefix(String) - < 막대 차트와 동일 >
1. Suffix(String) - < 막대 차트와 동일 >


[chart-circle-01]: ../images/chart-circle-01.png

[chart-circle-02]: ../images/chart-circle-02.png


## Doughnut Chart
![컴포넌트-Chart-doughnut][chart-doughnut-01]

데이터를 도넛 모양으로 표현해주는 차트.

- Category : Chart
- 속성 :  
 < 원형 차트와 동일 >


[chart-doughnut-01]: ../images/chart-doughnut-01.png
