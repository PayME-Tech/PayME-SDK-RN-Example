export const KEY_CONFIGS = {
  sandbox: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MzAsImlhdCI6MTYyMTgyMzQ2N30.02jQIG7fqUckNzQnx0ya52ley4nWCHWt3w6tUrrRAtQ',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAO4QQwo0WqZONzlJ5CMWDb6eSrO5q14r
      D05Fc6JeC/ZfjdoO+9+G9RZrpa8eh8hIhdJ4siqHKcSiM/xlXIm6ddECAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIBOgIBAAJBAMRQjlsYp5aR5IliyM/WsK6JtP79wdXCkyZ/PRV1ZcvyWx5/4A6f
      9e4G+rGF8tSWjbYs1aRkyd/NY41QX+VBULECAwEAAQJAN5TDKUGKuVOnC8q/JjEX
      puLwLr2zsoy7Usv1hGzPnHUK+GtCyROvG88K3EM7ouE2amk0BMJY1XZ8x1KkZnuw
      vQIhAPkFALcE+dsV9G8gDGgTBr8PRmqpkinFzIHcev/wwMhjAiEAydFWDoeCwT2d
      bbUt/fU/KSaGomp5slt+FZxd9A/tzNsCIQCGj9OBEqlJYCXD3teVbaKZn9F3VcZr
      2DzYd6Hnp9sk7QIgfgE7b7rfwnML1bFnU8ZJdxHcwY8lCFzjbe7BIl7HpD0CICB5
      KQhd7pUO2s5oPAvuzi30eI2NIISncH0xGxYAS+nu
      -----END RSA PRIVATE KEY-----`,
    env: 'SANDBOX',
    secretKey: 'd0b1240e28a109e052fa34354e9915f9',
    appId: '30',
    storeId: 10581207,
  },
  dev: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTIsImlhdCI6MTYyMDg4MjQ2NH0.DJfi52Dc66IETflV2dQ8G_q4oUAVw_eG4TzrqkL0jLU',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJi70XBS5+LtaCrNsrnWlVG6xec+J9M1
      DzzvsmDfqRgTIw7RQ94SnEBBcTXhaIAZ8IW7OIWkVU0OXcybQEoLsdUCAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIBOgIBAAJBAIA7GmDWkjuOQsx99tACXhOlJ4atsBN0YMPEmKhi9Ewk6bNBPvaX
      pRMWjn7c8GfWrFUIVqlrvSlMYxmW/XaATjcCAwEAAQJAKZ6FPj8GcWwIBEUyEWtj
      S28EODMxfe785S1u+uA7OGcerljPNOTme6iTuhooO5pB9Q5N7nB2KzoWOADwPOS+
      uQIhAN2S5dxxadDL0wllNGeux7ltES0z2UfW9+RViByX/fAbAiEAlCd86Hy6otfd
      k9K2YeylsdDwZfmkKq7p27ZcNqVUlBUCIQCxzEfRHdzoZDZjKqfjrzerTp7i4+Eu
      KYzf19aSA1ENEwIgAnyXMB/H0ivlYDHNNd+O+GkVX+DMzJqa+kEZUyF7RfECICtK
      rkcDyRzI6EtUFG+ALQOUliRRh7aiGXXZYb2KnlKy
      -----END RSA PRIVATE KEY-----`,
    env: 'DEV',
    secretKey: '34cfcd29432cdd5feaecb87519046e2d',
    appId: '12',
    storeId: '9',
  },
  production: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6NywiaWF0IjoxNjE0OTExMDE0fQ.PJ0ke0Ky_0BoMPi45Cu803VlR8F3e8kOMoNh9I07AR4',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJQKJge1dTHz6Qkyz95X92QnsgDqerCB
      UzBmt/Qg+5E/oKpw7RBfni3SlCDGotBJH437YvsDBMx8OMCP8ROd7McCAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIBOQIBAAJAZCKupmrF4laDA7mzlQoxSYlQApMzY7EtyAvSZhJs1NeW5dyoc0XL
      yM+/Uxuh1bAWgcMLh3/0Tl1J7udJGTWdkQIDAQABAkAjzvM9t7kD84PudR3vEjIF
      5gCiqxkZcWa5vuCCd9xLUEkdxyvcaLWZEqAjCmF0V3tygvg8EVgZvdD0apgngmAB
      AiEAvTF57hIp2hkf7WJnueuZNY4zhxn7QNi3CQlGwrjOqRECIQCHfqO53A5rvxCA
      ILzx7yXHzk6wnMcGnkNu4b5GH8usgQIhAKwv4WbZRRnoD/S+wOSnFfN2DlOBQ/jK
      xBsHRE1oYT3hAiBSfLx8OAXnfogzGLsupqLfgy/QwYFA/DSdWn0V/+FlAQIgEUXd
      A8pNN3/HewlpwTGfoNE8zCupzYQrYZ3ld8XPGeQ=
      -----END RSA PRIVATE KEY-----`,
    env: 'PRODUCTION',
    secretKey: 'bda4d9de88f37efb93342d8764ac9b84',
    appId: '7',
    storeId: 25092940,
  },
};
