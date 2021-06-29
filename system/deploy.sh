cd front
npm install --prod
npm run-script ng build --configuration=production --prod=true
cd ..
./makerunfile.sh