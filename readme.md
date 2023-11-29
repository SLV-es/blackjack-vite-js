#BlackJack Vite

Pasos para ejecutar el proyecto:

##Dev

1. Clonar repositorio
2. Ejecuta '''npm install''' para reconstruir los módulos de node
3. Ejecuta '''npm run dev'''
4. Abrir proyecto en '''http://localhost:puerto''' donde ``puerto`` lo podemos ver en la terminal
5. Para abrir el proyecto en un dispositivo en la misma red:
  5.1 Ejecuta '''npm run dev --host''' para exponer
  5.2 Abre el proyecto en '''http://ipdetuequipo:puerto''', 
      donde ``puerto`` lo podemos ver en la terminal y 
      la ``ip de tu equipo`` la puedes ver con un ipconfig

##Dist

1. Ejecuta '''npm run build'''
2. Desplegar la carpeta '''dist'''