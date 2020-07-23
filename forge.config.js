const path = require('path');

module.exports = {

      packagerConfig: {
        executableName: "karbo-electron-wallet",
        icon: path.normalize(__dirname+'/src/assets/img/favicon.ico')

      },
      makers: [
        {
          name: "@electron-forge/maker-squirrel",
          config: {
            name: "masari-gui-wallet",
            iconUrl: path.normalize(__dirname+'/src/assets/img/favicon.ico'),
            setupIcon: path.normalize(__dirname+'/src/assets/img/favicon.ico')
          }
        },
        {
          name: "@electron-forge/maker-zip",
          platforms: [
            "darwin"
          ]
        },
        {
          name: "@electron-forge/maker-deb",
          config: {
            name: "karbo-electron-wallet",
            icon: __dirname +'/src/assets/img/icons/icon-128x128.png',
	    productName: "Karbo Electron Wallet",
	    productDescription: " Karbo is a privacy-centric innovative cryptocurrency that allows users to send money around the globe with low fees very quickly.\n\n Karbo ($KRB) is a proof of work peer-to-peer internet currency using the well researched and cryptographically sound CryptoNote protocol. This means that every transaction origin, amount, and destination is obfuscated by default. \n\n Karbo is an open source project that is fully decentralized, similar to Bitcoin. Karbo is a fast, fungible, secure, private currency.",
	    homepage: "https://karbo.org/"
          }
        },
        {
          name: "@electron-forger/maker-dmg",
          config: {
            name: "karbo-electron-wallet",
            icon: __dirname +'/src/assets/img/icons/favicon.icns',
          }
        }
      ]
    }
