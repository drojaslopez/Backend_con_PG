# hito_2_Backend_Node_Express
## Daniel_Rojas


docker-compose up -d

docker ps

docker exec -it [CONTAINER ID] bash


Ejemplo 
```cmd
docker ps
CONTAINER ID   IMAGE             COMMAND                  CREATED        STATUS             PORTS                    NAMES
987abc3463d8   postgres:latest   "docker-entrypoint.s…"   13 hours ago   Up About an hour   0.0.0.0:5434->5432/tcp   postgreshito2

docker exec -it 987abc3463d8 bash 

psql -U postgres -d dbhito2
````

cargar script con creacion y carga de datos



Ejecutar 

npm run dev

