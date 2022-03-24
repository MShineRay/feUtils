const NodeRSA = require('node-rsa');
const pkcsSize = 512;

//暂存位置：可将生成好的密钥对保存在配置文件中
const conf = {
    "namePri": "pkcs8-yueke",
    "privatePem": "-----BEGIN PRIVATE KEY-----123123123-----END PRIVATE KEY-----"
  }
;

/**
 * 生成密钥对
 * 传入公司name：www.yushang
 * @param name:指定格式 pkcs8
 *
 */
function generateKeyPair(name, namePub, namePri) {
  // 1.创建RSA对象，并指定 秘钥长度
  let key = new NodeRSA({b: pkcsSize});
  key.setOptions({encryptionScheme: 'pkcs1'});//指定加密格式
  // 2.生成 公钥私钥，使用 pkcs8标准，pem格式
  namePub = name + '-' + namePub;
  namePri = name + '-' + namePri;
  let publicPem = key.exportKey(namePub);//制定输出格式
  let privatePem = key.exportKey(namePri);
  console.log(namePub + '公钥:\n', publicPem);
  console.log(namePri + '私钥:\n', privatePem);
  return {
    namePub: namePub,
    namePri: namePri,
    publicPem: publicPem,
    privatePem: privatePem
  };
}


/**
 * 生成公私钥作为配置文件在顶部，然后注释以下代码，导出配置
 * @type {{namePub: *, publicPem: *, privatePem: *, namePri: *}}
 */
// let generateKeyPair1 = generateKeyPair('pkcs8', 'miaowenjuan', 'yueke');
// console.error(generateKeyPair1);

exports.signConf = conf;
exports.generateKeyPair = generateKeyPair;
