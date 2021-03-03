# LocalGraphqlMutate Task

서버에서 제공하는 graphql mutate API를 호출하는 태스크이다.
Mutation을 작성할 때, 다음과 같이 시나리오 컨텍스트의 data와 variables를 변수로 활용할 수 있다.

```
mutation {
  syncAllMarketplaceOrder(fromDate: "${this.variables.fromDate}", toDate: "${this.variables.toDate}") {
    ...
  }

  removeTagFromObject(tag: "${this.data.tag}") {
    ...
  }
}
```

## parameters

- mutation
  - graphql mutation 쿼리를 입력한다.
