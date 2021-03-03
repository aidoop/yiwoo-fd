# enhancer[ko]
data-enhancer는 Object내 접근자 대상의 key에 해당되는 Array에 입력 받은 값으로 index 역할을 해주는 property를 추가하여 주는 컴포넌트이다.

1. 모델링 화면 좌측의 컴포넌트 툴바의 Etc List내의 data-enhancer 컴포넌트를 생성한다.
   ![enhancer 생성][data_enhancer_1]

1. data-wrapper를 통해서 object 형태로 만든 데이터를 enhancer에 value로 전달한다.
   ![데이터 전달][data_enhancer_2]

1. data-enhancer 컴포넌트 속성창의 4번째 탭의 접근자 대상에 Array의 object가 담겨있는 key값을 입력해준다.
   그리고 인덱스 명에는 index 역할을 할 property의 이름을 설정해준다.
   인덱스 타입은 0, 1을 번갈아가며 인덱스로 넣어주는 방법과 0부터 데이터의 인덱스 번호를 차례대로 넣어주는 형태가 있고, 둘 중에서 사용할 인덱스 타입을 선택한다.
   ![data enhancer의 key 값 입력][data_enhancer_3]

1. 작업 확인을 위해 접근자에 앞서 입력한 key 값을 입력하여, 데이터 맵핑을 한다.
   ![data enhancer의 값 확인 ][data_enhancer_4]

1. 데이터 값이 제대로 출력됨을 확인한다.
   ![data enhancer 출력 확인][data_enhancer_5]

1. 참고로 인덱스 타입을 0부터 차례대로 인덱스를 선택해주는 standard로 설정할 경우 아래와 같이 데이터 값이 출력된다.
   ![data enhancer 출력 확인][data_enhancer_6]

[data_enhancer_1]: {{site.baseurl}}/assets/tutorials/data_enhancer_1.png
[data_enhancer_2]: {{site.baseurl}}/assets/tutorials/data_enhancer_2.png
[data_enhancer_3]: {{site.baseurl}}/assets/tutorials/data_enhancer_3.png
[data_enhancer_4]: {{site.baseurl}}/assets/tutorials/data_enhancer_4.png
[data_enhancer_5]: {{site.baseurl}}/assets/tutorials/data_enhancer_5.png
[data_enhancer_6]: {{site.baseurl}}/assets/tutorials/data_enhancer_6.png
## properties
