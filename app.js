{
  "name": "meteor-demo",
  "scripts": {},
  "env": {
    "ROOT_URL": {
      "required": true
    }
  },
  "formation": {
    "web": {
      "quantity": 1
    }
  },
  "addons": [
    "mongolab"
  ],
  "buildpacks": [
    {
      "url": "https://github.com/AdmitHub/meteor-buildpack-horse.git"
    }
  ]
}
