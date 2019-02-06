
gulp uses interpret: https://github.com/gulpjs/interpret

see https://github.com/gulpjs/gulp/pull/2172/files


---

user search

AWS_PROFILE=mattv aws dynamodb scan --table-name User_Prefs --filter-expression 'contains(#user.firstName,:name)'  --expression-attribute-values '{":name":{"S":"Flo"}}' --expression-attribute-names '{"#user": "user"}'
