# Integration Monitor

인티그레이션을 위한 커넥션의 연결 상태와 시나리오 실행 상태, 그리고 지연 큐에 대기 중인 시나리오 리스트를 전체적으로 모니터링 하기 위한 페이지이다.
또한, 커넥션을 연결 및 시나리오의 실행/정지를 컨트롤 할 수 있다.

## Connection (커넥션 상태)

- 등록된 모든 커넥션 리스트를 커넥션 카드 형태로 볼 수 있다.
- 커넥션의 현재 연결 상태를 표현한다.
  - 연결 중인 커넥션은 해당 카드의 배경색이 연한 녹색으로 표현된다.
  - 또한, 커넥션 카드의 연결/해제 버튼으로 현재 연결 여부를 판단할 수 있다.
- 커넥션 카드의 연결/해제 버튼으로 해당 커넥션을 연결 시도하거나 해제 시킬 수 있다.

## Scenario (시나리오 상태)

- 등록된 모든 시나리오 리스트를 시나리오 카드 형태로 볼 수 있다.
- 시나리오의 현재 실행 여부 상태를 표현한다.
  - 실행 중인 시나리오는 해당 카드의 배경색이 연한 녹색으로 표현된다.
  - 또한, 시나리오 카드의 실행/정지 버튼으로 현재 실행 여부를 판단할 수 있다.
- 시나리오 카드의 실행/정지 버튼으로 해당 시나리오를 실행하거나 정지 시킬 수 있다.

## Pending Queue (지연 큐)

- 지연 큐는 bookup-scenario 태스크에 의해서 일정 시간 후에 실행될 시나리오를 등록할 수 있는 대기 큐이다.
- 지연 큐에 보관된 지연 시나리오는 지연 시간이 만료되면 pickup-scenario 태스크에 의해서 꺼내져서 실행되게 된다.
- 인티그레이션 모니터에서는 지연 큐에 대기 중인 시나리오의 시간 축으로 정렬된 리스트를 보여주게 된다.
- 지연 큐에 시나리오는 시간 축상에 한 줄로 표시되며, 그 줄의 색상은 시나리오 리스트에 표현된 각 시나리오 카드 중에서 해당 시나리오의 색상과 동일하게 표현된다.
- 지연 큐에 보관되는 시나리오는 등록시에 tag를 지정할 수 있으며, tag별로 pickup될 수 있다. 지연 큐 모니터링에서는 tag별로 선택해서 모니터링할 수 있다.
  - tag를 '*'로 선택하면, 모든 tag의 시나리오를 모니터링하게된다.