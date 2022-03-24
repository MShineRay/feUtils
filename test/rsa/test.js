let dataSign = require('./dataSign');
let dataSignVerify = require('./dataSignVerify');

/**生成密钥对*************************************************************************/
//第一个参数：指定加密格式 第二个参数接收者公司名称或其自定义名称 第三个参数发送者公司名称或其自定义名称
let generateKeyPair = require('./generateKeyPair').generateKeyPair('pkcs8', 'receiver', 'sender');
let namePub = generateKeyPair.namePub;
let namePri = generateKeyPair.namePri;
let publicPem = generateKeyPair.publicPem;
let privatePem = generateKeyPair.privatePem;
/**生成密钥对*************************************************************************/


/**私钥加签***************************************************************************/
//sender发送数据加签:一般进行信息摘要后加签，防止加密信息过大，损耗性能
//此处的str可以是uri上的路径参数，也可以是请求体中的一部分数据
//let uri = 'http://www.baidu.com?name=li&age=18&pwd=111111';
//由于以上示例路径参数较少，可以选择对参数全部加签，也可进行摘要加签，选择摘要要告知对方摘要信息是哪些
let str = 'name=li生活&age=18&pwd=111111';
let sign = dataSign.dataPrivateSign(str, namePri, privatePem);
//生成sign连接参数，以下为发送的实际参数
let strr = str + "&sign=" + sign;
console.error("最后发送参数：" + strr);
/**私钥加签***********************![在这里插入图片描述](https://img-blog.csdnimg.cn/20191106105756530.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc4NDY0Mg==,size_16,color_FFFFFF,t_70)****************************************************/


/**公钥验签***************************************************************************/
// 接收到的参数：strr
// 取出签名：sign和摘要数据str
let dataPubVerifySign = dataSignVerify.dataPubVerifySign(str, sign, namePub, publicPem);
console.error("验签结果：" + dataPubVerifySign);
/**公钥验签***************************************************************************/


/**公钥加密，私钥解密***************************************************************************/
let encrypt = dataSignVerify.encrypt(str, publicPem);
let decrypt = dataSign.decrypt(encrypt, privatePem);
console.error(encrypt);
console.error(decrypt);
/**公钥加密，私钥解密***************************************************************************/
