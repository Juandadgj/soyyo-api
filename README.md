# soyyo-api
Acá vas a encontrar las opciones de ejecución.
## Clonar repositorio
~/> git clone https://github.com/Juandadgj/soyyo-api.git  
En la raiz del proyecto se debe crear un archivo .env con la variable url='https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/'. Si desea tambien puede personalizar el puerto creando la variable PORT, si no la crea lo asume como 4000.
## Desde el entorno
~/soyyo-api> npm install  
~/soyyo-api> npm run build  
~/soyyo-api> npm run start
## Desde Docker
~/> docker build -t co.com.soyyo.entity.filter-dev-1_0_0 .  
~/> docker run -p MACHINE-PORT:CONTAINER-PORT co.com.soyyo.entity.filter-dev-1_0_0