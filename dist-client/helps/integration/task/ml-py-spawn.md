# ML-Py-Spawn
작성한 Python 코드를 실행한다.
pandas과 json이 import되고 pandas는 pd를 별칭으로 가지고 있다.

## parameters
- GraphQL: 입력 데이터로 사용할 시스템 내 GraphQL을 설정한다. 리턴 오브젝트의 마지막 요소를 df변수에 pandas.DataFrame으로 갖는다.
- Spark 사용: spark 사용 여부를 설정한다.
  spark라는 변수에 pyspark.sql.SparkSession 인스턴스를 가지고 있다.
  - Save 모드: 컬렉션 쓰기에 적용하는 SaveMode이다.
    - append: Append contents of this DataFrame to existing data.
    - overwrite: Overwrite existing data.
    - error: Throw an exception if data already exists.
    - ignore: Silently ignore this operation if data already exists.

- 컬렉션 읽기: 로컬 mongodb에 있는 컬렉션을 tempView로 만든다.
  다음과 같은 파이썬 코드로 spark DataFrame을 생성할 수 있다.
  ex) df = spark.sql('select * from collection')
- 컬렉션 쓰기: 로컬 mongodb에 있는 컬렉션으로 저장한다.
  Spark 사용이 비활성화된 경우는 pandas DataFrame 타입의 **pdf**라는 변수명을 저장하는데 사용하고,
  활성화된 경우는 spark DataFrame 타입의 **sdf**라는 변수명을 저장하는데 사용한다.
  해당 변수로 데이터를 생성하지 않으면 저장하지 않는다.
- 파이썬: python code를 작성할 수 있다.
