# ML-Collection
로컬 mongodb를 사용한다.
연결정보는 'config.{mode}.js'파일의 'mlconfig'를 키로 하여 설정한다.
{database}{Subdomain}DB가 데이터베이스 이름이 된다.

## parameters
- 컬렉션(collection): collection name
- 메쏘드(method): find/insert/drop
  - find
    - 쿼리(query): mongoClient query 문법을 적용한다. https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html
    - 정렬(sort):  mongoClient sort 문법을 적용한다. https://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#sort
    - 제한(limit): 쿼리 결과를 제한한다.
  - insert
    - 데이터 참조(data key): 이전 step의 결과를 insert 데이터로 사용한다. step 이름이 키가 된다.
  - drop
    - 해당 컬렉션을 지운다.