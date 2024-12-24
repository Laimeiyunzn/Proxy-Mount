[rewrite_local]

^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/Laimeiyunzn/Js/Eight-word mantra.js
[mitm] 

hostname = bzpp2.iwzbz.com


var ojbk={"code":-1,"data":{"vipTipsType":0,"vipLevel":3,"adtype":0,"expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(ojbk)});