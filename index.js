var request = require('request');
// var request = require('node_modules/request');

function queryPrices() {
	request({
	  url: 'https://cryptocurrencyfinder.azurewebsites.net/api/CryptoCurrencyFinder?code=fy2NHnrAOuWxJQvqMcTSt43uodV4F/D1n653FBiPC8t779TvByNb7g==',
	  method: 'GET',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
	    key: '5e01e16f7134519e70e02c80ef61b692',
	    user_id: '4d7a45774e6a41320a'
	  })
	}, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log('BODY: ', body);
	    var jsonResponse = JSON.parse(body); // turn response into JSON

	    sendNotification(body);

	  } else {
	  	return false;
	  }
	});
}

function sendNotification(inputText) {
	var domain = 'mg.nav-labs.com';
	var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: domain});
	// var mailgun = require('node_modules/mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: domain});
	 

	console.log(inputText);

	var data = {
	  from: 'Corbin Page <corbin.page@gmail.com>',
	  to: 'corbin.page@gmail.com',
	  subject: 'Daily Digital Currency Update',
	  text: inputText
	};
	 
	mailgun.messages().send(data, function (error, body) {
	  console.log(error);
	  console.log(body);
	  return body;
	});
}

function returnEmailHtml(data) {
	return `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
		<head>
		<meta name="viewport" content="width=device-width" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Billing e.g. invoices and receipts</title>


		<style type="text/css">
		img {
		max-width: 100%;
		}
		body {
		-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
		}
		body {
		background-color: #f6f6f6;
		}
		@media only screen and (max-width: 640px) {
		  body {
		    padding: 0 !important;
		  }
		  h1 {
		    font-weight: 800 !important; margin: 20px 0 5px !important;
		  }
		  h2 {
		    font-weight: 800 !important; margin: 20px 0 5px !important;
		  }
		  h3 {
		    font-weight: 800 !important; margin: 20px 0 5px !important;
		  }
		  h4 {
		    font-weight: 800 !important; margin: 20px 0 5px !important;
		  }
		  h1 {
		    font-size: 22px !important;
		  }
		  h2 {
		    font-size: 18px !important;
		  }
		  h3 {
		    font-size: 16px !important;
		  }
		  .container {
		    padding: 0 !important; width: 100% !important;
		  }
		  .content {
		    padding: 0 !important;
		  }
		  .content-wrap {
		    padding: 10px !important;
		  }
		  .invoice {
		    width: 100% !important;
		  }
		}
		</style>
		</head>

		<body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

		<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
				<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
					<div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
						<table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;" align="center" valign="top">
									<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
												<h1 class="aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;" align="center">Daily Digital Currency Update</h1>
											</td>
										</tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
												<h2 class="aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;" align="center">Refreshed Daily. Trade at your own risk.</h2>
											</td>
										</tr>
										<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
	` + createTable(data) +
	`
										</tr>
										<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
												Thanks for stopping by!
											</td>
										</tr>
										</table></td>
							</tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
							<table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">Questions? Email <a href="mailto:" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">corbin.page@gmail.com</a></td>
								</tr></table></div></div>
				</td>
				<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
			</tr></table></body>
		</html>
`
}

function createTable(data) {
	if(!data || data.length === 0) {
		return '';
	} else {
		let colKeys = getColKeys(data[0]);
		let rows = data.map(d => {
			return createRow(colKeys, d)
		})

	return `
								<td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
									<table class="invoice" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: left; width: 80%; margin: 40px auto;">
										<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
											<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top">
												<table class="invoice-items" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: 0;">
				` + rows.join('') +
				`
												</table>
											</td>
										</tr>
									</table>
								</td>		
				`
	}
}

function getColKeys(data) {
	return Object.keys(data);
}

function createRow(colKeys, data) {
	let cells = colKeys.map(c => {
		return `
		<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" valign="top">
		` + data[c] + '</td>'
	})

	return `
	<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
	` + cells.join('') + `
	</tr>
	`
}

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));

console.log(returnEmailHtml(obj));


exports.handler = function(event, context) {
  queryPrices();
};