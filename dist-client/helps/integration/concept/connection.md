# Connection

외부 시스템을 연결하기 위해 제공되는 기능을 Connector라고 하며, Connector를 작동시키기 위한 설정 정보가 Connection 이다.
한 종류의 Connector는 여러 Connection을 가질 수 있다.

외부 시스템을 연결하기 위해서는 외부 시스템에 연결하기 위한 연결 정보와 프로토콜을 정의해야 하며,
커넥션은 외부 시스템 연결 정보를 의미한다.

외부 시스템은 대표적으로 데이타베이스, 메시지 브로커 등의 서비스를 제공하는 네트워크 기반의 시스템이 될 수도 있고,
때로는 카메라, 프린터, 스캐너 같은 디바이스를 직접 연결하는 USB 포트 등이 될 수 있다.
그 밖에 가상의 오브젝트가 될 수도 있다.

시나리오는 태스크의 시리즈로 정의된다. 일부 태스크는 커넥션에 기반한 태스크들이 될 수 있다.
예를 들면, 데이타베이스 커넥션에 기반한 태스크로는 데이타베이스 쿼리가 될 수 있으며,
메시지 브로커를 기반한 태스크로는 메시지 서브스크라이브나 메시지 퍼블리시 같은 태스크들이 있을 수 있다.

## endpoint

- 외부 시스템의 연결 정보를 설정한다.
- 네트워크 기반 커넥션의 엔드포인트는 보통 protocol과 host, service port 그리고 path 정보로 구성된다.
- USB 디바이스에 대한 커넥션의 엔드포인트는 USB 포트번호가 될 수 있다.
- 각 커넥터별 엔드포인트 설정 방법은 커넥터의 구현에 따른다. 커넥터의 도움말 기능을 통해서 엔드포인트 설정 방법을 가이드한다.

## parameters

- Connector를 동작시키기 위한 속성을 설정한다.
- Connector 구현에 따라서 속성들은 정의된다.