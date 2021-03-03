@ECHO OFF
echo "installing..."
IF EXIST config.production.js (
  echo "config.production.js exist"
) ELSE (
  echo "config.production.js create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/config.production.js
)

IF EXIST .env (
  echo ".env exist"
) ELSE (
  echo ".env create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/.env
)

IF EXIST docker-compose.yml (
  echo "docker-compose.yml exist"
) ELSE (
  echo "docker-compose.yml create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/docker-compose.yml
)

IF EXIST install.bat (
  echo "install.bat exist"
) ELSE (
  echo "install.bat create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/install.bat
)

IF EXIST migrate.bat (
  echo "migrate.bat exist"
) ELSE (
  echo "migrate.bat create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/migrate.bat
)

IF EXIST start.bat (
  echo "start.bat exist"
) ELSE (
  echo "start.bat create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/start.bat
)

IF EXIST stop.bat (
  echo "stop.bat exist"
) ELSE (
  echo "stop.bat create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/stop.bat
)

IF EXIST upgrade.bat (
  echo "upgrade.bat exist"
) ELSE (
  echo "upgrade.bat create"
  curl -O https://raw.githubusercontent.com/aidoop/yiwoo-fd/main/installer/upgrade.bat
)

docker pull aidoop/yiwoo-fd

docker-compose up --no-start
