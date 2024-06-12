# shopper_app_testing

Este repositorio contiene pruebas automatizadas para una aplicación Shopper desarrollada en Flutter. Las pruebas se realizan utilizando la herramienta Appium Flutter Driver y se encuentran en la carpeta `test/`.

### Requisitos previos:

* Tener instalado Node.js
* Tener instalado npm
* Tener instalado Android Studio o Simulator.app

### Configuración:

1. Clona el repositorio en tu equipo local.
2. Accede al directorio raíz del repositorio.
3. Ejecuta el siguiente comando para instalar las dependencias:
```
npm install
```
4. Crea una carpeta llamada `apps` en el directorio raíz.
5. Descarga las [aplicaciones](https://drive.google.com/drive/folders/1dz2JNq4JSZFyaqKYLmGei34uNj7WQ4zy?usp=drive_link) y guárdalas en la carpeta apps.
6. Abre los archivos `config/wdio.android.app.conf.ts` y `config/wdio.android.app.conf.ts` y configura las opciones de Appium según tus dispositivos y versiones.
7. Ejecuta el siguiente comando para ejecutar las pruebas:
```
npm run ios
```
```
npm run android
```
***Las pruebas se ejecutarán automáticamente y se generará un informe con los resultados.***

