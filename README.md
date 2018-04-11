# Require

* nodejs >=7.6

# Install rendertron
```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i --force-depends google-chrome-stable_current_amd64.deb
sudo apt-get install -f
git clone https://github.com/GoogleChrome/rendertron.git
npm install
npm start
```
# Install application
```
git clone --recurse-submodules http://github.com/kalaspuffar/rendertron-example.git
npm install
npm start
```

If you are using a version of git lower than 2.13 you want to use
```
git clone --recursive http://github.com/kalaspuffar/rendertron-example.git
```
