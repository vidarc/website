apt-get update
sudo apt-get update
sudo apt-get install htop
sudo apt-get install git
git clone https://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install nodejs
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
ls
nodejs init
npm init
ls
vim package.json 
npm install express
ls
vim package.json 
npm install express --save
vim package.json 
node app.js 
npm install express-generator -g
sudo npm install express-generator -g
ls
express
ls
npm install
node app.js 
ls
npm install
node app.js
npm start
cd routes
ls
vim index.js 
vim users.js 
cd ..
ls
npm install --save handlebars
npm install express-handlebars --save
npm start
npm install forever --save
ls
vim package.json 
npm install
ls
vim package.json 
npm start
vim package.json 
cd bin
ls
vim www
npm install pm2 -g
cd ..
ls
sudo npm install pm2 -g
pm2 start ./bin/www
pm2 list
pm2 monit
exit
