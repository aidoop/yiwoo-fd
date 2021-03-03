# LocalGraphqlMutate Task

서버에서 제공하는 graphql query API를 호출하는 태스크이다.
Query를 작성할 때, 다음과 같이 시나리오 컨텍스트의 data와 variables를 변수로 활용할 수 있다.

```
query {
  fetchWorkOrderHistory(fromDate: "${this.variables.fromDate}", toDate: "${this.variables.toDate}") {
    ...
  }

  searchObjectWithTag(tag: "${this.data.tag}") {
    ...
  }
}
```

## parameters

- query
  - graphql query를 입력한다.
