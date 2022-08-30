export const KEY_CONFIGS = {
  sandbox: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6OTUsImlhdCI6MTY1MTczMjM0Nn0.TFsg9wizgtWa7EbGzrjC2Gn55TScsJzKGjfeN78bhlg',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAId28RoBckMTTPqVCC3c1f+fH+BbdVvv
      wDkSf+0zmaUlCFyQpassU3+8CvM6QbeYSYGWp1YIwGqg2wTF94zT4eECAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIBOwIBAAJBAMEKxNcErAKSzmWcps6HVScLctpdDkBiygA3Pif9rk8BoSU0BYAs
      G5pW8yRmhCwVMRQq+VhJNZq+MejueSBICz8CAwEAAQJBALfa29K1/mWNEMqyQiSd
      vDotqzvSOQqVjDJcavSHpgZTrQM+YzWwMKAHXLABYCY4K0t01AjXPPMYBueJtFeA
      i3ECIQDpb6Fp0yGgulR9LHVcrmEQ4ZTADLEASg+0bxVjv9vkWwIhANOzlw9zDMRr
      i/5bwttz/YBgY/nMj7YIEy/v4htmllntAiA5jLDRoyCOPIGp3nUMpVz+yW5froFQ
      nfGjPSOb1OgEMwIhAI4FhyvoJQKIm8wyRxDuSXycLbXhU+/sjuKz7V4wfmEpAiBb
      PmELTX6BquyCs9jUzoPxDWKQSQGvVUwcWXtpnYxSvQ==
      -----END RSA PRIVATE KEY-----`,
    env: 'SANDBOX',
    secretKey: 'b5d8cf6c30d9cb4a861036bdde44c137',
    appId: '95',
    storeId: null,
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6NDQsImlhdCI6MTY1MjIzMjEwM30.IMhz9dBDKJ736hTaxGaMJhJvQiq7Q1axsm6TiydspAU',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKRWwS+plGNWsiQiAMUJgBe7wdjhbAbx
      ZDBqKnAH9hZlRjrdgglBERzy/80/nL8cTI2FWAhEDaR3CewO+nRbaPECAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIBOgIBAAJBAI8rsaSa1cOzIDX/XsniS8TeZ9c1Kg0wqH4pIjUfL3z5X6lXDA3G
      g3uj/sdOJews6zDoXXxTHPkocPGdja98rb8CAwEAAQJAWRQOiyPrLMAeonopN+Mc
      0Xivky744wwLSbO+HN8yZMazvdvVCGjuXRXf9C2Et3sP5mcz1MlO2Zmq2xi0Lgc7
      QQIhANh5Z888Pv7dWr+s9o7SHoyeSAuO6NCUA0r2aaxNd+cDAiEAqU/hdSUeGicG
      HQl7chq14DImAbEplcGoT0l7Z/7aE5UCIQC7Z18XaXCf88G8bmCFBCKuWdjFKNMk
      vv6axvh00hwbQQIgcIPFMDQabQbB6UoD3zAg7XxmBXnWSM8JKqeKevHBuoECIG3A
      deJhhdalcQyJMTFIzx3r3+ANrkrd1v7VMsdFfaQ0
      -----END RSA PRIVATE KEY-----`,
    env: 'PRODUCTION',
    secretKey: '0418d21948d904fb6f423998fd1e4714',
    appId: '44',
    storeId: null,
  },
};
