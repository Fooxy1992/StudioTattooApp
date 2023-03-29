@echo off
mkdir project
cd project

mkdir frontend
cd frontend
echo.>package.json
echo.>package-lock.json
mkdir public
cd public
echo.>index.html
cd..

mkdir src
cd src
echo.>App.js
echo.>index.js
mkdir components
cd components
echo.>Home.js
echo.>Schedule.js
echo.>Admin.js
echo.>TattooArtistDashboard.js
echo.>ClientDashboard.js
echo.>OwnerDashboard.js
cd..

mkdir css
cd css
echo.>main.css
cd..
cd..

mkdir backend
cd backend
echo.>server.js
echo.>database.js
mkdir routes
cd routes
echo.>clients.js
echo.>tattooArtists.js
echo.>appointments.js

cd..\
echo.>requirements.txt
