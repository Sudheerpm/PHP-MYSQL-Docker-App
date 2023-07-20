define({ "api": [  {    "type": "get",    "url": "/cts/:reference",    "title": "Click",    "name": "Click",    "group": "Clickthroughs",    "version": "1.0.0",    "description": "<p>'Action' a clickthrough, this happens when a user clicks a tiny URL link The action is recorded, ie the last_clicked date is updated and state changes to clicked=1, then a redirect is performed if the clickthrough has a 'next' property set. For example, the user can be redirected to a generic thank you page or a page with their specific reference.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ":reference",            "description": "<p>Unique reference of the clickthrough</p>"          }        ]      }    },    "filename": "api/controllers/Clickthroughs.php",    "groupTitle": "Clickthroughs"  },  {    "type": "post",    "url": "/cts",    "title": "Create",    "name": "Create",    "group": "Clickthroughs",    "description": "<p>Create a new clickthrough and return the reference number</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<p>Type of clickthrough, eg 'verify-email'</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "next",            "description": "<p>Next URL to load, any instance of the string &quot;@reference&quot; will be replaced with the :reference value</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "reference",            "description": "<p>The new clickthrough reference, store this for use in an email etc</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>The new clickthrough URL, store this for use in an email etc</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"reference\": \"25ee\",\n  \"href\": \"/api/cts/25ee\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response: ",          "content": "HTTP/1.1 400 Bad Request\n\"Invalid clickthrough type\"",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example usage:",        "content": "curl \\\n   -X POST \\\n   -H \"api-key: {api-key}\" \\\n   -H \"Content-Type: application/json\" \\\n   -d '{\n     \"type\": \"verify-email\",\n     \"next\": \"/stuff/@reference\"\n   }' \"https://connect.ausnetservices.com.au/api/cts\"",        "type": "curl"      }    ],    "filename": "api/controllers/Clickthroughs.php",    "groupTitle": "Clickthroughs",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "api-key",            "description": "<p>Authorisation token for API access</p>"          }        ]      }    }  },  {    "type": "get",    "url": "/cts",    "title": "Index",    "name": "Index",    "group": "Clickthroughs",    "description": "<p>Retrieve the status of existing clickthroughs</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "after",            "description": "<p>Clicked after this UTC timestamp (YYYY-MM-DD HH24:MI:SS)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "before",            "description": "<p>Clicked before this UTC timestamp (YYYY-MM-DD HH24:MI:SS)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "reference",            "description": "<p>Only return clickthrough with this unique reference</p>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "clicked",            "description": "<p>Only return if clickthrough has been clicked</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<p>Type of clickthrough</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "clickthroughs",            "description": "<p>List of clickthroughs</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".type",            "description": "<p>Clickthrough type (eg download-sms, validate-email)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".reference",            "description": "<p>Unique reference for clickthrough</p>"          },          {            "group": "Success 200",            "type": "Integer",            "optional": false,            "field": ".clicked_state",            "description": "<p>Has the clickthrough been clicked</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".clicked_utc",            "description": "<p>Timestamp last clicked (UTC, YYYY-MM-DD HH24:MI:SS)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".url",            "description": "<p>URL of clickthrough</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".next",            "description": "<p>The new address the user will be redirected to</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"clickthroughs\": [\n    {\n      \"type\": \"verify-email\",\n      \"reference\": \"25dy\",\n      \"clicked_state\": 1,\n      \"clicked_utc\": \"2016-03-08 06:01:50\",\n      \"url\": \"/api/cts/25dy\"\n    },\n    ...\n  ]\n}",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X GET \\\n -H \"api-key: {api-key}\" \\\n -H \"Content-Type: application/json\" \\\n \"https://connect.ausnetservices.com.au/api/cts?after=2016-03-07\"",        "type": "curl"      }    ],    "filename": "api/controllers/Clickthroughs.php",    "groupTitle": "Clickthroughs",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "api-key",            "description": "<p>Authorisation token for API access</p>"          }        ]      }    }  },  {    "type": "get",    "url": "/cts/:reference",    "title": "Update",    "name": "Update",    "group": "Clickthroughs",    "description": "<p>Update the 'next' url for an existing clickthrough</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": ":reference",            "description": "<p>Clickthrough unique reference</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "next",            "description": "<p>Next URL to load, any instance of the string &quot;@reference&quot; will be replaced with the :reference value</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data",            "description": "<p>&quot;Updated&quot;</p>"          }        ]      }    },    "filename": "api/controllers/Clickthroughs.php",    "groupTitle": "Clickthroughs",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "api-key",            "description": "<p>Authorisation token for API access</p>"          }        ]      }    }  },  {    "type": "post",    "url": "/requests",    "title": "Create",    "name": "Create",    "group": "Requests",    "description": "<p>Create a new requeust for metering data</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "request",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".email",            "description": "<p>Email address of requestor</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".first_name",            "description": "<p>First name of requestor</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".last_name",            "description": "<p>Last name of requestor</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".business_name",            "description": "<p>Business name (if applicable)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".phone_primary",            "description": "<p>Primary phone number</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".phone_secondary",            "description": "<p>Alternative phone number</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_flat",            "description": "<p>Flat Number</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_number",            "description": "<p>Street number</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_street_name",            "description": "<p>Street Name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_street_type",            "description": "<p>Street type</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_city",            "description": "<p>City</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_state",            "description": "<p>State</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".address_postcode",            "description": "<p>Postcode</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".nmi",            "description": "<p>National Meter Identifier</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".meter_number",            "description": "<p>Meter number</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".han_mac",            "description": "<p>HAN Device MAC address</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ".han_install_code",            "description": "<p>HAN Device install code</p>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": ".eula",            "description": "<p>Accepted EULA flag</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "version",            "description": "<p>The UI version from which the request originated</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl \\\n  -X POST \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n   \"request\" : {\n     \"email\"                 : \"kenneth.chew@ausnetservices.com.au\",\n     \"first_name\"            : \"Kenneth\",\n     \"last_name\"             : \"Chew\",\n     \"business_name\"         : \"\",\n     \"phone_primary\"         : \"0396956975\",\n     \"phone_secondary\"       : \"\",\n     \"address_flat\"          : \"\",\n     \"address_number\"        : \"\",\n     \"address_street_name\"   : \"Southbank\",\n     \"address_street_type\"   : \"Boulevard\",\n     \"address_city\"          : \"Southbank\",\n     \"address_state\"         : \"VIC\",\n     \"address_postcode\"      : \"3006\",\n     \"nmi\"                   : \"6305123456\",\n     \"meter_number\"          : \"4123456\",\n     \"han_vendor\"            : \"Greenwave\",\n     \"han_model\"             : \"IHD\",\n     \"han_mac\"               : \"1a2b3c4d5e6f\",\n     \"han_install_code\"      : \"1a2b3c4d5e6f7g8h\",\n     \"eula\"                  : 1\n   },\n   \"version\" : \"0.0.1\"\n }' \"https://connect.ausnetservices.com.au/api/requests\"",        "type": "curl"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>&quot;Request created&quot;</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n\"Request created\"",          "type": "json"        }      ]    },    "filename": "api/controllers/Requests.php",    "groupTitle": "Requests"  },  {    "type": "delete",    "url": "/requests/:request_id",    "title": "Delete",    "name": "Delete",    "group": "Requests",    "description": "<p>Delete an existing request (ideally after we've downloaded it)</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": ":request_id",            "description": "<p>Unique identifier of the request</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X DELETE -H \"api-key: {api-key}\" \"https://connect.ausnetservices.com.au/api/requests/11\"",        "type": "curl"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data",            "description": "<p>&quot;Request deleted&quot;</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n\"Request deleted\"",          "type": "json"        }      ]    },    "filename": "api/controllers/Requests.php",    "groupTitle": "Requests",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "api-key",            "description": "<p>Authorisation token for API access</p>"          }        ]      }    }  },  {    "type": "get",    "url": "/requests/:requestid",    "title": "Get",    "name": "Get",    "group": "Requests",    "description": "<p>Get an existing request</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": ":requestid",            "description": "<p>Unique identifier of the request</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Integer",            "optional": false,            "field": "requestid",            "description": "<p>Unique identifier of the request</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "created_utc",            "description": "<p>UTC timestamp when request was created</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "state",            "description": "<p>State of request (new, deleted)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "ekey",            "description": "<p>Payload encrypted with public key. Decrypt this with your private key to recover the payload. Payload structure is exactly the same as that posted in the 'create' call.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "epayload",            "description": "<p>Encrypted payload</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "consentforms",            "description": "<p>Array of consent form files</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"request\": {\n    \"requestid\": 10,\n    \"created_utc\": \"2016-06-22 06:10:52\",\n    \"state\": \"new\",\n    \"ekey\": \"sLNT+QMO+llKfQWXL1wouJz6pSMuZtd8+dZxEm50ITl/0sz4cgSm4ol3+u0g0QTYcIM1MQYo3vJ7wnrFBgVUDREajC6YbYMKt9dRojUfnD9ucuZGDU1tAOHMSu6v+F7QhFqDy7RhzFifd8laRrXYUCKXVP1NKYzuonEQvc2UK39AekSR5AjKn0snsmKM0kKT74K+cn5eryIxuxQ/gnK/4gcLOoQsxRqHLTuFjGECVFG8OLrgPmdYmiilwLLkV+/SOBfVUqODy5a+k1VfYTtxNHvi8BX/JFdBqHVnTeKjiG36NIW8d05hENtIOkdTc7Ow+Icrs5A4qpdDgw1eyNCggA==\",\n    \"epayload\": \"05aY/qj4SyQejdCs//ANXeispQJC7Hekmd9PV0aE4zE3ZNyHZMd6n81q1S9aYdYZeCyZMqYxlrGjL/4quPhO77HieTPlkzgsmJ0Oem1qdZvtiFW8E95EsV76EYm3zviKveRGLaHfVxx5ukaTl1AmicPFD4e98hwLaKTLSZrLjMKTbduC83HtFlJA0ONhxNBnltL4ZQOE9e4j4KkCWXgI8tSWGl4jS3HHHu6QmpDzX0KDzzUL/4eWLWiH+Ungx9NixkzDGgj+7jb4OPWt4mTTSQedxaLxM92fXNmgLCaA1DfMOPucEOhIRjIeDwjjt6NJ2xr3gXgx5PFq8xBZi6NFlnMh4l2JUPRY4YNs81ASilio2Sl5ygFuFxH6ioRzw8+igh3Vw89McBLDgpKJxnPauwdgTDgTw4Vc+wg33GI+vdWdvMEaxRw+BbqNeR6Db5BK+LMptlYTzmCj7DYeNrSccc5U2AifbhCbXOM0T4WpXt1opjp/e0pSa8FbcTvo7Q1GuyB8eHA1vjLfR4z9NjLgQcEvbMZ4rgDt7LUcnQD6+qN0Q4QpsAy+roJ6Wp1hzti5mrU+H+kAqF4CIDNs2V6/uVlkD/CRVrnCHNo63a4QLgS7Z+j/IYGNFc3kqVqbzCmXFsssJNSurC+zvIogJycGBw==\"\n  }\n}",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X GET -H \"api-key: {api-key}\" \"https://connect.ausnetservices.com.au/api/requests/10\"",        "type": "curl"      }    ],    "filename": "api/controllers/Requests.php",    "groupTitle": "Requests",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "api-key",            "description": "<p>Authorisation token for API access</p>"          }        ]      }    }  },  {    "type": "get",    "url": "/requests",    "title": "Index",    "name": "Index",    "group": "Requests",    "description": "<p>List existing requests for metering data</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "state",            "description": "<p>Request state (eg 'new')</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": false,            "field": "after",            "description": "<p>Requests received after this date YYYY-MM-DD</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": false,            "field": "before",            "description": "<p>Requests received before this date YYYY-MM-DD</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "array",            "description": ""          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": ".requestid",            "description": "<p>Unique id of the request</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".state",            "description": "<p>State of this request (new, deleted)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": ".created_utc",            "description": "<p>Timestamp when the request was created (YYYY-MM-DD HH24:MI:SS)</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"requests\": [\n    {\n      \"requestid\": \"141\",\n      \"state\": \"deleted\",\n      \"created_utc\": \"2016-06-22 06:11:42\"\n    },\n  ]\n}",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X GET \\\n  -H \"api-key: {api-key}\" \\\n  \"https://connect.ausnetservices.com.au/api/requests?after=2015-01-01&state=deleted\"",        "type": "curl"      }    ],    "filename": "api/controllers/Requests.php",    "groupTitle": "Requests",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "api-key",            "description": "<p>Authorisation token for API access</p>"          }        ]      }    }  }] });
