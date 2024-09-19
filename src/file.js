import SparkMD5 from 'spark-md5'
/**
 * 文件分片
 * @description 将文件分割成多个块
 * @param file
 * @param chunkSize
 * @returns {*[]}
 */
export function createChunks(file, chunkSize){
  let chunks = [];
  for(let i = 0; i < file.length; i += chunkSize){
    chunks.push(file.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 *
 * 文件hash
 * @param chunks
 * @returns {Promise<unknown>}
 * @reference
 * 抖音视频：7.61 yTl:/ Y@M.jp 07/25 大文件分片上传 # 前端开发工程师 # JavaScript # 编程 # 程序员 # web前端 # 前端 # 前端开发  https://v.douyin.com/ikaRXMfp/ 复制此链接，打开Dou音搜索，直接观看视频！
 */
export function fileHash(chunks){
  return new Promise((resolve, reject) => {
    let spark = new SparkMD5.ArrayBuffer();
    let fileReader = new FileReader();
    let currentChunk = 0;
    fileReader.onload = function(e){
      spark.append(e.target.result);
      currentChunk++;
      if(currentChunk < chunks.length){
        loadNext();
      }else{
        resolve(spark.end());
      }
    };
    fileReader.onerror = function(e){
      reject(e.target.error);
    };
    function loadNext(){
      fileReader.readAsArrayBuffer(chunks[currentChunk]);
    }
    loadNext();
  });
}
