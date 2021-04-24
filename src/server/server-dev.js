import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  console.log('result  == ', result)
  res.set('content-type', 'text/html')
  res.send("HELLO")
  res.end()
  next();
  })
})

const data = [
  {
  "_id": "DK000000000",
  "value": {
  "Name": "ABC Invest - Fund 1",
  "AllocationRegion": [
  {
  "Value": 50,
  "Key": "Europe"
  },
  {
  "Value": 20,
  "Key": "North America"
  },
  {
  "Value": 20,
  "Key": "Asia"
  },
  {
  "Value": 10,
  "Key": "South America"
  }
  ],
  "AllocationCountry": [
  {
  "Value": 20,
  "Key": "Denmark"
  },
  {
  "Value": 30,
  "Key": "Ireland"
  },
  {
  "Value": 10,
  "Key": "USA"
  },
  {
  "Value": 20,
  "Key": "England"
  },
  {
  "Value": 10,
  "Key": "Germany"
  },
  {
  "Value": 10,
  "Key": "Other"
  }
  ],
  "RiskLevel": 4,
  "Category": "Mixed",
  "Advisor": "ABC invest group",
  "InvestmentFee": 1.22,
  "Performance": [
  {
  "Value": 100,
  "Date": "2012-12-10T00:00:00"
  },
  {
  "Value": 101,
  "Date": "2013-12-10T00:00:00"
  },
  {
  "Value": 99,
  "Date": "2014-12-10T00:00:00"
  },
  {
  "Value": 110,
  "Date": "2015-12-10T00:00:00"
  },
  {
  "Value": 120,
  "Date": "2016-12-10T00:00:00"
  },
  {
  "Value": 105,
  "Date": "2017-12-10T00:00:00"
  },
  {
  "Value": 132,
  "Date": "2018-12-10T00:00:00"
  }
  ]
  }
  },
  {
  "_id": "DK000000001",
  "value": {
  "Name": "ABC Invest - Fund 2",
  "AllocationRegion": [
  {
  "Value": 20,
  "Key": "Europe"
  },
  {
  "Value": 50,
  "Key": "North America"
  },
  {
  "Value": 10,
  "Key": "Asia"
  },
  {
  "Value": 20,
  "Key": "South America"
  }
  ],
  "AllocationCountry": [
  {
  "Value": 40,
  "Key": "Denmark"
  },
  {
  "Value": 10,
  "Key": "Ireland"
  },
  {
  "Value": 20,
  "Key": "USA"
  },
  {
  "Value": 10,
  "Key": "England"
  },
  {
  "Value": 10,
  "Key": "Germany"
  },
  {
  "Value": 10,
  "Key": "Other"
  }
  ],
  "RiskLevel": 1,
  "Category": "Mixed",
  "Advisor": "ABC invest group",
  "InvestmentFee": 1.22,
  "Performance": [
  {
  "Value": 100,
  "Date": "2012-12-10T00:00:00"
  },
  {
  "Value": 101,
  "Date": "2013-12-10T00:00:00"
  },
  {
  "Value": 99,
  "Date": "2014-12-10T00:00:00"
  },
  {
  "Value": 110,
  "Date": "2015-12-10T00:00:00"
  },
  {
  "Value": 89,
  "Date": "2016-12-10T00:00:00"
  },
  {
  "Value": 145,
  "Date": "2017-12-10T00:00:00"
  },
  {
  "Value": 122,
  "Date": "2018-12-10T00:00:00"
  }
  ]
  }
  },
  {
  "_id": "DK000000003",
  "value": {
  "Name": "ABC Invest - Fund 3",
  "AllocationRegion": [
  {
  "Value": 20,
  "Key": "Europe"
  },
  {
  "Value": 50,
  "Key": "North America"
  },
  {
  "Value": 10,
  "Key": "Asia"
  },
  {
  "Value": 20,
  "Key": "South America"
  }
  ],
  "AllocationCountry": [
  {
  "Value": 40,
  "Key": "Denmark"
  },
  {
  "Value": 10,
  "Key": "Ireland"
  },
  {
  "Value": 20,
  "Key": "USA"
  },
  {
  "Value": 10,
  "Key": "England"
  },
  {
  "Value": 10,
  "Key": "Germany"
  },
  {
  "Value": 10,
  "Key": "Other"
  }
  ],
  "RiskLevel": 7,
  "Category": "Mixed",
  "Advisor": "ABC invest group",
  "InvestmentFee": 1.22,
  "Performance": [
  {
  "Value": 100,
  "Date": "2012-12-10T00:00:00"
  },
  {
  "Value": 101,
  "Date": "2013-12-10T00:00:00"
  },
  {
  "Value": 99,
  "Date": "2014-12-10T00:00:00"
  },
  {
  "Value": 110,
  "Date": "2015-12-10T00:00:00"
  },
  {
  "Value": 89,
  "Date": "2016-12-10T00:00:00"
  },
  {
  "Value": 145,
  "Date": "2017-12-10T00:00:00"
  },
  {
  "Value": 122,
  "Date": "2018-12-10T00:00:00"
  }
  ]
  }
  },
  {
  "_id": "DK000000005",
  "value": {
  "Name": "ABC Invest - Fund 4",
  "AllocationRegion": [
  {
  "Value": 50,
  "Key": "Europe"
  },
  {
  "Value": 20,
  "Key": "North America"
  },
  {
  "Value": 20,
  "Key": "Asia"
  },
  {
  "Value": 10,
  "Key": "South America"
  }
  ],
  "AllocationCountry": [
  {
  "Value": 20,
  "Key": "Denmark"
  },
  {
  "Value": 30,
  "Key": "Ireland"
  },
  {
  "Value": 10,
  "Key": "USA"
  },
  {
  "Value": 20,
  "Key": "England"
  },
  {
  "Value": 10,
  "Key": "Germany"
  },
  {
  "Value": 10,
  "Key": "Other"
  }
  ],
  "RiskLevel": 4,
  "Category": "Mixed",
  "Advisor": "ABC invest group",
  "InvestmentFee": 1.22,
  "Performance": [
  {
  "Value": 100,
  "Date": "2012-12-10T00:00:00"
  },
  {
  "Value": 101,
  "Date": "2013-12-10T00:00:00"
  },
  {
  "Value": 99,
  "Date": "2014-12-10T00:00:00"
  },
  {
  "Value": 110,
  "Date": "2015-12-10T00:00:00"
  },
  {
  "Value": 120,
  "Date": "2016-12-10T00:00:00"
  },
  {
  "Value": 105,
  "Date": "2017-12-10T00:00:00"
  },
  {
  "Value": 132,
  "Date": "2018-12-10T00:00:00"
  }
  ]
  }
  }
  ];


app.get('/api', (req, res) => {
  res.send(data);
  res.end()
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})