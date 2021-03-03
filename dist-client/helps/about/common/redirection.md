# redirection

사용자가 브라우저에서 어플리케이션을 사용하는 경우에 사용자의 액션에 의한 URL 요청이 서버쪽에서 여러가지 상황에서 다른 URL로 리디렉트될 수 있다.
(HTTP 응답코드 302(임시이동)로 응답되는 상황을 의미한다.)
URL 리디렉션으로 브라우저에는 사용자가 요청한 URL이 아닌 리디렉트된 페이지가 보여지게 된다.
통상적으로 리디렉트된 페이지는 적절한 과정을 거쳐서 최종적으로는 항상 사용자가 최초에 요청한 URL에 해당하는 페이지로 도달하게 된다.

## URL 리디렉션이 배제되는 경우

- 데이타만을 요청하는 API호출인 경우에는 리디렉션이 동작하지 않는다.
  - 모든 graphql 요청은 API 호출이다.
  - Restful 요청의 경우에도 API로 호출된 경우가 있다.
  - 클라이언트 요청이 API 호출인지 여부는 accept 헤더에 'text/html', '\*/\*\' 이 포함되어있는지로 판단한다. 즉, accept 헤더에 'text/html', '\*/\*'중의 하나라도 포함되어있으면, API호출이 아니라고 판단한다.

## GET/POST method Routing Pair (리디렉션과 서버사이드 페이지 렌더링)

사용자의 페이지 요청에 대해 리디렉션을 사용하는 경우와 서버사이드 페이지 렌더링이 사용되는 경우를 판단할 필요가 있다.
클라이언트 페이지 네비게이션이 동반되는 플로우는 엄밀하게 이 원칙을 따라야 한다.
다음 사례를 생각해보자

- signin
  - 사용자가 보낸 요청이 인증 정보를 필요로 하는 요청인 경우, 서버에서는 요청 패킷과 세션정보를 분석해서 현재 사용자 인증여부를 판단한다.
  - 만약 인증에 실패하였다면, 사용자의 요청을 처리하게 전에 먼저 인증을 요청하는 페이지(signin)로 리디렉트 된다.
  - 사용자의 최초 요청은 리디렉트 URL(signin)에 (redirectTo - URL Query String 파라미터로) 포함되어서 계속 유지되게 된다.
  - 사용자 인증 페이지(signin)는 서버사이드 페이지 렌더링을 통해서 사용자에게 제공된다.
  - 사용자는 인증 정보를 작성한 후 (signin) POST 요청으로 서버에 전달된다. POST 요청에도 최초 요청 URL은 (redirectTo Body 파라미터로) 계속 포함되어있다.
    - 인증정보가 잘못되었다면, 다시 서버사이드 페이지 렌더링을 통해서 signin 페이지가 다시 제공된다.
  - 서버에서는 사용자가 선택한 도메인 정보와 사용자가 원래 요청한 URL을 조합한 URL로 다시 리디렉트 한다.
- checkin
  - 사용자가 보낸 요청이 도메인(테넌시) 정보를 필요로하는 요청인 경우, 서버에서는 요청 패킷을 분석해서 어떤 도메인에서 서비스되어야 하는 지를 판단한다. (도메인을 판단하는데 세션정보를 사용해서는 안된다.)
  - 만약 요청 패킷에서 도메인 정보를 찾을 수 없는 경우, 사용자의 요청을 처리하기 전에 먼저 도메인 선택을 요구하는 페이지(checkin)로 리디렉트 된다.
  - 사용자의 최초 요청은 리디렉트 URL(checkin)에 (redirectTo - URL Query String 파라미터로) 포함되어서 계속 유지되게 된다.
  - 도메인 선택을 요구하는 페이지(checkin)는 서버사이드 페이지 렌더링을 통해서 선택할 수 있는 도메인의 리스트를 포함해서 사용자에게 제공된다.
  - 사용자가 도메인을 선택한 결과는 (checkin) POST 요청으로 서버에 전달된다. POST 요청에도 최초 요청 URL은 (redirectTo Body 파라미터로) 계속 포함되어있다.
  - 서버에서는 사용자가 선택한 도메인 정보와 사용자가 원래 요청한 URL을 조합한 URL로 다시 리디렉트 한다.

위의 사례에 따른 원칙은

- 리디렉션 프로세스를 위해서는 각 페이지 PATH(eg. signin, checkin) 별로 2개의 라우팅 구현을 제공한다.
  - get 메쏘드
    - 리디렉션의 목적을 위한 페이지를 서버사이드에서 렌더링해서 브라우저에 제공한다.
    - 원래의 요청 페이지 정보는 redirectTo URL Query String 파라미터로 포함한다.
  - post 메쏘드
    - 사용자의 대응을 통해 리디렉션의 목적을 처리하고, 원래의 요청 페이지로 리디렉션하는 기능을 제공한다.
    - 원래의 요청 페이지 정보는 redirectTo Body 파라미터로 유지한다.